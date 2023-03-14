import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "../components/MailChimpForm.js";
import logo from "../assets/img/logo1.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github_square_icon.svg';
import navIcon3 from '../assets/img/discord-icon-svgrepo-com.svg';

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
                <a href="https://www.linkedin.com/in/athena-king-929a291a5/"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://github.com/Azrael-Savage?tab=repositories"><img src={navIcon2} alt="Github" /></a>
                <a href="https://discord.gg/N8Z8NfTd"><img src={navIcon3} alt="Discord" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}