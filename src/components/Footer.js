import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiUpwork,SiMedium ,SiGmail} from 'react-icons/si'

function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Developed by Meet Gangani</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year}</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a href="https://github.com/meet-gangani"
                   style={{ color: 'white' }}
                   target="_blank"
                   rel="noopener noreferrer">
                  <AiFillGithub/>
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.upwork.com/freelancers/~0150c586cef5f85564"
                   style={{ color: 'white' }}
                   target="_blank"
                   rel="noopener noreferrer">
                  <SiUpwork/>
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/meet-gangani"
                   style={{ color: 'white' }}
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/meet-gangani"
                   style={{ color: 'white' }}
                   target="_blank"
                   rel="noopener noreferrer">
                  <SiMedium/>
                </a>
              </li>
              <li className="social-icons">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetgangani71@gmail.com"
                   style={{ color: 'white' }}
                   target="_blank"
                   rel="noopener noreferrer">
                  <SiGmail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  )
}

export default Footer
