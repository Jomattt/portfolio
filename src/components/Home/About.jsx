import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, my name is{" "}
              <span className="yellow">Jomat Jolly </span>
              and I am currently based in{" "}
              <span className="yellow">Halle (Saale), Germany.</span>

              <br />
              <br />

              I completed my{" "}
              <b className="yellow">
                Bachelor of Computer Application (BCA)
              </b>{" "}
              from MG University and I am currently pursuing an{" "}
              <b className="yellow">MBA</b> at Berlin College of Business and
              Technology.

              <br />
              <br />

              As a
              <b className="yellow"> Flutter Developer, </b>
              I enjoy building responsive applications and continuously
              improving my technical and problem-solving skills.

              <br />
              <br />

              I have experience with
              <b className="yellow">
                {" "}
                Flutter, Dart, Firebase,{" "}
              </b>
              and REST API integration for cross-platform mobile applications.

              <br />
              <br />

              I am passionate about working with
              <b className="yellow"> mobile technologies </b>
              and modern development tools while exploring new technologies and
              software solutions.

              <br />
              <br />

              I am also interested in
              <i>
                <b className="yellow">
                  {" "}
                  UI/UX implementation,
                </b>
              </i>{" "}
              application performance optimization, and emerging technologies
              related to
              <b className="yellow"> Artificial Intelligence.</b>

              <br />
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>

            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="leetcode"
                >
                  <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;