import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
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
            style={{ textAlign: "left" }}
          >
            <p className="mb-0">Follow us on social media:</p>
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
          </Col>
          <Col
            s={12}
            md={6}
            className="d-flex mobile-footer justify-content-end"
          >
            <div className="text-md-right">
              <p className="mb-0">Contact us:</p>
              <p className="mb-0">Iraq - baghdad - Owairaj Industrial Area</p>
              <p className="mb-0">Phone: +964782233000</p>
              <p className="mb-0">Email: musab@allaith-group.com</p>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
