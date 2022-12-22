import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { VscJson } from 'react-icons/vsc'
import { TbApi, TbInfinity } from 'react-icons/tb'
import { DiGit, DiNpm } from 'react-icons/di'
import { SiAmazonaws, SiDocker, SiHeroku, SiVercel } from 'react-icons/si'
import Checkmark from './checkmark'

function Techstack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiNpm/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiGit/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDocker/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <TbApi/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <VscJson/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazonaws/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiVercel/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbInfinity/>
        </Col>
      </Row>
  )
}

export default Techstack
