import React from "react";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="home-info">
            <h3 className="heloo">Hello , my name is <span className="name">Nadya Khan</span></h3>
            <h3 className="my-profession">I' m a <span className="typing">Front end web developer</span></h3>
            <p>
              I'm a web developer with a passion for building beautiful,
              functional websites. I'm currently working as a freelancer,
              but I'm always looking for new opportunities to learn and grow.

            </p>
            <a href="" className="btn hire-me">Hire Me</a>
          </div>
          <div className="home-img">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
