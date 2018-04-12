import React from 'react';
import { Container, Jumbotron, Col, Row, Button, Form, FormGroup, Label, Input, FormText,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class BookingForm extends React.Component {
    render() {
      return (
          
          <Container>
          <Jumbotron>
          <h3><strong><a id="booking">How to Book Me / Speaking Engagements</a></strong></h3><br/>
          <Row>
          <Col xs="6">
          <Form>            
            <FormGroup row>            
                <Input type="text" id="userName" placeholder="Enter full name" />            
            </FormGroup>
            <FormGroup row>           
            <Input type="email" id="userEmail" placeholder="Enter Email" />                         
            </FormGroup>
            <FormGroup row>
                <Input type="textarea" name="text" id="exampleText" placeholder="Tell me about yourself"/>
            </FormGroup>
            <FormGroup row>
            
            <Label for="date" sm={4}><strong>Book Appoinment</strong></Label> 
            <Col sm={8}>       
            <Button size="lg" block>Date</Button>
            </Col>
            </FormGroup>
            <FormGroup row inline>
            <Label for="date" sm={4}><strong>Attend an Event </strong></Label>
            <Col sm={8}>
            <Button size="lg" block>Coming Up Events</Button>
            <br /> <br />
            </Col>
            </FormGroup>
            <FormGroup row>            
            <Button size="lg" block>Request Appointment</Button>           
            </FormGroup>
          </Form>
          </Col>

          <Col xs="6">
          <Card>
            <CardImg top width="100%" src="#" alt="Card image cap" />
                <CardBody>
                <CardTitle>Calendar Event</CardTitle>
                <Button>Button</Button>
            </CardBody>
          </Card>
          </Col>
          </Row>
          </Jumbotron>
          </Container>
          
        );
    }
}