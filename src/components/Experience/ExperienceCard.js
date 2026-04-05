import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineCalendar, AiOutlineEnvironment } from "react-icons/ai";

function ExperienceCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontSize: "1.5em", fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-white" style={{ fontSize: "1.2em" }}>
          {props.company}
        </Card.Subtitle>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", color: "#a588c0" }}>
          <span>
            <AiOutlineCalendar style={{ marginBottom: "2px" }} /> {props.duration}
          </span>
          {props.location && (
            <span>
              <AiOutlineEnvironment style={{ marginBottom: "2px" }} /> {props.location}
            </span>
          )}
        </div>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default ExperienceCard;
