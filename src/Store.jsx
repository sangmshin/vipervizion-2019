import React, { Component, createContext } from 'react';
// import data from './data/data.json';
import axios from 'axios';
const Context = createContext();
const { Provider, } = Context
const data_url = '/api'


class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
    //  projects: data
     projects: []
    }
  }

  componentDidMount(){
    axios.get(data_url, { 
      headers: { 
        'crossDomain': true, 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'mode': 'cors'
        }
      })
      .then(res=>{
        this.setState({projects: res.data})
      })
  }

  render(){
    return (
      <Provider value={{...this.state}}>
        {this.props.children}
      </Provider>
    )
  }
}

export { Store, Context };


