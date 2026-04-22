import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const PORT = Number(process.env.PORT || 3001)
const SMTP_USER = process.env.SMTP_USER || ''
const SMTP_PASS = process.env.SMTP_PASS || ''
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER || SMTP_USER
const allowedOrigins = (process.env.CLIENT_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        callback(null, true)
        return
      }

      callback(new Error('Not allowed by CORS'))
    },
  }),
)

app.use(express.json({ limit: '1mb' }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
})

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function normalizePayload(body) {
  return {
    name: String(body?.name || '').trim(),
    email: String(body?.email || '').trim(),
    phone: String(body?.phone || '').trim(),
    service: String(body?.service || '').trim(),
    message: String(body?.message || '').trim(),
  }
}

function validatePayload({ name, email, message }) {
  if (!name || !email || !message) {
    return 'Name, email, and message are required.'
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(email)) {
    return 'Please provide a valid email address.'
  }

  return null
}

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    ok: true,
    mailConfigured: Boolean(SMTP_USER && SMTP_PASS && CONTACT_RECEIVER),
  })
})

app.post('/api/contact', async (req, res) => {
  if (!SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER) {
    res.status(500).json({ error: 'Mail service is not configured on server.' })
    return
  }

  const payload = normalizePayload(req.body)
  const validationError = validatePayload(payload)

  if (validationError) {
    res.status(400).json({ error: validationError })
    return
  }

  const phoneValue = payload.phone || 'Not provided'
  const serviceValue = payload.service || 'Not specified'

  const mailText = [
    'New contact form submission from beemyle website',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${phoneValue}`,
    `Service: ${serviceValue}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')

  const mailHtml = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneValue)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceValue)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
  `

  try {
    await transporter.sendMail({
      from: `"Beemyle Website" <${SMTP_USER}>`,
      to: CONTACT_RECEIVER,
      replyTo: payload.email,
      subject: `New contact form message from ${payload.name}`,
      text: mailText,
      html: mailHtml,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact form email:', error)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

app.use((error, _req, res, _next) => {
  if (error.message === 'Not allowed by CORS') {
    res.status(403).json({ error: 'Origin not allowed.' })
    return
  }

  console.error('Unhandled server error:', error)
  res.status(500).json({ error: 'Server error.' })
})

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`)
})
