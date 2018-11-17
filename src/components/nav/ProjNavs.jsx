import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, Prompt, withRouter } from 'react-router-dom';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import $ from 'jquery';
import './Navs.scss';
import { Context } from "../../Store";
const { Consumer } = Context;


function markNumber(id){
  $(`.nav-btns a`).removeClass('proj-btn__active')
  $(`#projBtn${id}`).addClass('proj-btn__active')
  // console.log(id);
  
}


class ProjNavs extends Component{
  constructor(props){
    super(props)
    this.state = {
     isVisible: false
    }
  }

  projectsNav = (href)=>{

    let hash = href.split("#").pop();
    // console.log(hash);
    
    $('html, body').animate({ scrollTop: ($(`#${hash}`).offset().top) - 100 }, 'slow')
  }

  onScroll = () => {
    var firstProj = document.getElementById('0')
    var beginningOfProjects = firstProj.getBoundingClientRect();
    // console.log(beginningOfProjects.y);
    

    beginningOfProjects.y < 110
    ? this.setState({isVisible: true})
    : this.setState({isVisible: false})
    
    // console.log('window height', $(window).height());

    var projects = $('.proj')

    for(let el of projects){
      var projTop = el.getBoundingClientRect();
      // console.log(projTop.y);
      
      projTop.y < 110
      && markNumber(el.id)
    }
    

  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.onScroll); 
  }
  

  render(){
    return (
      <>
        <Grid fluid>
          <Row className='projects-nav' style={{visibility : this.state.isVisible ? 'visible' : 'hidden'}}>
            <Col className='nav-btns'>
              <Consumer>
                {value=>
                  value.projects.map((proj, index)=>
                    <Link to={{ hash: `${index}`}} id={`projBtn${index}`} onClick={(e)=>this.projectsNav(e.target.href)}>{index}</Link>
                  )
                }
              </Consumer>
            </Col>
          </Row>
        </Grid>
      </>
    )
  }
}

export default ProjNavs;
