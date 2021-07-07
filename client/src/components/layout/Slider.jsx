import React from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import OfferOne from "./../../static/images/offers/offer1.jpg";
import OfferTwo from "./../../static/images/offers/offer2.jpg";
import OfferThree from "./../../static/images/offers/offer3.jpg";
import OfferFour from "./../../static/images/offers/offer4.jpg";
import OfferFive from "./../../static/images/offers/offer5.jpg";

const Slider = ({ banners }) => {
  console.log("banners - ", banners);
  return (
    <Row md={12} className="mt-100- slider">
      <Col>
        <Carousel interval={1000} className="bottom-shadow">
          {/* {banners.map((banner) => {
            return (
              <Carousel.Item>
                <Image
                  src={`${process.env.PUBLIC_URL}${banner.bannerImageUrl}`}
                  alt={banner.bannerImageUrl}
                />
              </Carousel.Item>
            );
          })} */}
          <Carousel.Item>
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
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Slider;
