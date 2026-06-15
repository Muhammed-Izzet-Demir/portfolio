import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a full-stack computer engineer graduated from{" "}
              <b className="purple">Gazi University</b>, currently building
              production systems at{" "}
              <b className="purple">Papilon A.Ş.</b> that serve{" "}
              <b className="purple">10,000+ users</b> across enterprise clients
              and defense sectors.
              <br />
              <br />
              I specialize in{" "}
              <i>
                <b className="purple">React / TypeScript</b>
              </i>{" "}
              frontends,{" "}
              <i>
                <b className="purple">Python / Node.js</b>
              </i>{" "}
              backends, and RESTful API architecture — delivering scalable,
              containerized web applications in Agile environments.
              <br />
              <br />
              Beyond full-stack development, I design and ship{" "}
              <b className="purple">AI-powered computer vision solutions</b>:
              face recognition, liveness detection, and OCR systems deployed
              across web, Android, and iOS. I have published a{" "}
              <i>
                <b className="purple">biometric SDK as an npm package</b>
              </i>{" "}
              and contributed to a{" "}
              <b className="purple">Türk Telekom joint defense project</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/Muhammed-tr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammed-izzet-demir-2a7635234/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/muhammedizzetdemir/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
