import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Importa EmailJS
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.nombre) formErrors.nombre = 'El nombre es requerido';
    if (!formData.email) {
      formErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'El email no es válido';
    }
    if (!formData.mensaje) formErrors.mensaje = 'El mensaje es requerido';
    return formErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      // Configura EmailJS
      emailjs.send(
        'TU_SERVICE_ID', // Reemplaza con tu Service ID de EmailJS
        'TU_TEMPLATE_ID', // Reemplaza con tu Template ID de EmailJS
        formData,
        'TU_USER_ID' // Reemplaza con tu User ID de EmailJS
      )
      .then((response) => {
        console.log('Correo enviado:', response.status, response.text);
        setIsSubmitted(true); // Muestra un mensaje de éxito
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
      });
      
      setFormData({ nombre: '', email: '', mensaje: '' }); // Limpia el formulario
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isSubmitted && <p className="success-message">¡Formulario enviado con éxito!</p>}
      <div>
        <input
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={formData.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <span className='error'>{errors.nombre}</span>}
      </div>
      <div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className='error'>{errors.email}</span>}
      </div>
      <div>
        <textarea
          name='mensaje'
          placeholder='Mensaje'
          value={formData.mensaje}
          onChange={handleChange}
        ></textarea>
        {errors.mensaje && <span className='error'>{errors.mensaje}</span>}
      </div>
      <button className='button-form-mail' type='submit'>Enviar</button>
    </form>
  );
}

export default Form;
