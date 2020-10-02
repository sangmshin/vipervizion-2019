import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {
  // Button,
  Grid,
  Row,
  Col,
  // FormGroup,
  // FormControl
} from 'react-bootstrap'
import './Contact.scss';

class Contact extends Component{
  state = {
    name: '',
    email: '',
    message: '',
    isSent: false
  }

  validateName = () => {
    const { name } = this.state;

    if (name.length > 1) return 'success'
    else if (name.length < 2) return 'error';

    return null;
  }

  validateEmail = () => {
    const { email } = this.state;

    if (email.length > 1) return 'success'
    else if (email.length < 2) return 'error';

    return null;
  }

  submitForm = e => {
    e.preventDefault();

    const { name, email, message } = this.state
    const PROD_URL = 'http://vipervizion2020-env.eba-idqp92sx.us-east-2.elasticbeanstalk.com/send'

    axios.post(PROD_URL, { name, email, message })
      .then(res => {
        console.log('Response from backend: ', res);
        
        res.status === 200
          && this.setState({isSent: true})
      })
      .catch(err => console.log('Error occurred: ', err))
  }

  confirmRender = () => (
    <Grid className='contact__confirm'>
      <Row>
        <Col className='text-center'>
          <h1>
            Thank you!
          </h1>
          <p>
            Your message has been successfully sent and I sincerely appreciate you contacting me. I will be in touch soon.  
          </p>
        </Col>
      </Row>
    </Grid>
  )

  formRender = () => (
    <Grid className='contact' fluid>
      <Row>
        <Col className='text-center'>
          <p className='contact__title_top'>Get in Touch</p>
          <hr/>
          <p className='contact__title_bottom'>
            I would love to hear from you.
          </p>
        </Col>
      </Row>  
      <Row className="direct-email">
        <Col className='text-center'>
          <p>
            Please send an email to <a href="mailto:sangshin.email@gmail.com" target="_blank" rel="noopener noreferrer" style={{color:'#ef8354'}}>sangshin.email@gmail.com</a>
          </p>
        </Col>
      </Row>

      {/* <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <form horizontal onSubmit={this.submitForm}>
            <FormGroup controlId="formHorizontalName">
              <Col xs={12} sm={12} md={12} lg={12}>
                <FormControl
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={({ target }) => this.setState({ name: target.value })}
                  autoFocus 
                  required
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formHorizontalEmail">
              
              <Col xs={12} sm={12} md={12} lg={12}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={({ target }) => this.setState({ email: target.value })}
                  required
                />
              </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="formHorizontalTextarea">
              <Col xs={12} sm={12} md={12} lg={12} >
                <FormControl
                  componentClass="textarea"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={({ target }) => this.setState({ message: target.value })}
                  required
                  className='message-box'
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalSubmit">
              <Col xs={12} sm={12} md={12} lg={12} className='text-center'>
                <Button type="submit" bsSize='large' bsStyle='primary' className='btn btn-lg btn-warning'>Submit</Button>
              </Col>
            </FormGroup>
          </form>
        </Col>
      </Row> */}
    </Grid>
  );

  render() {
    const { isSent } = this.state;
    return (
      <Fragment>
        {isSent
          ? this.confirmRender()
          : this.formRender()
        }
      </Fragment>
    )
  }
}

export default Contact;