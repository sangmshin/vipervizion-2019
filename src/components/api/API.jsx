import React, { Fragment, Component } from 'react';
import axios from 'axios';

class API extends Component{
  constructor(props){
    super(props)
    this.state = {
     jsonData: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:8000/api')
    .then(res=>{
      this.setState({jsonData: res.data})
      console.log(res.data);
    })
  }

  render(){
    return (
      <Fragment>
        <div>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
        {this.state.jsonData.map(work=>
          <p>{work.title}</p>
        )}
      </Fragment>
    )
  }
}

export default API;
