import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import "./shopCard.css";

const ShopCard = (props) => {
    return (
      <div className="shopCardDiv">
        <Card body inverse color="primary">
            <CardImg top width="100%" src="https://cdn.shopify.com/s/files/1/0275/6675/products/170518_Smile_More_Water_Bottles_WEB_2048x2048.jpg?v=1495223973" alt="Card image cap" />
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick shopCard text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button color="warning">Button</Button>
            </CardBody>
        </Card>
      </div>
    );
  };
  
  export default ShopCard;