import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";

const Slider = ({ banners }) => {
  return (
    <Row md={12} className="mt-100- slider">
      <Col>
        <Carousel interval={1000} className="bottom-shadow">
          {banners.map((banner) => {
            return (
              <Carousel.Item key={banner.id}>
                <Image
                  src={`${process.env.PUBLIC_URL}${banner.bannerImageUrl}`}
                  alt={banner.bannerImageAlt}
                />
              </Carousel.Item>
            );
          })}
          {/* <Carousel.Item>
            <img className="d-block w-100" src={OfferOne} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={OfferTwo} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={OfferThree} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={OfferFour} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={OfferFive} alt="Third slide" />
          </Carousel.Item> */}
        </Carousel>
      </Col>
    </Row>
  );
};

export default Slider;
