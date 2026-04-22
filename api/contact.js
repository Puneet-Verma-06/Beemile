import nodemailer from 'nodemailer'

function normalizePayload(body) {
  const value = typeof body === 'string' ? JSON.parse(body || '{}') : body || {}

  return {
    name: String(value.name || '').trim(),
    email: String(value.email || '').trim(),
    phone: String(value.phone || '').trim(),
    service: String(value.service || '').trim(),
    message: String(value.message || '').trim(),
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

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    res.status(405).json({ error: 'Method not allowed.' })
    return
  }

  const smtpUser = process.env.SMTP_USER || ''
  const smtpPass = process.env.SMTP_PASS || ''
  const contactReceiver = process.env.CONTACT_RECEIVER || smtpUser

  if (!smtpUser || !smtpPass || !contactReceiver) {
    res.status(500).json({ error: 'Mail service is not configured on server.' })
    return
  }

  let payload
  try {
    payload = normalizePayload(req.body)
  } catch {
    res.status(400).json({ error: 'Invalid request body.' })
    return
  }

  const validationError = validatePayload(payload)
  if (validationError) {
    res.status(400).json({ error: validationError })
    return
  }

  const phoneValue = payload.phone || 'Not provided'
  const serviceValue = payload.service || 'Not specified'

  const text = [
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

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phoneValue)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceValue)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replace(/\n/g, '<br />')}</p>
  `

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Beemyle Website" <${smtpUser}>`,
      to: contactReceiver,
      replyTo: payload.email,
      subject: `New contact form message from ${payload.name}`,
      text,
      html,
    })

    res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Failed to send contact form email:', error)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}
