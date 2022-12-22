import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Particle from '../Particle'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import laptopImg from '../../Assets/about.png'
import Toolstack from './Toolstack'
import Frontendstack from './Frontendstack'
import Backendstack from './Backendstack'
import Otherstack from './Otherstack'
import Databasestack from './Databasestack'

function About() {
  return (
      <Container fluid className="about-section">
        <Particle/>
        <Container>
          <Row style={{ justifyContent: 'center', padding: '10px' }}>
            <Col md={7} style={{ justifyContent: 'center', paddingTop: '30px', paddingBottom: '50px' }}>
              <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard/>
            </Col>
            <Col md={5} style={{ paddingTop: '120px', paddingBottom: '50px' }} className="about-img">
              <img src={laptopImg} alt="about" className="img-fluid"/>
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>

          <h2 className="project-heading">
            <strong className="purple">Front End</strong>
          </h2>
          <Frontendstack/>

          <h2 className="project-heading">
            <strong className="purple">Back End</strong>
          </h2>
          <Backendstack/>

          <h1 className="project-heading">
            <strong className="purple">Database</strong>
          </h1>
          <Databasestack/>

          <h2 className="project-heading">
            <strong className="purple">Tech</strong>
          </h2>
          <Techstack/>

          <h1 className="project-heading">
            <strong className="purple">Tools</strong>
          </h1>
          <Toolstack/>

          <h1 className="project-heading">
            <strong className="purple">Other</strong>
          </h1>
          <Otherstack/>

          <Github/>
        </Container>
      </Container>
  )
}

export default About
