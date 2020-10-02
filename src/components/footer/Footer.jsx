import React, { Fragment } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import './Footer.scss';
import githubLogo from '../../img/github_logo.png';
import linkedinLogo from '../../img/linkedin-logo.png';
import ssLogo from '../../img/ss-logo_blk.png';
// import ssLogo from '../../img/ss-logo_white.png';

const LINKS = {
  linkedin: "https://www.linkedin.com/in/sang-min-shin-46340318/",
  github: "https://github.com/sangmshin",
  home: "/"
}

const Footer = () => (
  <Fragment>
    <Grid id='footer' fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
          <p>Copyright © 2020 Sang Shin • New York based Javascript Full-Stack Engineer</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
           <Image src={linkedinLogo} width='30'></Image>
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <Image src={githubLogo} width='28'></Image>
          </a>  
          <a href={LINKS.home}>
            <Image src={ssLogo} width='26'></Image>     
          </a>  
        </Col>
      </Row>
    </Grid>
  </Fragment>
)

export default Footer;
