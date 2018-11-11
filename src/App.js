import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, Prompt, withRouter } from 'react-router-dom';
import './App.scss';
import { Button, Grid, Row, Col, Navbar, Nav, NavItem, Image, Thumbnail } from 'react-bootstrap'
import { Store, Context } from './Store'
import Navs from './components/nav/Navs';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Intro from './components/intro/Intro';
import Projects from './components/projects/Projects';

class App extends Component {
  render() {
    return (
      <Router>
        <Store>
          <Navs/>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>  

          {/* <Intro/>
          <Projects/> */}
        </Store>
      </Router>
    );
  }
}

export default App;
