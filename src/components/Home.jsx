import React from "react";
// import "./App.css";


const Home = () => {
  return (
    <>
      <div className="home section py-5">
      <div className="container-h container-fluid">
        <div className="row">
          <div className="col-7 home-info p-5 my-5">
            <h3 className="heloo fs-2" >
              Hello , my name is <span className="name">Nadya Khan</span>
            </h3>
            <h3 className="my-profession fs-3 my-3">
              I' m a <span className="typing">Front end web developer</span>
            </h3>
            <p className="fs-5 mb-4">
              I'm a web developer with a passion for building beautiful,
              functional websites. I'm currently working as a freelancer, but
              I'm always looking for new opportunities to learn and grow.
            </p>
            <a href="" className="btn-blog hire-me">
              Hire Me
            </a>
          </div>
          <div className="col-5 home-img text-center p-5">
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
