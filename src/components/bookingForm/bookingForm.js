import React from 'react';
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './bookingForm.css'
import calendar from '../../images/calendar.jpeg'

export default class BookingForm extends React.Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            userEmail: '',
            aboutYourself: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event){
        console.log("User name: " + this.state.userName +
                    " Email: " + this.state.userEmail +
                    " About Yoursel: " + this.state.aboutYourself);
        event.preventDefault();
    }

        
    render() {
        return (      
          <div className="container">
              <h3 className="title"><strong>How to Book Me / Speaking Engagements</strong></h3><br/>
              <Row>
                  <Col md="7">
                      <div className="subDiv">   
                          <Form onSubmit={this.onSubmit}> 
                            <h4>Form requirements: </h4>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. </p>   
                            <Input type="text" name="userName"  
                                onChange={this.handleChange}
                                placeholder="Enter full name" /> 
                            <br />                      
                            <Input type="email" name="userEmail"  placeholder="Enter Email"  
                                onChange={this.handleChange}/>                      
                            <br />
                            <Input type="textarea" name="aboutYourself" id="exampleText" maxlength="300" placeholder="Tell me about yourself"
                                onChange={this.handleChange}/>
                    
                            <br />
                            <Button type="submit" color="warning" value="submit" block
                                onSubmit={this.onSubmit}>Request Appointment</Button>
                            <br />
                               
                        </Form>                 
                    </div>
                </Col>
                    
                <Col md="5">
                    <Card body inverse style={{ backgroundColor: 'rgb(230, 230, 230)'}}>
                        <CardImg className="calendarImg" top width="100%" src={calendar} alt="cardImage" />
                        <CardBody>
                        <CardTitle className="cardTitle">Calendar Event</CardTitle>
                        <Button color="warning" > Button </Button>
                        </CardBody>
                    </Card>                    
                </Col>         
              </Row>
          </div>
            
          );
      }
}