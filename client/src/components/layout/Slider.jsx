import React, { useEffect } from "react";
import { Row, Col, Carousel, Image } from "react-bootstrap";
import ShoppingContext from "../../context/ShoppingContext";

const Slider = () => {
  const shoppingContext = React.useContext(ShoppingContext);
  const { getBanners, banners } = shoppingContext;
  useEffect(() => {
    if (!banners.length) getBanners();
  }, []);
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
        </Carousel>
      </Col>
    </Row>
  );
};

export default Slider;
