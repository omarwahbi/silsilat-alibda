import React from "react";
import { Col, Row } from "react-bootstrap";

export default function AboutUs() {
  return (
    <div>
      <Row>
        <Col s={12} md={8}>
          <h2 className="fw-bold mb-4">About Us</h2>
          <p>
            Silsilat ALibda Company is a leading company in the feld of
            producing juices, carbonated beverages, and iced coffee. We take
            pride in offering high-quality products that meet the diverse
            expectations of our customers and provide them with a unique and
            distinctive taste experience.
          </p>
          <p>
            We spare no effort in providing a diverse range of fresh and
            delicious beverages that refect diversity and quality in every
            package. We use the 􀃶nest natural and organic ingredients to ensure
            that our products maintain their natural 􀃸avor and high quality.
          </p>
        </Col>
        <Col s={12} md={4}></Col>
      </Row>
    </div>
  );
}
