import React from 'react';

import { Button,  Row, Col, Image, } from 'react-bootstrap'

import githubLogo from '../../img/github-logo.png';


function feature(_feature){
  return(
    _feature &&
    <Col xs={12} sm={12} md={12} lg={12}>
      <div>
        <h4>FEATURES:</h4>
        <ul>
          {_feature.map( feat => (
            <li key={feat}>{feat}</li>
          ))}
        </ul>
      </div>
    </Col>
  )
}


function module(_module){
  return(
    _module &&
    <Col xs={12} sm={6} md={12} lg={6}>
      <div>
        <h5>NOTABLE MODULES:</h5>
        <ul>
          {_module.map(mdl=>(
            <li key={mdl}>{mdl}</li>
          ))}
        </ul>
      </div>
    </Col>
  )
}


function AddButton(_link, _nameOfButton){
  return(
    _link &&
    <div className='visit-site'>
      <Button href={_link} target="_blank"  bsStyle='primary' bsSize='large'>{_nameOfButton}</Button>
    </div>
  )
}

const Proj =({projects, id})=>
  <>
    <Row id={id} className='proj'>
      <Col xs={12} sm={12} md={6} lg={6} className='v-center'>
        <img src={projects.main_img} alt="mockup" className='img-responsive'/>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} className='v-center proj-desc'>
        <div>

          <h1>{projects.title}</h1>
          <p>{projects.description}</p>
          <hr/>

            <Row>
              { feature(projects.feature) }
            </Row>

            <Row>
              <Col xs={12} sm={6} md={12} lg={6}>
                <h4>LANGUAGES:</h4>
                <ul>
                  {projects.lang.map(lang=>(
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </Col>

              { module(projects.module) }

            </Row>


          
          <h4>ROLE: {projects.role}</h4>

          <div className='github-button'>
            <Button href={projects.links.github} target="_blank" bsSize='small'><span><Image src={githubLogo} width='20'></Image></span>&nbsp;Github</Button>
            {
              projects.links.github2
              && 
              <Button href={projects.links.github2} target="_blank" bsSize='small'><span><Image src={githubLogo} width='20'></Image></span>&nbsp;Github 2</Button>
            }
          </div>

          <div className='visit-buttons'>
            { AddButton(projects.links.url, 'VISIT SITE') }
            { AddButton(projects.links.amazon, 'VISIT AMAZON STORE') }
            { AddButton(projects.links.google, 'VISIT GOOGLE STORE') }
            { AddButton(projects.links.video, 'WATCH VIDEO') }
          </div>
        </div>

      </Col>
    </Row>
  </>

export default Proj;


