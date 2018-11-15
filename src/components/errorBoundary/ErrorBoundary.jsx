import React, { Component, } from 'react';

class ErrorBoundary extends Component{
  constructor(props){
    super(props)
    this.state = {
     hasError : false
    }
  }

  componentDidCatch(error, info){
    this.setState({hasError: true})
    console.log('Error Boundary:', error, info);
  }

  render(){
    if(this.state.hasError){

      return <h1 className='error-boundary'>Something went wrong, but do not panic. Just refresh the browser. Thank you for your cooperation.</h1>
    }

    return this.props.children
    
  }
}

export default ErrorBoundary;
