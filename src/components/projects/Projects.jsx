import React, { Suspense, lazy, Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { DotLoader } from 'react-spinners';
import ProjectNavs from '../nav/ProjectNavs';
import './Projects.scss';
import { Context } from "../../Store";
import $ from 'jquery';

const { Consumer } = Context;
const SingleProject = lazy(() => import('./Project'))

class Projects extends Component{
  state = {
    loading: true
  }

  onResize = () => {
    let proj_desc = document.getElementsByClassName('proj-desc')
    let heights = Object.values(proj_desc).map(desc => desc.clientHeight)
    let tallest_desc = Math.max.apply(null, heights)

    tallest_desc >= $(window).height()
      ? $('.proj').addClass('regular-height')
      : $('.proj').removeClass('regular-height')
  }

  componentDidMount(){
    window.addEventListener('resize', this.onResize)
  }

  render(){
    return (
      <>
      <ProjectNavs/>
          <Grid fluid id='projects'>
            <Row>
              <Col>
                <h1 className='projects__title text-center'>MY PROJECTS</h1>
              </Col>
            </Row>
            <Consumer>
                {value =>
                  value.projects.map( (proj, index) =>
                    <Suspense key={index} fallback={
                      <div className='spinner'>
                        <DotLoader
                          sizeUnit={"px"}
                          size={30}
                          color={'#123abc'}
                          loading={this.state.loading}
                        />
                      </div>
                    }>
                      <SingleProject key={proj.title} projects={proj} id={index}/>
                    </Suspense>
                  )
                }
            </Consumer>
          </Grid>
      </>
    )
  }
}

export default Projects;
