import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useTranslation } from "react-i18next";

export default function OurMission() {
  const { t } = useTranslation();
  return (
    <div className="background">
      <div className="container">
        <Row className="d-flex align-content-center">
          <Col s={12} md={8}>
            <div className="our-mission">
              <h1 className="our-mission-t fw-bold mb-4">{t("our_mission")}</h1>
              <p className="our-mission-p">{t("our_mission_text_1")}</p>
              <p className="our-mission-p">{t("our_mission_text_2")}</p>
            </div>
          </Col>
          <Col s={12} md={4}></Col>
        </Row>
      </div>
    </div>
  );
}
