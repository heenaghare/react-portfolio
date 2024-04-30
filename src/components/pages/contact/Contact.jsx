import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="max-width">
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <div className="icons">
            <div class="icons">
                        <div class="row">
                            <i class="fas fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Heena Ghare</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Pune, India</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fas fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">heenaghare09@gmail.com</div>
                            </div>
                        </div>
                    </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required />
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div class="field textarea">
                            <textarea cols="10" rows="5" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
