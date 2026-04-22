export default function handler(_req, res) {
  const smtpUser = process.env.SMTP_USER || ''
  const smtpPass = process.env.SMTP_PASS || ''
  const contactReceiver = process.env.CONTACT_RECEIVER || smtpUser

  res.status(200).json({
    ok: true,
    mailConfigured: Boolean(smtpUser && smtpPass && contactReceiver),
  })
}
