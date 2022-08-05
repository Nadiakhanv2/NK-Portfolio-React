import React from "react";

const About = () => {
  return (
    <section className="about section">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="section-title px-5">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content px-4">
            <div className="row">
              <div className="about-text px-5">
                <h3>
                  I' m Nadya Khan and <span>Web Developer</span>
                </h3>
                <p>
                  I'm a web developer with a passion for building beautiful,
                  functional websites. I'm currently working as a freelancer,
                  but I'm always looking for new opportunities to learn and
                  grow.I'm a web developer with a passion for building
                  beautiful, functional websites. I'm currently working as a
                  freelancer, but I'm always looking for new opportunities to
                  learn and grow.
                </p>
              </div>
            </div>
          </div>
          <div className="row px-5">
            <div className="personal-info px-5 mt-4">
              <div className="row">
                <div className="info-item">
                  <p>
                    Birthday : <span> 26 Sep, 1999</span>
                  </p>
                </div>
                <div className="info-item ">
                  <p>
                    Age : <span> 22</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    Website : <span> www.domain.com</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    Email : <span> nadiakhan1337@gmail.com</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    Degree : <span>CS</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    Phone : <span> 0302 9569126</span>
                  </p>
                </div>

                <div className="info-item">
                  <p>
                    City : <span> Multan</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    Freelance : <span> Learner</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="buttons px-5 mt-4">
                  <a href="/" className="btn-blog">
                    Download CV
                  </a>
                  <a href="/contact" className="btn-blog hire-me">
                    Hire Me
                  </a>
                </div>
              </div>
            </div>

            <div className="skills p-3 mt-4">
              <div className="row">
                <div className="skill-item px-4">
                  <h5>CSS</h5>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <div className="skill-percent">76%</div>
                </div>
                <div className="skill-item px-4">
                  <h5>JS</h5>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "86%" }}
                    ></div>
                  </div>
                  <div className="skill-percent">86%</div>
                </div>
                <div className="skill-item px-4">
                  <h5>HTML</h5>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "96%" }}
                    ></div>
                  </div>
                  <div className="skill-percent">96%</div>
                </div>
                <div className="skill-item px-4">
                  <h5>BOOTSTRAP</h5>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "76%" }}
                    ></div>
                  </div>
                  <div className="skill-percent ">76%</div>
                </div>
                <div className="skill-item px-4">
                  <h5>PHP</h5>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "66%" }}
                    ></div>
                  </div>
                  <div className="skill-percent">66%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="education px-5">
              <div className="title">
                <h3>Education</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark mt-3">
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i class="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i class="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="experience px-5">
              <div className="title">
                <h3>Experience</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline shadow-dark mt-3">
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i class="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                      {/* ==== timeline item ==== */}
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i class="bi bi-calendar2-heart-fill"></i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-calendar2-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5Zm-2 4v-1c0-.276.244-.5.545-.5h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5Zm6 3.493c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                          </svg>
                          <span>2013 - 2015</span>
                        </h3>
                        <h4 className="timeline-title">
                          Master in Computer Science
                        </h4>
                        <p className="timeline-description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec euismod, nisl eget consectetur
                          consectetur, nisi nisl consectetur nisi nisl
                          consectetur nisi nisl consectetur nisi nisl
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
