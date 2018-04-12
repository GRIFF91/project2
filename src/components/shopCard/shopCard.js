import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

import "./shopCard.css";

const items = [
    {
      src: 'https://cdn.shopify.com/s/files/1/0275/6675/products/170518_Smile_More_Water_Bottles_WEB_2048x2048.jpg?v=1495223973',
      alt: 'water bottle',
      title: 'Water Bottle',
      price: '$10.00',
      description: 'A great water bottle with a motto on it.'
    },
    {
      src: 'https://www.customink.com/mms/images/catalog/styles/116200/catalog_detail_image_large.jpg',
      alt: 't-shirt',
      title: 'T-shirt',
      price: '$25.00',
      description: 'T-shirt with motto printed across it. Many colors available.'
    },
    {
      src: 'https://www.customink.com/mms/images/catalog/styles/279100/catalog_detail_image_large.jpg',
      alt: 'hat',
      title: 'Hat',
      price: '$20.00',
      description: 'Shade your head on a hot day. Motto is displayed on top.'
    },
    {
      src: 'http://www.ahadubai.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/_/1_1.jpg',
      alt: 'wrist band',
      title: 'Wrist Band',
      price: '$5.00',
      description: 'Support our cause with a stylish wrist band.'
      }
  ];

const ShopCard = (props) => {
    return (
    
    <Row>
        <Col md="3">
            <div className="shopCardDiv">
                <Card body inverse color="primary">
                    <CardImg top width="100%" src={items[0].src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{items[0].title}</CardTitle>
                        <CardSubtitle>{items[0].price}</CardSubtitle>
                        <CardText>{items[0].description}</CardText>
                        <Button color="warning">Purchase</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>

        <Col md="3">
            <div className="shopCardDiv">
                <Card body inverse color="primary">
                    <CardImg top width="100%" src={items[1].src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{items[1].title}</CardTitle>
                        <CardSubtitle>{items[1].price}</CardSubtitle>
                        <CardText>{items[1].description}</CardText>
                        <Button color="warning">Purchase</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>

        <Col md="3">
            <div className="shopCardDiv">
                <Card body inverse color="primary">
                    <CardImg top width="100%" src={items[2].src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{items[2].title}</CardTitle>
                        <CardSubtitle>{items[2].price}</CardSubtitle>
                        <CardText>{items[2].description}</CardText>
                        <Button color="warning">Purchase</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>

        <Col md="3">
            <div className="shopCardDiv">
                <Card body inverse color="primary">
                    <CardImg top width="100%" src={items[3].src} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{items[3].title}</CardTitle>
                        <CardSubtitle>{items[3].price}</CardSubtitle>
                        <CardText>{items[3].description}</CardText>
                        <Button color="warning">Purchase</Button>
                    </CardBody>
                </Card>
            </div>
        </Col>
      </Row>
    );
  };
  
  export default ShopCard;