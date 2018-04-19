import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./banner.css";

const Banner = (props) => {
  return (
    <div>
      <Jumbotron className="jumbotronDiv" fluid>
        <Container fluid>
          <h1 className="display-3">"Accountability Breeds Excellence"</h1>
          <p className="lead">--Kenneth Dewlen</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Banner;