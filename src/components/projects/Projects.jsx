import React, { Suspense, lazy, Component,  } from 'react';
import { Grid, Row, Col,  } from 'react-bootstrap'
import { css } from 'react-emotion';
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

    // let proj = document.getElementsByClassName('proj')
    // let proj_desc = document.getElementsByClassName('proj-desc')
    // let mock = document.getElementsByClassName('v-center')
    
    // Object.values(proj).map((proj, i) => {
    //   let _desc = Object.values(proj_desc)[i]
    //   let _mock = Object.values(mock)[i]
      
    //   proj.clientHeight < $(_desc).height()
    //   ? proj.style.width = $(_desc).height()
    //   : proj.clientHeight < $(_mock).height()
    //   ? proj.style.width = $(_mock).height()
    //   : console.log('same');
    // })
    
  }

  componentDidMount(){
    window.addEventListener('resize', this.onResize)
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
                    <Suspense fallback={
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
