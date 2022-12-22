import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiFirebase, SiMongodb, SiMysql } from 'react-icons/si'
import Checkmark from './checkmark'

function Databasestack() {
  return (
      <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiMongodb/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiFirebase/>
        </Col>
        <Col xs={4} md={2} className="tech-icons position-relative">
          <Checkmark/>
          <SiMysql/>
        </Col>
      </Row>
  )
}

export default Databasestack
