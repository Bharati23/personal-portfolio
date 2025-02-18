import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-img.svg';
import navIcon3 from '../assets/img/twitterx-img.svg';
import navIcon4 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/bharati-wakchaure-90245418b/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Bharati23"><img src={navIcon2} alt="" /></a>
                <a href="https://x.com/BharatiW23"><img src={navIcon3} alt="" /></a>
                <a href="https://www.instagram.com/_bharati__232/?igsh=cjVxd215bTNlNXFz&utm_source=qr"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}