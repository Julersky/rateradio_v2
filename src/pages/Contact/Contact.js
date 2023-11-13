import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Loader from '../../components/Loader/Loader'; // Import your Loader component
import './Contact.scss';

const Contact = () => {
  document.title = "Raté Radio - Contact";

  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    const isValid = validateEmail(emailValue);
    setIsEmailValid(isValid);

    if (isValid) {
      setEmailError(false);
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const emailValue = form.current.email.value;
    const isValid = validateEmail(emailValue);
    setIsEmailValid(isValid);

    if (!isValid) {
      setEmailError(true);
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY);
      console.log(result.text);
      setIsSubmitted(true);
      setEmailError(false);
    } catch (error) {
      console.error(error.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className='page_content_title'>
        <h1>Contactez nous</h1>
        <p>Posez-nous vos questions!</p>
      </div>
      <main>
        <div className='form_container'>
          <form ref={form} onSubmit={sendEmail}>
            <div className={`form-group ${isEmailValid ? 'valid-email' : ''} ${emailError ? 'invalid-email' : ''}`}>
              <label>Nom</label>
              <input type="text" id="name" name="name"/>
            </div>

            <div className={`form-group ${isEmailValid ? 'valid-email' : ''} ${emailError ? 'invalid-email' : ''}`}>
              <label>Email</label>
              <input type="email" id="email" name="email" className={emailError ? 'red-border' : (isEmailValid ? 'green-border' : '')} onChange={handleEmailChange} // Handle email validation on change
              />
              {emailError && <p className="error-message">Invalid email address</p>}
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea id="message" name="message"></textarea>
            </div>
            {isLoading ? (
              
                <Loader />
           
            ) : (
              <button type="submit">Envoyer</button>
            )}
          </form>
          {isSubmitted && (
            <p className="success-message">Merci pour votre message! <br />Nous reviendrons vers vous dans les plus brefs délais</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Contact;
