import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';

import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'

import githubLogo from '../../img/github-logo.png';


function module(module){
  return(
    <Col xs={12} sm={6} md={12} lg={6}>
    {
      module &&
        <div>
          <h5>Notable modules:</h5>
          <ul>
            {module.map(mdl=>(
              <li key={mdl}>{mdl}</li>
            ))}
          </ul>
        </div>
    }
    </Col>
  )
}

const Proj =({projects})=>
  <>
    <Row className='proj'>
      <Col xs={12} sm={12} md={8} lg={6} className='v-center'>
        <img src={projects.main_img} alt="mockup" className='img-responsive'/>
      </Col>
      <Col xs={12} sm={12} md={4} lg={6} className='v-center proj-desc'>
        <div>

          <h1>{projects.title}</h1>
          <p>{projects.description}</p>
          <hr/>

            <Row>
              <Col xs={12} sm={6} md={12} lg={6}>
                <h5>Languages:</h5>
                <ul>
                  {projects.lang.map(lang=>(
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </Col>
              {
                module(projects.module)
              }
            </Row>


          
          <h5>Role:{projects.role}</h5>

          <div className='github-button'>
            <Button href={projects.links.github} target="_blank" bsSize='small'><span><Image src={githubLogo} width='20'></Image></span>&nbsp;Github</Button>
          </div>
          <div className='visit-site'>
            <Button href={projects.links.url} target="_blank"  bsStyle='primary' bsSize='large'>VISIT SITE</Button>
          </div>

        </div>

      </Col>
    </Row>
  </>

export default Proj;
