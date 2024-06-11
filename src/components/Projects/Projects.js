import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AnimalCare from "../../Assets/Projects/AnimalCare.png";
import muvii from "../../Assets/Projects/Muvii.png";
import elearning from "../../Assets/Projects/E-learning.png";
import simkvi from "../../Assets/Projects/proyek_1.png";
import kelontong from "../../Assets/Projects/Kelontong.png";
import ijts from "../../Assets/Projects/IJTS.png";
import KITAPTN from "../../Assets/Projects/KITAPTN.png";

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
              imgPath={simkvi}
              isBlog={false}
              title="SIMKVI"
              description="Monitor the work of the head of the Unesa vocational faculty study program. This application uses Laravel as the backend, and Tailwind CSS and Boostrap as the front end."
              ghLink="https://github.com/Duta46/SIMKVI"
              demoLink="https://simkvi.mi.unesa.ac.id/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ijts}
              isBlog={false}
              title="IJTS"
              description="JFT Question Practice Application for students at Indonesian Japanese Friends LPK. This application was created using Laravel as the back end and front end, namely Tailwind CSS and Boostrap."
              ghLink="https://github.com/Duta46/soal-sji"
              demoLink="https://ijts.pt-sjigroup.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={elearning}
              isBlog={false}
              title="E-learning"
              description="E-learning website based application, this application was created to fulfill the UTS assignment for the website programming course. This website was created using the CSS libraries, namely Boostrap and JQuery"
              ghLink="https://github.com/Duta46/E-learning"
              demoLink="https://e-learning-duta46.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KITAPTN}
              isBlog={false}
              title="KITAPTN"
              description="This application is designed to help students prepare for admission to public universities. KITAPTN is built using the Laravel framework and Tailwind CSS for the user interface as well as the admin and user dashboards. The application also implements the Fisher-Yates Shuffle method to randomize questions when users begin their tasks."
              ghLink="https://github.com/andarass/UTBK"
              // demoLink="https://e-learning-duta46.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnimalCare}
              isBlog={false}
              title="Animal Care"
              description="The extraordinary website interface for pet care. This application has been crafted with expertise using the renowned CSS library, Bootstrap, to provide a stunning and functional visual experience."
              ghLink="https://github.com/Duta46/AnimalCare.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kelontong}
              isBlog={false}
              title="Kelontong"
              description="Design an attractive and responsive e-commerce website using a combination of HTML for structure, CSS for design and layout, and JavaScript for interactivity."
              ghLink="https://github.com/Duta46/e-commerce_duta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muvii}
              isBlog={false}
              title="Muvii"
              description="The online film streaming website uses premium user features to access films on the website and there is a payment feature using midtrans. This website was created using Laravel as the backend and also Tailwind for the user display and Boostrap for the admin dashboard display."
              ghLink="https://github.com/Duta46/stream"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
