import type { NextPage } from 'next';

import { Footer } from '@/components/Footer';
import { useEffect, useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { API_MAIL } from '../config';
import Layout from '@/components/Layout';

const ContactPage: NextPage = () => {
  const [nameFocus, setNameFocus] = useState(false);
  const [nameClass, setNameClass] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [emailClass, setEmailClass] = useState('');
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [phoneClass, setPhoneClass] = useState('');
  const [messageFocus, setMessageFocus] = useState(false);
  const [messageClass, setMessageClass] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    nameFocus ? setNameClass('focus') : setNameClass('');
    emailFocus ? setEmailClass('focus') : setEmailClass('');
    phoneFocus ? setPhoneClass('focus') : setPhoneClass('');
    messageFocus ? setMessageClass('focus') : setMessageClass('');
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (name === '' || email === '' || phone === '' || message === '') {
      return toast.error('Please fill out all fields!');
    }

    const emailRE = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRE.test(email)) {
      return toast.error('Email Address entered, is not valid');
    }

    const values = { name: name, email: email, phone: phone, message: message };

    const res = await fetch(`${API_MAIL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error('Something went wrong!');
    } else {
      toast.success('Sent!');
      e.target.reset();
      setNameClass('');
      setEmailClass('');
      setPhoneClass('');
      setMessageClass('');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setNameFocus(false);
      setEmailFocus(false);
      setPhoneFocus(false);
      setMessageFocus(false);
    }
  };

  return (
    <Layout sticky={false} title="Contact | Grace & Aroha">
      <ToastContainer theme="colored" />
      <div className="container-ctc">
        <span className="big-circle"></span>
        <img src="images/shape.png" className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h1 className="title">Let's get in touch</h1>
            <div className="text"></div>

            <div className="info">
              <div className="information">
                <img src="images/email.png" className="icon-ct" alt="email" />
                <p className="middle">admin@graceandaroha.co.nz</p>
              </div>
              <div className="information">
                <img src="images/phone.png" className="icon-ct" alt="phone" />
                <p className="middle no">021 403 447</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/jayfowles.co.nz">
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form id="contact-form" onSubmit={handleSubmit} autoComplete="off">
              <h2 className="title">Contact us</h2>
              <div className={`input-container ${nameClass}`}>
                <input
                  type="text"
                  name="name"
                  className="input"
                  id="name-input"
                  value={name}
                  onFocus={() => setNameFocus(true)}
                  onBlur={() => {
                    if (!name) {
                      setNameFocus(false);
                    }
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="name">Name</label>
                <span>Name</span>
              </div>
              <div className={`input-container ${emailClass}`}>
                <input
                  type="email"
                  name="email"
                  className="input"
                  id="email-input"
                  value={email}
                  onFocus={() => setEmailFocus(true)}
                  onBlur={() => {
                    if (!email) {
                      setEmailFocus(false);
                    }
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="email">Email</label>
                <span>Email</span>
              </div>
              <div className={`input-container ${phoneClass}`}>
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  id="phone-input"
                  value={phone}
                  onFocus={() => setPhoneFocus(true)}
                  onBlur={() => {
                    if (!phone) {
                      setPhoneFocus(false);
                    }
                  }}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <label htmlFor="phone">Phone</label>
                <span>Phone</span>
              </div>
              <div className={`input-container ${messageClass} textarea`}>
                <textarea
                  name="message"
                  value={message}
                  className="input"
                  id="description-input"
                  onFocus={() => setMessageFocus(true)}
                  onBlur={() => {
                    if (!message) {
                      setMessageFocus(false);
                    }
                  }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></textarea>
                <label htmlFor="description-input">Message</label>
                <span>Message</span>
              </div>
              <button type="submit" className="btn-cp">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
