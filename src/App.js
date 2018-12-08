import React, {  Component } from 'react';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import './App.scss';

import { Store,  } from './Store'
import Navs from './components/nav/Navs';
// import ProjNavs from './components/nav/ProjNavs';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

const App =()=>
  <Router>
    <Store>
      <Navs/>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch>  
      <Footer></Footer>
    </Store>
  </Router>

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Store>
//           <Navs/>
//           <Switch>
//             <Route exact={true} path='/' component={Home} />
//             <Route path='/projects' component={Projects} />
//             <Route path='/about' component={About} />
//             <Route path='/contact' component={Contact} />
//           </Switch>  
//           <Footer></Footer>
//         </Store>
//       </Router>
//     );
//   }
// }

export default App;
