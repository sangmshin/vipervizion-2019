import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import "./Intro.scss";
import {TweenMax} from 'gsap';
const t = TweenMax

class Intro extends Component{
  constructor(props){
    super(props)
    this.state = {
     isVisible: true
    }
  }

  onScroll =()=> {
    console.log('scrolling. window-pageYoffSet', window.pageYOffset);
    t.to(this.arrow, .5, {alpha:0})
  }

  componentDidMount(){
    
    t.to(this.arrow, 1, {y: -20, yoyo: true, repeat: -1})
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll); 
  }


  render(){
    
    return (
      <Grid id='intro'>
        <Row>
          <Col className='text-center'>
            <p className='intro__title_top'>Hello, my name is Sang Shin</p>
            <p className='intro__title_bottom'>(I'm) => Javascript Full Stack Developer from New York</p>
          </Col>
        </Row>  
        <Row className="arrow">
          <Col>
            <p ref={p => this.arrow = p}>&#8694;</p>
          </Col>
        </Row>
      </Grid>        
    )
  }
}
export default Intro;
