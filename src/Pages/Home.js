import React from "react";
import NavbarComponent from "../Components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "../Components/Cards";
import AboutUs from "../Components/AboutUs";
import OurMission from "../Components/OurMission";
import OurVision from "../Components/OurVision";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <div className="intro background">
        <div className="container">
          <Row className="d-flex align-content-center">
            <Col className="col-md-8 col">
              <div className="company">
                <h1 className="companyName">Silsilat ALibda</h1>
                <p className="desc">
                  Our company specializes in manufacturing juices,
                  <br /> soda water, and iced coffee
                </p>
              </div>
            </Col>
            <Col className="col-md-4 col"></Col>
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
