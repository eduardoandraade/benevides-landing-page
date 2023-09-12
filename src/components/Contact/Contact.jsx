import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_he9bx59', 'template_81z26gc', form.current, 'AgxYIT4JNmGPXxPeV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div className='Contact' id='contact'>
        <div className="left-c">
            <hr />
            <div>
                <span className='stroke-text'>FAÇA PARTE</span>
                <span>DO TIME</span>
            </div>
            <div>
                <span>BENEVIDES</span>
                <span className='stroke-text'>CONSULTORIA FITNESS.</span>
            </div>
        </div>
        <div className="right-c">

            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Digite seu e-mail aqui' />
                <button className='btn btn-c'>Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Contact