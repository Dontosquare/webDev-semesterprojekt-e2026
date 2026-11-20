import { Router } from 'express';
import fs from 'node:fs/promises';
import Handlebars from 'handlebars';
import transporter from '../config/mailer.js';

const router = Router();
let template;

router.get('/', (req, res) => res.render('contact', { title: 'Kontakt os' }));

router.post('/send', async (req, res) => {
  const { name, email, message, website } = req.body;
  // Skjult honeypot-felt til at filtrere simple spambots.
  if (website) return res.render('contact', { title: 'Kontakt os', success: 'Tak for din besked!' });
  const valid = typeof name === 'string' && name.trim().length >= 2 && name.length <= 100 &&
    typeof email === 'string' && email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof message === 'string' && message.trim().length >= 10 && message.length <= 5000;
  if (!valid) return res.status(400).render('contact', {
    title: 'Kontakt os', error: 'Udfyld venligst alle felter korrekt.',
    form: { name: typeof name === 'string' ? name : '', email: typeof email === 'string' ? email : '', message: typeof message === 'string' ? message : '' }
  });
  try {
    if (!template) {
      const source = await fs.readFile(new URL('../views/emails/contact.hbs', import.meta.url), 'utf8');
      template = Handlebars.compile(source);
    }
    const data = { name: name.trim(), email: email.trim(), message: message.trim() };
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: user.email,
      replyTo: data.email,
      subject: 'Ny besked fra kontaktformular',
      text: `Navn: ${data.name}\nE-mail: ${data.email}\n\nBesked:\n${data.message}`,
      html: template(data)
    });
    return res.render('contact', { title: 'Kontakt os', success: 'Din besked er blevet sendt!' });
  } catch (error) {
    console.error('Mailfejl:', error);
    return res.status(500).render('contact', {
      title: 'Kontakt os', error: 'Der opstod en fejl ved afsendelse. Prøv igen senere.',
      form: { name, email, message }
    });
  }
});
export default router;
