import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: 'justify' }}>
              Hi Everyone, I am <span className="purple">Meet Gangani </span>
              from <span className="purple"> surat, India.</span>
              <br/>
              <br/>
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight/> Writting Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight/> Participate Online Events
              </li>
              <li className="about-activity">
                <ImPointRight/> Participate Online Coding
              </li>
            </ul>

            <p style={{ color: 'rgb(155 126 172)' }}>
              "Give your time to passion, passion will give you the success way!"
            </p>
            <footer className="blockquote-footer">Meet Gangani</footer>
          </blockquote>
        </Card.Body>
      </Card>
  )
}

export default AboutCard
