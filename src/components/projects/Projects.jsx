import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import { css } from 'react-emotion';
import { DotLoader } from 'react-spinners';
// import Proj from "./Proj";
import ProjNavs from '../nav/ProjNavs';
import './Projects.scss';
import { Context } from "../../Store";
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

  componentWillUnmount(){
    console.log('I am unmounted');
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
