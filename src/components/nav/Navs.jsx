import React, {  Component, Fragment,  } from 'react';
import {   Link,  } from 'react-router-dom';
import {  Navbar, Nav,  Image,  } from 'react-bootstrap'
// import { TweenMax } from "gsap";
import ss_logo from '../../img/ss-logo_white.png';
import $ from "jquery";
import './Navs.scss';
// import { Context } from "../../Store";
// const { Consumer } = Context;





class Navs extends Component{
  constructor(props){
    super(props)
    this.state = {
     isExpanded: false,
    //  isVisible: false
    }
  }

  // NAV ONCLICK EVENTS
  clickNav = (selectedNav)=>{

    console.log(selectedNav);
    

    $('html, body').animate({ scrollTop: 0 }, 'slow');

    $('#navItems li').removeClass('active')
    $(selectedNav).parent().addClass('active')

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

  makeActive = nav => {
    $('#navItems li').removeClass('active')
    $(nav).parent().addClass('active')
  }


  // ON WINDOW RESIZE
  onWindowResize = ()=>{
    $(window).width() > 768 && this.state.isExpanded
    && $('#navbar').css('borderWidth', '0 0 1px')
  }

  componentDidMount () {
    window.addEventListener('resize', this.onWindowResize);
    // window.addEventListener('scroll', this.onScroll);
    window.location.hash.includes('projects')
    ? this.makeActive('#navProjBtn')
    : window.location.hash.includes('about')
    ? this.makeActive('#navAboutBtn')
    : window.location.hash.includes('contact')
    ? this.makeActive('#navContactBtn')
    : this.makeActive('#navHomeBtn')
  }

  componentDidUpdate(){
    window.location.hash.includes('projects')
    ? this.makeActive('#navProjBtn')
    : window.location.hash.includes('about')
    ? this.makeActive('#navAboutBtn')
    : window.location.hash.includes('contact')
    ? this.makeActive('#navContactBtn')
    : this.makeActive('#navHomeBtn')
  }


  render(){
    
    return (
      <Fragment>
        <Navbar id="navbar" inverse collapseOnSelect fixedTop fluid onToggle={()=>console.log('')} onSelect={()=>console.log('')} expanded={this.state.isExpanded}>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <Link to={'/'}>Home</Link> */}
              <Image src={ss_logo} alt='ss-logo' className='ss-logo'/>
            </Navbar.Brand>
            <Navbar.Toggle onClick={this.toggle}/>
          </Navbar.Header>

          <Navbar.Collapse>
            
            <Nav pullRight id='navItems'>
              <li role="presentation" className='active'>
                <Link to={'/'} id='navHomeBtn' onClick={(e)=>this.clickNav(e.target)}>Home</Link>
              </li>
              <li role="presentation">
                <Link to={'/projects'} id='navProjBtn' onClick={(e)=>this.clickNav(e.target)}>Projects</Link>
              </li>
              <li role="presentation">
                <Link to={'/about'} id='navAboutBtn' onClick={(e)=>this.clickNav(e.target)}>About</Link>
              </li>
              <li role="presentation">
                <Link to={'/contact'} id='navContactBtn' onClick={(e)=>this.clickNav(e.target)}>Contact</Link>
              </li>

            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        
      </Fragment>
    )
  }
}

export default Navs;

















