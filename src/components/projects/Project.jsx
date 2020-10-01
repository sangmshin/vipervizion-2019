import React, { memo } from 'react';
import { array, number, object, shape, string } from 'prop-types'
import { Button, Row, Col, Image } from 'react-bootstrap'
import githubLogo from '../../img/github-logo.png';

const renderFeature = features => (
  <Col xs={12} sm={12} md={12} lg={12}>
    <div>
      <h4>FEATURES:</h4>
      <ul>
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  </Col>
)

const renderLanguages = languages => languages.map(language => <li key={language}>{language}</li>);

const renderModule = modules => (
  <Col xs={12} sm={6} md={12} lg={6}>
    <div>
      <h5>NOTABLE MODULES:</h5>
      <ul>
        {modules.map(module => <li key={module}>{module}</li>)}
      </ul>
    </div>
  </Col>
)


const AddButton = (link, nameOfButton) => (
  <div className='visit-site'>
    <Button
      href={link}
      target="_blank"
      bsStyle='primary'
      bsSize='large'
      className='btn btn-warning btn-lg'
    >
      {nameOfButton}
    </Button>
  </div>
)

const Project = memo(({ projects, id }) => {
  const {
    description,
    feature,
    lang,
    links: {
      amazon,
      github,
      github2,
      google,
      url,
      video
    },
    main_img: mainImage,
    module,
    role,
    title
  } = projects;

  return (
    <>
      <Row id={id} className='proj'>
        <Col xs={12} sm={12} md={6} lg={6} className='v-center'>
          <img src={mainImage} alt="mockup" className='img-responsive'/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className='v-center proj-desc'>
          <div>

            <h1>{title}</h1>
            <p>{description}</p>
            <hr/>

              {feature && 
                <Row>
                  {renderFeature(feature)}
                </Row>
              }

              <Row>
                <Col xs={12} sm={6} md={12} lg={6}>
                  <h4>LANGUAGES:</h4>
                  <ul>
                    {renderLanguages(lang)}
                  </ul>
                </Col>

                {module && renderModule(module)}

              </Row>
            
            <h4>ROLE: {role}</h4>
            {github &&
              <div className='github-button'>
                <Button
                  href={github}
                  target="_blank"
                  bsSize='small'
                >
                  <span><Image src={githubLogo} width='20'></Image></span>&nbsp;Github
                </Button>
                {github2 && 
                  <Button
                    href={github2}
                    target="_blank"
                    bsSize='small'
                  >
                    <span><Image src={githubLogo} width='20'></Image></span>&nbsp;Github 2
                  </Button>
                }
              </div>
            }

            <div className='visit-buttons'>
              {url && AddButton(url, 'VISIT SITE')}
              {amazon && AddButton(amazon, 'VISIT AMAZON STORE')}
              {google && AddButton(google, 'VISIT GOOGLE STORE')}
              {video && AddButton(video, 'WATCH VIDEO')}
            </div>
          </div>

        </Col>
      </Row>
      <Row className='clearfix'>
      </Row>
    </>
  )
  }
)

Project.propTypes = {
  id: number.isRequired,
  projects: shape({
    main_img: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    feature: array,
    lang: array.isRequired,
    module: array,
    role: string.isRequired,
    links: object.isRequired
  })
}

export default Project;
