import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, Prompt, withRouter } from 'react-router-dom';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import $ from 'jquery';
import './Navs.scss';
import { Context } from "../../Store";
const { Consumer } = Context;


class ProjNavs extends Component{
  constructor(props){
    super(props)
    this.state = {
     isVisible: true
    }
  }

  projectsNav = (href)=>{

    let hash = href.split("#").pop();
    console.log(hash);
    
    $('html, body').animate({ scrollTop: ($(`#${hash}`).offset().top) - 100 }, 'slow')
  }

  onScroll = () => {
    var firstProj = document.getElementById('0')
    var beginningOfProjects = firstProj.getBoundingClientRect();
    console.log(beginningOfProjects.y);

    beginningOfProjects.y < 1
    ? this.setState({isVisible: true})
    : this.setState({isVisible: false})
    
    console.log('window height', $(window).height());

    // var buttons = $('.nav-btns a')
    var projects = $('.proj')
console.log(projects.length);

    // var eachTop = projects.map(proj=>{
    //   let beginningOfProj = proj.getBoundingClientRect();
    //   let y = beginningOfProj.y
    //   return y
    // })

    // for(let btn of buttons){
    //   var beginningOfProjects = btn.getBoundingClientRect();
    //   console.log(btn);
    // }
    // var eachTop = buttons.map((btn) => {
    //   // let beginningOfProj = btn.getBoundingClientRect();
    //   // let y = beginningOfProj.y
    //   // return y
    // })

    // console.log('eachTOP', eachTop);
    

  }

  componentDidMount () {
    window.addEventListener('scroll', this.onScroll);
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
                    <Link to={{ hash: `${index}`}}  onClick={(e)=>this.projectsNav(e.target.href)}>{index}</Link>
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