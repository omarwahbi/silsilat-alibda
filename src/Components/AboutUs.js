import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation();
  return (
    <div>
      <Row>
        <Col s={12} md={8}>
          <h2 className="fw-bold mb-4">{t("about_us")}</h2>
          <p>{t("about_us_text_1")}</p>
          <p>{t("about_us_text_2")}</p>
        </Col>
        <Col s={12} md={4}></Col>
      </Row>
    </div>
  );
}
