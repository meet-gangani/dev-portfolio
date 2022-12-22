import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiFlutter, SiJira, SiUpwork } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { DiBitbucket, DiTrello } from 'react-icons/di'
import Checkmark from './checkmark'

function Otherstack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiFlutter/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <TbBrandReactNative/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiJira/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiTrello/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiBitbucket/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiUpwork/>
        </Col>
      </Row>
  )
}

export default Otherstack
