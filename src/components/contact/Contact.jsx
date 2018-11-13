import React, { Fragment, } from 'react';
import {  Grid, Row, Col, } from 'react-bootstrap'
import './Contact.scss';
// import ContactForm from './ContactForm';

const Contact =()=> 
  <Fragment>
    <Grid id='contact'>
      <Row>
        <Col className='text-center'>
          <p className='contact__title_top'>Get in Touch</p>
          <hr/>
          <p className='contact__title_bottom'>
          I would love to hear from you.
          </p>
        </Col>
      </Row>  
      <Row className="arrow">
        <Col className='text-center'>
          <p>Please send an email to <a href="mailto:sangminshin@mail.com" target="_blank" rel="noopener noreferrer" style={{color:'#ef8354'}}>sangminshin@mail.com</a> and ~let's talk.</p>
        </Col>
        {/* <ContactForm/> */}
      </Row>
    </Grid> 
  </Fragment>

export default Contact;


