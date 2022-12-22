import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiExpress, SiJsonwebtokens } from 'react-icons/si'
import { DiNodejs, DiRedis } from 'react-icons/di'
import Checkmark from './checkmark'

function Backendstack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiNodejs/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiExpress/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiJsonwebtokens/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <DiRedis/>
        </Col>
      </Row>
  )
}

export default Backendstack
