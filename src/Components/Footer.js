import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
        <div className="row">
          <div className="col-md-6" style={{ textAlign: "left" }}>
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
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="text-md-right">
              <p className="mb-0">Contact us:</p>
              <p className="mb-0">Iraq - baghdad - Owairaj Industrial Area</p>
              <p className="mb-0">Phone: +964782233000</p>
              <p className="mb-0">Email: info@silsilat-alibda.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
