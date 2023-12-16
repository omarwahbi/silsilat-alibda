import React from "react";
import NavbarComponent from "../Components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Cards";
import AboutUs from "../Components/AboutUs";
import OurMission from "../Components/OurMission";
import OurVision from "../Components/OurVision";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div>
      <NavbarComponent />
      <div className="intro background">
        <div className="container">
          <Row className="d-flex align-content-center">
            <Col s={12} md={8}>
              <div className="company">
                <h1 className="companyName">{t("company_name")}</h1>
                <p className="desc" style={{ width: "50ch" }}>
                  {t("comapny_descreption")}
                </p>
              </div>
            </Col>
            <Col s={12} md={4}></Col>
          </Row>
          <div className="cards">
            <Cards />
          </div>
        </div>
      </div>
      <div className="container about-us">
        <AboutUs />
      </div>
      <OurMission />
      <OurVision />
      <Footer />
    </div>
  );
}
