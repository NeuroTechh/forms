import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
        const { name, email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'registration@neurotechh.live',
      to: [email],
      subject: `Hello ${name}`,
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
