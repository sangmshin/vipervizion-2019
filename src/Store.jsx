import React, { Component, createContext } from 'react';
// import axios from 'axios';
import data from './data/data.json';
const Context = createContext();
const { Provider, } = Context

// const data_url = 'https://s3.amazonaws.com/sangminshin/vipervizion-2019/data/data.json'


class Store extends Component{
  constructor(props){
    super(props)
    this.state = {
     projects: data
    //  projects: []
    }
  }

  componentDidMount(){
    // axios.get(data_url, { 
    //   headers: { 
    //     'crossDomain': true, 
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',
    //     'mode': 'no-cors',
    //     'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
    //     }
    //   })
    //   .then(res=>{
    //     this.setState({projects:res.data})
    //   })
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


