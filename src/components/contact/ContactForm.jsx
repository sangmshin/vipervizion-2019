import React, { Component,  } from 'react';
import { Button, Grid,  Col,  FormGroup, ControlLabel, FormControl,  } from 'react-bootstrap'

class ContactForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  validateName =()=> {
    let {name} = this.state;

    if (name.length > 1) {
      return 'success'
    } else if (name.length < 2){
      return 'error';
    } 
    return null;
  }

  validateEmail =()=> {
    let {email} = this.state;

    if (email.length > 1) {
      return 'success'
    } else if (email.length < 2){
      return 'error';
    } 
    return null;
  }

  validateForm=(e)=>{
    console.log('hello');
    e.preventDefault();
    // form.submit();
  }


  render() {
    return (
      <Grid>
        <form horizontal onSubmit={this.validateForm}>
          <FormGroup controlId="formHorizontalName">
            {/* <ControlLabel>Working example with validation</ControlLabel> */}
            <Col componentClass={ControlLabel} xs={12} sm={2} md={2} lg={2} className='form-field-label'> 
              Name*
            </Col>
            <Col xs={12} sm={10} md={10} lg={10}>
              <FormControl type="text" placeholder="You Name" value={this.state.name} onChange={(e)=>this.setState({ name: e.target.value })} required/>
            </Col>
            {/* <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} required/> */}
            <FormControl.Feedback />
            {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
          </FormGroup>

          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} xs={12} sm={2} md={2} lg={2} className='form-field-label'> 
              Email*
            </Col>
            <Col xs={12} sm={10} md={10} lg={10}>
              <FormControl type="email" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({ email: e.target.value })} required/>
            </Col>
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formHorizontalTextarea">
           <Col componentClass={ControlLabel} xs={12} sm={2} md={2} lg={2} className='form-field-label'> 
              Message*
            </Col>
            <Col xs={12} sm={10} md={10} lg={10}>
              <FormControl componentClass="textarea" placeholder="Leave message" value={this.state.message} onChange={(e)=>this.setState({ message: e.target.value })} required/>
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalSubmit">
           <Col componentClass={ControlLabel} xs={12} sm={2} md={2} lg={2} className='form-field-label'> 
            </Col>
            <Col xs={12} sm={10} md={10} lg={10}>
              <Button type="submit" bsSize='large' bsStyle='primary'>Submit</Button>
            </Col>
          </FormGroup>

        
        </form>
      </Grid>
    );
  }
}


export default ContactForm;

