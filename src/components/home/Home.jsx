import React, { Fragment } from 'react';
import Intro from '../intro/Intro';
import Projects from '../projects/Projects';
import ProjectNavs from '../nav/ProjectNavs';

const Home = () => (
  <Fragment>
    <ProjectNavs/>
    <Intro/>
    <Projects/>
  </Fragment>
)

export default Home;
