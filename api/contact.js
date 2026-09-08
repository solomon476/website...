import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, org, email, phone, service, message } = req.body;

    const data = await resend.emails.send({
      from: 'Solian Wolves <hello@solianwolves.com>',
      to: ['solianwolves@gmail.com'],
      replyTo: email,
      subject: `New Consultation Request: ${name} from ${org}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organisation:</strong> ${org}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service of Interest:</strong> ${service}</p>
        <h3>Project Description:</h3>
        <p>${message ? message.replace(/\n/g, '<br>') : 'No project description provided.'}</p>
      `,
    });

    if (data.error) {
      console.error('Resend API Error Details:', JSON.stringify(data.error, null, 2));
      return res.status(400).json({ error: data.error.message || 'Unknown Resend error' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}
