import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

import "./carousel.css";
import family640x360 from '../../images/family640x360.jpg';

const items = [
  {
    src: "https://www.danubeknowledgesociety.eu/uploads/gallery/128/128/xiii-steering-group-meeting-of-pa7-eusdr-27-june-2017-bratislava-slovakia_128_2.jpg",
    altText: '',
    caption: ''
  },
  {
    src: family640x360,
    altText: '',
    caption: ''
  },
  {
    src: 'https://www.cmu.edu/cohon-university-center/center-facilities/singles/Danfoth-Conference-Room_2016_3666.jpg',
    altText: '',
    caption: ''
  }
];

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
            className="carouselItem"
            tag="div"
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
        <div className="carousel">
            <style>
            {
                 
              }
            </style>
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
      </div>
    );
  }
}