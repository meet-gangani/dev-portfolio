import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import geniewords from '../../Assets/Projects/genieword.png'
import planzer from '../../Assets/Projects/planzer.png'
import cloudpad from '../../Assets/Projects/cloudpad.png'
import vegist from '../../Assets/Projects/vegist.png'
import calculator from '../../Assets/Projects/calculator.png'
import school from '../../Assets/Projects/school.png'

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle/>
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: 'white' }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={geniewords}
                  isBlog={false}
                  title="Geniewords.com"
                  description="Easy online marketing for small businesses Start by getting a calculation of your sales potential on Google with google ads you are visible when your customers look for you on google."
                  demoLink="https://geniewords.com"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={planzer}
                  isBlog={false}
                  title="planzer.io"
                  description="Stop losing track of your tasks, plan your day Planzer.io is a task planning app that allows you to plan all your tasks from multiple tools directly in your calendar."
                  demoLink="https://planzer.io"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={cloudpad}
                  isBlog={false}
                  title="cloudpad.io"
                  description="Launch a website without any technical skills. We give you a Google doc, and anything you put in it automatically becomes a website. Simple."
                  demoLink="https://cloudpad.io"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={vegist}
                  isBlog={false}
                  title="vegist"
                  description="Vegist - Multipurpose eCommerce HTML Template A best clean, modern, stylish, creative, responsive theme for different eCommerce business or industries."
                  demoLink="https://vegist-web.vercel.app"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={calculator}
                  isBlog={false}
                  title="calculator"
                  description="Online calculator for quick calculations, along with a large collection of calculators on math, finance each with in-depth result."
                  ghLink="https://github.com/meet-gangani/calculator-app"/>
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={school}
                  isBlog={false}
                  title="school management"
                  description="Traditional school report cards contained a section for teachers to record individual comments about the student's work and behavior. Some automated card."
                  ghLink="https://github.com/meet-gangani/school-management"/>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Projects
