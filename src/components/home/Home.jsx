import React, { Fragment, } from 'react';

import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import ProjNavs from '../nav/ProjNavs';


const Home =()=> 
  <Fragment>
    <ProjNavs/>
    <Intro/>
    <Projects/>
  </Fragment>

export default Home;
