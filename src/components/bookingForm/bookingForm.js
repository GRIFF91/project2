import React from 'react';
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import './bookingForm.css'
import calendar from '../../images/calendar.jpeg'

export default class BookingForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName: ''
        };

        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    inputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name; 
        console.log("Button clicked");

        this.setState({
            [name]: value
        });
    }
    handleSubmit(event){
        alert("Name submitted: " + this.state.value);
        console.log("Name submitted: " + this.state.value);
        event.preventDefault();
    }
    render() {
        return (      
          <div className="container">
              <h3 className="title"><strong>How to Book Me / Speaking Engagements</strong></h3><br/>
              <Row>
                  <Col md="7">
                      <div className="subDiv">   
                          <Form onSubmit={this.handleSubmit}> 
                            <h4>Form requirements: </h4>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. </p>   
                              <Input type="text" name="userName" 
                              value={this.state.value} 
                              onChange={this.inputChange} 
                              placeholder="Enter full name" /> 
                              <br />                      
                              <Input type="email" name="email" id="userEmail" placeholder="Enter Email" />                         
                              <br />
                              <Input type="textarea" name="text" id="exampleText" maxlength="300" placeholder="Tell me about yourself"/>
                              <br />
                              <Button type="submit" color="warning" value="submit" block>Request Appointment</Button>
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