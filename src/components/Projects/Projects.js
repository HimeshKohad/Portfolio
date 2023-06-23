import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitfusion from "../../Assets/Projects/fitfusion.png";
import whas from "../../Assets/Projects/whas.png";
import discord from "../../Assets/Projects/discord.png";
import modernBank from '../../Assets/Projects/modern-bank.png';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitfusion}
              isBlog={false}
              title="Fit-Fusion"
              description="Fit-Fusion is an expansive fitness website constructed using ReactJS. It offers a wide array of fitness programs, subscription plans, and an abundance of resources, all tailored to empower individuals on their journey to achieve optimal health and fitness goals."
              ghLink="https://github.com/HimeshKohad/Fit-Fusion"
              demoLink="https://fitfusion.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Discord-Clone"
              description="An impressive Discord landing page clone meticulously crafted using HTML and CSS. Immerse yourself in its captivating user interface, faithfully emulating the aesthetics of the renowned chat platform. With its seamless responsiveness and intuitive design. Elevate your portfolio with the allure of Discord-inspired brilliance."
              ghLink="https://github.com/HimeshKohad/Discord-Clone"
              demoLink="https://himeshkohad.github.io/Discord-Clone/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={modernBank}
              isBlog={false}
              title="Modern-Bank"
              description="The Modern-Bank landing page website is a sleek and attractive React.js and Tailwind CSS project that showcases a modern UI/UX design, featuring a stunning hero section, billing section, testimonials section, clients section, and a stylish footer."
              ghLink="https://github.com/HimeshKohad/Modern-Bank"
              demoLink="https://modern-bank-landingpage.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whas}
              isBlog={false}
              title="Wireless Home Automation System"
              description="A wireless home automation project that incorporates multiple switching modes, enabling users to control devices through various methods. It includes Bluetooth connectivity for mobile control, traditional manual switches for convenient physical operation, and a binary counter for automated switching."
              demoLink="https://drive.google.com/file/d/1r2PgUFZLqO0DWOf66v8FmeA6RCt_PX-c/view?usp=drive_link"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
