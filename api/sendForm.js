import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, email, mensaje } = req.body;

  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });


    const mailOptions = {
      from: email,
      to: 'fatimacosme81@gmail.com',
      subject: 'Nuevo mensaje del formulario de contacto',
      text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    try {

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ message: 'Error al enviar el formulario' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}