import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaVuejs } from 'react-icons/fa'
import { DiBootstrap, DiCss3, DiReact, DiSass } from 'react-icons/di'
import { SiAdobexd, SiAngular, SiAntdesign, SiFigma, SiNextdotjs, SiNuxtdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Checkmark from './checkmark'

function Frontendstack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiReact/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiNextdotjs/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAngular/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <FaVuejs/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNuxtdotjs/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiBootstrap/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiTailwindcss/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAntdesign/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <AiFillHtml5/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiCss3/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiSass/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiFigma/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiAdobexd/>
        </Col>
      </Row>
  )
}

export default Frontendstack
