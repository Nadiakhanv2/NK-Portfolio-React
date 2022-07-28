import React from "react";
// import "./App.css";


const Home = () => {
  return (
    <>
      <div className="home section">
      <div className="container-h container-fluid">
        <div className="row">
          <div className="home-info">
            <h3 className="heloo">
              Hello , my name is <span className="name">Nadya Khan</span>
            </h3>
            <h3 className="my-profession">
              I' m a <span className="typing">Front end web developer</span>
            </h3>
            <p>
              I'm a web developer with a passion for building beautiful,
              functional websites. I'm currently working as a freelancer, but
              I'm always looking for new opportunities to learn and grow.
            </p>
            <a href="" className="btn hire-me">
              Hire Me
            </a>
          </div>
          <div className="home-img">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="img" 
            />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
