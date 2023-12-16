import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        backgroundColor: "#006666",
        color: "aliceblue",
        padding: "20px",
      }}
    >
      <div className="container">
        <Row>
          <Col
            s={12}
            md={6}
            className="mobile-footer"
            // style={{ textAlign: "left" }}
          >
            <div>
              <p className="mb-0">{t("footer_follow")}</p>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </Col>
          <Col
            s={12}
            md={6}
            className="d-flex mobile-footer justify-content-end"
          >
            <div className="text-md-right">
              <p className="mb-0">{t("contact_us")}</p>
              <p className="mb-0">{t("address")}</p>
              <p className="mb-0">{t("phone")}</p>
              <p className="mb-0">{t("email")}</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
