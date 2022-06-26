import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {FaTelegram} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_htjjkng', 'template_fqz3vej', form.current, 'SV1dVcXqFEvrJlvWr')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>oralkhanova.zhadyra@gmail.com</h5>
                        <a href="mailto:oralkhanova.zhadyra@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaTelegram className='contact__option-icon'/>
                        <h4>Telegram</h4>
                        <h5>@zhadyra_o</h5>
                        <a href="https://m.me/@zhadyra_o" target="_blank">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <FaWhatsappSquare className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?phone=+77054612406" target="_blank">Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
