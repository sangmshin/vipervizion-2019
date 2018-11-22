import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, Prompt, withRouter } from 'react-router-dom';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import { TweenMax } from "gsap";
import ss_logo from '../../img/ss-logo_white.png';
import $ from "jquery";
import './Navs.scss';
import { Context } from "../../Store";
const { Consumer } = Context;


const t = TweenMax


class Navs extends Component{
  constructor(props){
    super(props)
    this.state = {
     isExpanded: false,
    //  isVisible: false
    }
  }

  

  // NAV ONCLICK EVENTS
  handleActiveKey = (selectedKey)=>{

    $('html, body').animate({ scrollTop: 0 }, 'slow');

    $('#navItems li').removeClass('active')
    $(selectedKey).parent().addClass('active')

    $(window).width() < 768
    && this.setState({isExpanded: this.state.isExpanded ? false : true}, ()=>{
      this.state.isExpanded
      ? $('#navbar').css('borderWidth', '0 0 100vh')
      : $('#navbar').css('borderWidth', '0 0 1px')
      $('#navbar').css('borderColor', '#222')
    }) 
  }


  // ON TOGGLE HAMBURGER
  toggle = ()=>{
    this.setState({isExpanded: this.state.isExpanded ? false : true}, ()=>{
      this.state.isExpanded
      ? $('#navbar').css('borderWidth', '0 0 100vh')
      : $('#navbar').css('borderWidth', '0 0 1px')
      $('#navbar').css('borderColor', '#222')
    })
  }


  // ON WINDOW RESIZE
  onWindowResize = ()=>{
    $(window).width() > 768 && this.state.isExpanded
    && $('#navbar').css('borderWidth', '0 0 1px')
  }

  componentDidMount () {
    window.addEventListener('resize', this.onWindowResize);
    // window.addEventListener('scroll', this.onScroll);
  }


  render(){
    return (
      <Fragment>
        <Navbar onResize={() => console.log('resized!')} id="navbar" inverse collapseOnSelect fixedTop fluid onToggle={()=>console.log('')} onSelect={()=>console.log('')} expanded={this.state.isExpanded}>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <Link to={'/'}>Home</Link> */}
              <Image src={ss_logo} alt='ss-logo' className='ss-logo'/>
            </Navbar.Brand>
            <Navbar.Toggle onClick={this.toggle}/>
          </Navbar.Header>

          <Navbar.Collapse>
            
            <Nav activeKey={1} pullRight  id='navItems'>
              <li role="presentation" className='active'>
                <Link to={'/'} eventKey={1} onClick={(e)=>this.handleActiveKey(e.target)}>Home</Link>
              </li>
              <li role="presentation">
                <Link to={'/projects'}  onClick={(e)=>this.handleActiveKey(e.target)}>Projects</Link>
              </li>
              <li role="presentation">
                <Link to={'/about'}  onClick={(e)=>this.handleActiveKey(e.target)}>About</Link>
              </li>
              <li role="presentation">
                <Link to={'/contact'}  onClick={(e)=>this.handleActiveKey(e.target)}>Contact</Link>
              </li>

            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        
      </Fragment>
    )
  }
}

export default Navs;
