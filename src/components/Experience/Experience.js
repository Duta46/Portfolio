import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          My journey and work history in the field of technology.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={10} className="project-card">
            <ExperienceCard
              title="PJP Softaware Developer"
              company="Kemenko PMK"
              duration="Sep 2025 - Dec 2025"
              location="Jakarta, Indonesia"
              description="Engineered an integrated asset management system and AI-driven financial application that improved efficiency, automated data processes, and supported an award-winning innovation project (2nd place)."
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              title="Software Developer"
              company="Maxart"
              duration="Aug 2024 - Aug 2025"
              location="Remote"
              description="Enhanced and maintained enterprise-level Japanese web applications, contributed to building the Maxart Audit system, and improved performance and reliability through feature development and AWS database debugging for tcpc.co.jp."
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              title="Internship - Web Developer"
              company="PT Sahabat Jepang Indonesia"
              duration="Aug 2023 - Dec 2023"
              location="Sidoarjo, Indonesia"
              description="Built a web-based learning platform with an admin dashboard for managing question packages and practice exams, incorporating timed assessments and automated pass/fail evaluation for students at LPK Sahabat Jepang Indonesia."
            />
          </Col>

          <Col md={10} className="project-card">
            <ExperienceCard
              title="Founder"
              company="Warkod"
              duration="2022 - Present"
              location="Remote"
              description="Engineered a suite of web applications ranging from academic performance monitoring and document management systems to an advanced UTBK practice platform (KITAPTN), QR-based library system, responsive web interfaces, and a Laravel-powered payment system—enhancing efficiency, automation, and user experience across educational institutions."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
