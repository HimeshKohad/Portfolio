import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Himesh Kohad </span>
            from <span className="purple"> Nagpur, India.</span>
            <br /> I am a final year student pursuing B.Tech in Electronics and
            Communication Engineering at VIT Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build with the intention to inspire and transform!"{" "}
          </p>
          <footer className="blockquote-footer">Himesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
