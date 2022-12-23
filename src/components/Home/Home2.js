import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProfileImg from '../../Assets/meet-logo.png'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail, SiMedium, SiUpwork } from 'react-icons/si'

function Home2() {
  return (
      <Container id="about" fluid className="home-about-section" style={{ height: '100vh' }}>
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br/>
                <br/>
                I am fluent in classics like
                <i>
                  <b className="purple"> Javascript Language </b>
                </i>
                <br/>
                <br/>
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">progressive web app </b> and also in areas related to
                  <b className="purple"> Deep Learning and Natural Language Processing.</b>
                </i>
                <br/>
                <br/>
                Whenever possible, I also apply my passion for developing products
                with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple"> Modern Javascript Library and Frameworks</b>
                </i> like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={ProfileImg} className="img-fluid rounded-circle" alt="avatar"/>
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>Feel free to <span className="purple">connect </span>with me</p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetgangani71@gmail.com" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                    <SiGmail/>
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://github.com/meet-gangani" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                    <AiFillGithub/>
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.upwork.com/freelancers/~0150c586cef5f85564" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                    <SiUpwork/>
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://www.linkedin.com/in/meet-gangani" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                    <FaLinkedinIn/>
                  </a>
                </li>
                <li className="social-icons">
                  <a href="https://medium.com/@meetgangani71" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                    <SiMedium/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Home2
