import React, { Suspense, lazy, Component, Fragment, createContext, createRef } from 'react';

import Intro from '../intro/Intro';
import Projects from '../projects/Projects';

const Home =()=> 
  <Fragment>
    <Intro/>
    <Projects/>
  </Fragment>

export default Home;
