import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  // Guard: fail fast with a clear message if env vars are missing
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Contact API: GMAIL_USER or GMAIL_APP_PASSWORD is not set.')
    return Response.json(
      { error: 'Server email configuration is missing.' },
      { status: 500 }
    )
  }

  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0a0a0a;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <hr style="border: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Contact API error:', message)
    return Response.json(
      { error: `Failed to send email: ${message}` },
      { status: 500 }
    )
  }
}

