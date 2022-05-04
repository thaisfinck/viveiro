import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactUs () {
  const form = useRef();

  
  const [values, setValues] = useState({
      user_name: '',
      user_email: '',
      message: ''
  });

  

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVER_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        console.log(result.text);
        setValues({
          user_name: '',
          user_email: '',
          message: ''
        });
        setStatus('success');
    }, (error) => {
      console.log(error)
        alert("Um erro aconteceu, tente novamente", error.text);
     });
  };
  
  useEffect(() => { 
    if (status === 'success') {
      setTimeout(() => {
        setStatus('');
      }
      , 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues( values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }


  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="input-group mb-3">
        <input value={values.user_name} onChange={handleChange} type="text" className="form-control" placeholder="Nome" name="user_name"></input>
        </div>
        <div className="input-group mb-3">
        <input value={values.user_email} onChange={handleChange} type="text" className="form-control" placeholder="E-mail" name="user_email" required></input>
        </div>
        <div className="input-group mb-3">
        <textarea value={values.message} onChange={handleChange} className="form-control" aria-label="With textarea" placeholder="Mensagem" name="message" required></textarea>
        </div>
        <button type="submit" className="btn">Enviar</button>
        {status && renderAlert()}
   </form>
  );
};

const renderAlert = () => (
  <div className='mt-3 alert alert-success'>
    <p>Mensagem Enviada com Sucesso!</p>
  </div>
)