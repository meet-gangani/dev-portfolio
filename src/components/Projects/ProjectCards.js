import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

function ProjectCards(props) {
  return (
      <Card className="project-card-view pointer">
        <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
        <Card.Body>
          <Card.Title className="pointer">{props.title}</Card.Title>
          <Card.Text className="mt-3" style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          {
            props.ghLink ? <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub/> &nbsp;
              {props.isBlog ? 'Blog' : 'GitHub'}
            </Button> : null
          }

          {'\n'}
          {'\n'}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
              <Button
                  variant="primary"
                  href={props.demoLink}
                  target="_blank"
                  style={{ marginLeft: '10px' }}
              >
                <CgWebsite/> &nbsp;
                {'Demo'}
              </Button>
          )}
        </Card.Body>
      </Card>
  )
}

export default ProjectCards
