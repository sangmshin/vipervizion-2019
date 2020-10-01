import React, { Fragment, } from 'react';
import { Grid, Row, Col, Button, Image } from 'react-bootstrap'
import './About.scss';
import githubLogo from '../../img/github-logo.png';
import linkedinLogo from '../../img/linkedin-logo.png';

const LINKS = {
  resume: "https://docs.google.com/document/d/1KI5BI6DajO_mkvYdh_fKXx2NNDwh-FEwbjOJ-gjU4Ng/edit?usp=sharing",
  linkedin: "https://www.linkedin.com/in/sang-min-shin-46340318/",
  github: "https://github.com/sangmshin",
}

const About = () => (
  <Fragment>
    <Grid id='about'>
      <Row>
        <Col className='text-center'>
          <p className='about__title_top'>About me</p>
          <hr/>
          <p className='about__title_bottom'>
            I’m New York’s finest Full-Stack Javascript Engineer. I’m always hungry regardless of my experience, background or skill level. I have been constantly evolving and adapting to change as an engineer for last 5 years. I can be enthusiastic and versatile at any angle to take on new problems across the full-stack. I can thrive in a fast-paced work environment and my colleagues often call
          me “Clutchest of the clutchest.”
          </p>
        </Col>
      </Row>  
      <Row className="resume-button">
        <Col>
          <Button href={LINKS.resume} target="_blank" rel="noopener noreferrer" bsSize='large' bsStyle='warning'>DOWNLOAD RESUME</Button>
        </Col>
      </Row>
      <Row className="resume-button">
        <Col>
          <Button href={LINKS.linkedin} target="_blank" bsSize='small'>
            <span><Image src={linkedinLogo} width='20'></Image></span>
            &nbsp;LinkedIn
          </Button>
          <Button href={LINKS.github} target="_blank" bsSize='small'>
            <span><Image src={githubLogo} width='20'></Image></span>
            &nbsp;Github
          </Button>
        </Col>
      </Row>

    </Grid> 
  </Fragment>
)

export default About;
