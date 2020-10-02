import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap'
import "./Intro.scss";
import ss_logo from '../../img/ss-logo_blk.png';
import styled from 'styled-components';
import { TweenMax } from 'gsap';

const t = TweenMax
const Arrow = styled.p`
  font-size: 50px;
  text-align: center;
  color: #ef8354;
  transform: rotate(90deg) translateY(-30%);
`;

class Intro extends Component{
  state = {
    isVisible: true
  }

  onScroll = () => {
    // console.log('scrolling. window-pageYoffSet', window.pageYOffset);
    t.to(this.arrow, .5, { alpha: 0 })
  }

  componentDidMount() {
    t.to(this.arrow, 1, { y: -20, yoyo: true, repeat: -1 })
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll); 
  }

  render() {
    return (
      <Grid id='intro'>
        <Row>
          <Col className='text-center'>
            <Image src={ss_logo} width={150} className='ss-logo__intro'></Image>
            <p className='intro__title_top'>Hello, my name is Sang Shin</p>
            <p className='intro__title_bottom'>(I'm) <span style={{color:'#ef8354'}}>=></span> Javascript Full-Stack Engineer <span style={{color:'#ef8354'}}>from</span> './New York'</p>
          </Col>
        </Row>  
        <Row className="arrow">
          <Col>
            <Arrow ref={p => this.arrow = p}>&#8694;</Arrow>
          </Col>
        </Row>
      </Grid>        
    )
  }
}

export default Intro;
