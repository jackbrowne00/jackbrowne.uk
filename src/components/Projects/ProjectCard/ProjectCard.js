import React from 'react'
import Card from  'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import githubLogo from '../../../images/github_logo.png'

const ProjectCard = () => {
    const projectsCards = [
    {   title: "Blackjack Game", 
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", 
        text: "During my School of Code Bootcamp, I worked on a collaborative team project to create a game using JavaScript. Following our project brief, we decided to recreate the well known card game Blackjack.",
        buttonProject: "Checkout the Game!",
        buttonProjectLink: "https://www.jackbrowne.uk/blackjack",
        buttonGithub: "View the Code",
        buttonGithubLink: "https://github.com/SchoolOfCode/w8_team-project-school-of-coins",
    },
        
    {   title: "GrowPro React", 
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", 
        text: "This App was created by a group of 4 of us",
        button: "Checkout the App!",
        buttonLink: "",

    },

    {   title: "Recipe Generator", 
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", 
        text: "This App was created by a group of 4 of us",
        button: "Checkout the App!",
        buttonLink: "",

    },

    {   title: "Rock, Paper, Scissors", 
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/316/316022/a-colorful-selection-of-fruits-and-vegetables.jpg", 
        text: "This App was created by a group of 4 of us",
        button: "Checkout the Game!",
        buttonLink: "",

    }
    ];

    const renderCard = (card, index) => {
        return (
            <Col className="projectCardsCol">
            <Card key={index} className="projectCards">
            <Card.Img variant="top" src={card.image} className="cardImage"/>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="primary" href={card.buttonProjectLink}>{card.buttonProject}</Button>
              <Card.Img width="100px" height="100px" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AOcticons-mark-github.svg&psig=AOvVaw2kMOt4_WiBmhuGJ81Gv3gS&ust=1628347687830000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjIkoTSnPICFQAAAAAdAAAAABAD" href={card.buttonGithubLink}/>
              <Button variant="primary" type="image" src={githubLogo} href={card.buttonGithubLink}></Button>
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