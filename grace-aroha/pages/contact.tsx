import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <div class="container-ctc">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h1 class="title">Let's get in touch</h1>
          <div class="text"></div>

          <div class="info">
            <div class="information">
              <img src="img/email.png" class="icon-ct" alt="email" />
              <p class="middle">admin@graceandaroha.co.nz</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon-ct" alt="phone" />
              <p class="middle no">021 403 447</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/jayfowles.co.nz">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form id="contact-form" method="POST" autocomplete="off">
            <h2 class="title">Contact us</h2>
            <div class="input-container">
              <input type="text" name="name" class="input" id="name-input" />
              <label for="name">Name</label>
              <span>Name</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" id="email-input" />
              <label for="email">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" id="phone-input" />
              <label for="phone">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" id="description-input"></textarea>
              <label for="description-input">Message</label>
              <span>Message</span>
            </div>
            <button type="button" onClick="submitToAPI(event)" value="Send" class="btn-cp">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
