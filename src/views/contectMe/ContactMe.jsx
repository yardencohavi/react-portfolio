import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contactMe.css'

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_yardencohavi', 'template_p85ynum', form.current, 'user_aRg4UuWeOM06xzdUKmSsO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  document.querySelectorAll('input').values ='';

  return (
    <div className="contact__container" id="contact">
      <div className="form__container">
          <h1>Contact Me</h1>
          <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-group has-feedback">
                  <label for="name"></label>
                  <input type="text" className="form-control" id="name" placeholder="Your name" name="user_name" required/>
                  <i class="bi bi-person-fill" role="img" aria-label="GitHub"></i>
              </div>
              <div className="form-group has-feedback">
                  <label for="email"></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" name="user_email" required/>
                  <i class="bi bi-envelope-fill"></i>
              </div>
              <div className="form-group has-feedback">
                <label for="message"></label>
                <textarea className="form-control" rows="8" id="message2" placeholder="Your Message" name="message" required></textarea>
                <i class="bi bi-pencil-fill"></i>
              </div>
              <input type="submit" value="Send me" className="btn btn-secondary"/>
        </form>
    </div>
    <div className="footer">
      <h1 style={{paddingTop:'15px'}}>Connect with me</h1>
      <ul className="social-links" style={{listStyle:"none"}}>
        <a target="_blank" href="https://www.linkedin.com/in/yardencohavi/" class="pi bi-linkedin"></a>
        <a target="_blank" href="https://github.com/yardencohavi" class="pi bi-github"></a>
        <a target="_blank" href="https://www.instagram.com/yardencohavi/" class="pi bi-instagram"></a>
        <a target="_blank" href="https://www.facebook.com/yardencohavi/" class="pi bi-facebook"></a>
      </ul>
    </div>      
  </div>
  );
};
export default ContactMe
