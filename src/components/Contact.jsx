import React from "react";
import {
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
  BsFillGeoAltFill,
  BsGlobe,
} from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact section">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title text-center mb-4 fs-3">
          Have You Any Questions?
        </h3>
        <h4 className="contact-subTitle text-muted fs-5 text-center mb-5">
          I' M AT YOUR SERVICES
        </h4>
        <div className="row text-center mb-5">
          {/* ========== contact info start  === */}
          <div className="contact-infoItem">
            <div className="icon">
              <BsFillTelephoneFill className="fa" />
            </div>
            <h4>Call Us On</h4>
            <p>+92 302 9569126</p>
          </div>
          {/* ========== contact info end  === */}
          {/* ========== contact info start  === */}
          <div className="contact-infoItem">
            <div className="icon">
              <BsFillGeoAltFill className="fa" />
            </div>
            <h4>Office</h4>
            <p>Islamabad</p>
          </div>
          {/* ========== contact info end  === */}
          {/* ========== contact info start  === */}
          <div className="contact-infoItem">
            <div className="icon">
              <BsFillEnvelopeFill className="fa" />
            </div>
            <h4>Email</h4>
            <p>nadiakhan1337@gmail.com</p>
          </div>
          {/* ========== contact info end  === */}
          {/* ========== contact info start  === */}
          <div className="contact-infoItem">
            <div className="icon">
              <BsGlobe className="fa" />
            </div>
            <h4>Website</h4>
            <p>www.domain.com</p>
          </div>
          {/* ========== contact info end  === */}
        </div>
        <h3 className="contact-title text-center mb-4 fs-3">
          SEND ME AN EMAIL
        </h3>
        <h4 className="contact-subTitle text-muted fs-5 text-center mb-5">
          I' M VERY RESPONSIVE TO MESSAGES
        </h4>
        {/* // ========== contact form start  === */}
        <div className="row">
          <div className="contactForm px-5">
            <div className="row">
              <div className="formItem px-5 col-6">
                <div className="formGroup">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="formItem px-5 col-6">
                <div className="formGroup">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="formItem px-5 col-12">
                <div className="formGroup">
                  <textarea name="" id="" className="form-control" placeholder="Message"></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="formItem px-5 col-12">
                <div className="formGroup">
                  <button type="submit" className="btn-blog">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* // ========== contact form end  === */}
      </div>
    </section>
  );
};

export default Contact;
