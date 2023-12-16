import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function OurVision() {
  const { t } = useTranslation();
  return (
    <div className="container our-vision mb-4">
      <Row>
        <Col s={12} md={8}>
          <h2 className="fw-bold mb-4">{t("our_vision")}</h2>
          <p>{t("our_vision_text")}</p>
        </Col>
        <Col s={12} md={4}></Col>
      </Row>
    </div>
  );
}
