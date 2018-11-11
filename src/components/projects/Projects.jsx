import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import { css } from 'react-emotion';
import { DotLoader } from 'react-spinners';
// import Proj from "./Proj";
import './Projects.scss';
import { Context } from "../../Store";
const { Consumer } = Context;

const SingleProject = lazy(()=>import('./Proj'))

class Projects extends Component{
  constructor(props){
    super(props)
    this.state = {
     loading: true
    }
  }
  render(){
    return (
      <>
          <Grid fluid id='projects'>
            <Consumer>
                {value=>
                  value.projects.map( proj =>
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
                      <SingleProject key={proj.title} projects={proj}/>
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
