import React, { Component, createContext } from 'react';
import data from './data/data.json'; //DEVELOPMENT MODE
// import axios from 'axios';

const Context = createContext();
const { Provider } = Context
// const dataUrl = 'http://localhost:3000/api'; //DEVELOPMENT MODE
// const dataUrl = '/api'; // DEPLOY MODE


class Store extends Component{
  state = {
    projects: data //DEVELOPMENT MODE
    // projects: [] // DEPLOY MODE
  }

  // componentDidMount(){
  //   axios.get(dataUrl, { 
  //     headers: { 
  //       'crossDomain': true, 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'mode': 'cors'
  //       }
  //     })
  //     .then(res => this.setState({projects: res.data}))
  // }

  render(){
    return (
      <Provider value={{...this.state}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Store, Context };


