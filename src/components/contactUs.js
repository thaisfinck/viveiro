import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVER_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_USER_ID)
      .then((result) => {
        alert("Mensagem enviada com sucesso", result.text);
    }, (error) => {
      console.log(error)
        alert("Um erro aconteceu, tente novamente", error.text);
     });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Nome" name="user_name"></input>
        </div>
        <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="E-mail" name="user_email" required></input>
        </div>
        <div className="input-group mb-3">
        <textarea className="form-control" aria-label="With textarea" placeholder="Mensagem" name="message" required></textarea>
        </div>
        <button type="submit" className="btn">Enviar</button>
   </form>
  );
};