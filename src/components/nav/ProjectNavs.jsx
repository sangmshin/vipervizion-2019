import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap'
import $ from 'jquery';
import './Navs.scss';
import { Context } from "../../Store";

const { Consumer } = Context;
const markNumber = id => {
  $(`.nav-btns a`).removeClass('proj-btn__active')
  $(`#projBtn${id}`).addClass('proj-btn__active')
}

class ProjectNavs extends Component{
  state = {
    isVisible: false
  }

  projectsNav = href => {
    let hash = href.split("#").pop();
    
    $('html, body').animate({ scrollTop: ($(`#${hash}`).offset().top) - 100 }, 'slow')
  }

  onScroll = () => {
    var firstProj = document.getElementById('0');
    if (!firstProj) return;
    var beginningOfProjects = firstProj.getBoundingClientRect();
    
    beginningOfProjects.y < 110
      ? this.setState({isVisible: true})
      : this.setState({isVisible: false})
    
    var projects = $('.proj')

    for(let el of projects){
      var projTop = el.getBoundingClientRect();
      
      projTop.y < 110
        && markNumber(el.id)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
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
                    <Link to={{ hash: `${index}`}} id={`projBtn${index}`} onClick={(e)=>this.projectsNav(e.target.href)} key={index}>{index}</Link>
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

export default ProjectNavs;
