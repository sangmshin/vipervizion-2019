import React, { Fragment, } from 'react';

import {  Grid, Row, Col, Image, } from 'react-bootstrap'
import './Footer.scss';
import githubLogo from '../../img/github_logo.png';
import linkedinLogo from '../../img/linkedin-logo.png';
import ss_logo from '../../img/ss-logo_blk.png';
// import ss_logo from '../../img/ss-logo_white.png';

const links = {
  linkedin: "https://www.linkedin.com/in/sang-min-shin-46340318/",
  github: "https://github.com/sangmshin",
  home: "/"
}

const Footer = () =>
  <Fragment>
    <Grid id='footer' fluid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
          <p>Copyright © 2018 Sang Min Shin • New York based Javascript Full-Stack Developer</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
           <Image src={linkedinLogo} width='30'></Image>
          </a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Image src={githubLogo} width='28'></Image>
          </a>  
          <a href={links.home}>
            <Image src={ss_logo} width='26'></Image>     
          </a>  
        </Col>
      </Row>
    </Grid>
  </Fragment>


export default Footer;
