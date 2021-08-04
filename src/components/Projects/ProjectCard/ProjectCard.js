import React from 'react'
import Card from  'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectCard = () => {
    const projectsCards = [
        {project: "blackjack", title: "Blackjack Game", image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", text: "This game was created by a group of 4 of us"},
        {project: "growpro", title: "GrowPro React", image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", text: "This App was created by a group of 4 of us"},
        {project: "growpro", title: "GrowPro React", image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", text: "This App was created by a group of 4 of us"},
        {project: "growpro", title: "GrowPro React", image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", text: "This App was created by a group of 4 of us"}
    ];

    const renderCard = (card, index) => {
        return (
            <Col className="projectCardsCol">
            <Card key={index} className="projectCards">
            <Card.Img variant="top" src={card.image} className="cardImage"/>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>
        )
    }

    return <div className="cards">
        <Row xs={2} className="justify-content-md-center">
            {projectsCards.map(renderCard)};
        </Row>
    </div>;

}

export default ProjectCard