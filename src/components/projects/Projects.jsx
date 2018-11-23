import React, { Suspense, lazy, Component,  } from 'react';
import { Grid, Row, Col,  } from 'react-bootstrap'
// import { css } from 'react-emotion';
import { DotLoader } from 'react-spinners';
// import Proj from "./Proj";
import ProjNavs from '../nav/ProjNavs';
import './Projects.scss';
import { Context } from "../../Store";
import $ from 'jquery';
// import ProjNavs from '../nav/ProjNavs';
const { Consumer } = Context;

const SingleProject = lazy(()=>import('./Proj'))

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
     loading: true
    }
  }

  onResize =()=>{

    let proj_desc = document.getElementsByClassName('proj-desc')

    let heights = Object.values(proj_desc).map((_desc, i) => _desc.clientHeight)

    let tallest_desc = Math.max.apply(null, heights)

    tallest_desc >= $(window).height()
    ? $('.proj').addClass('regular-height')
    : $('.proj').removeClass('regular-height')

  }

  componentDidMount(){
    window.addEventListener('resize', this.onResize)
    let proj_desc = document.getElementsByClassName('proj-desc')
    console.log(proj_desc);
    
  }

  componentWillUnmount(){
    // console.log('I am unmounted');
  }

  render(){
    return (
      <>
      <ProjNavs/>
          <Grid fluid id='projects'>
            <Row>
              <Col>
                <h1 className='projects__title text-center'>MY PROJECTS</h1>
              </Col>
            </Row>
            <Consumer>
                {value=>
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
