import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function OurMission() {
  return (
    <div className="background">
      <div className="container">
        <Row className="d-flex align-content-center">
          <Col s={12} md={8}>
            <div className="our-mission">
              <h1 className="our-mission-t fw-bold mb-4">Our Mission</h1>
              <p className="our-mission-p">
                at Silsilat ALibda Company is to transform every beverage moment
                into an exceptional experience. By offering high-quality and
                diverse products, we aim to add uniqueness and distinction to
                every life and meet the varied expectations of our customers.
              </p>
              <p className="our-mission-p">
                We believe in continuous innovation and development to
                consistently provide innovative beverages that exceed the
                expectations of our customers. Additionally, we are committed to
                social and environmental responsibility, maintaining high
                standards of quality and health in all our production processes.
              </p>
            </div>
          </Col>
          <Col s={12} md={4}></Col>
        </Row>
      </div>
    </div>
  );
}
