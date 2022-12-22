import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiPostman, SiSlack, SiWebstorm } from 'react-icons/si'
import { VscGithub } from 'react-icons/vsc'
import { DiStackoverflow, DiTerminal, DiUbuntu } from 'react-icons/di'
import Checkmark from './checkmark'

function Toolstack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiWebstorm/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <VscGithub/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiUbuntu/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiPostman/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiStackoverflow/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiTerminal/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiSlack/>
        </Col>
      </Row>
  )
}

export default Toolstack
