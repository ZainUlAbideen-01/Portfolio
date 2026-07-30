import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const { error } = await resend.emails.send({
      // Replace with your verified Resend domain sender
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'zain.gd234@gmail.com',
      reply_to: email,
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

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ error: 'Failed to send email.' }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return Response.json({ error: 'Internal server error.' }, { status: 500 })
  }
}
