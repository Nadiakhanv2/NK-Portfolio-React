import React from 'react'
import {
  BsFillPaletteFill,
  BsFillLaptopFill,
  BsFillPhoneFill,
  BsCodeSlash,
  BsSearch,
  BsFillMegaphoneFill,
} from "react-icons/bs";

const Services = () => {
  return (
    <section className="service section-p">
      <div className="container">
        <div className="row">
          <div className="section-title px-5">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsFillPhoneFill className='fa'/>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsFillLaptopFill className='fa'/>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsFillPaletteFill className='fa'/>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsCodeSlash className='fa' />
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}

          {/* service item end */}
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsSearch className='fa'/>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}
          {/* === service item start */}
          <div className="service-item px-5">
            <div className="service-item-inner">
              <div className="icon">
                <BsFillMegaphoneFill className='fa'/>
              </div>
              <h4>Web Design</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quidem.
              </p>
            </div>
          </div>
          {/* service item end */}
        </div>
      </div>
    </section>
  );
}

export default Services
