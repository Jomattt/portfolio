import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some mobile and frontend projects I have worked on.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Flutter Ride Sharing App"
              description="A cross-platform mobile application developed using Flutter and Dart. The app features responsive UI components, user authentication, REST API integration, and smooth user experience for ride booking and management."
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Task Management App"
              description="A modern mobile task management application built with Flutter and Firebase. Users can create, update, and manage tasks efficiently with clean UI design and real-time database functionality."
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Portfolio Website"
              description="A responsive personal portfolio website developed using React.js and Tailwind CSS to showcase skills, projects, education, and professional experience with a modern user interface."
              ghLink="https://github.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;