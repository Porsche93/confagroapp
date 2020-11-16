import React, { Component } from "react";
import ProductCarousel from "../components/ProductCarousel";
import Product from "../components/Product";
import { Row, Col, Container } from "react-bootstrap";
import { allProducts } from "../products";

class HomeScreen extends Component {
  render() {
    const newProducts = allProducts.filter((p) => p.new === true);

    return (
      <div
        style={{
          // backgroundImage: "url(./images/woman.jpg)",
          background: "#dedede",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
        }}
      >
        <ProductCarousel />
        <h1 className="text-center">New products</h1>
        <Container>
          <Row className="my-5">
            {newProducts.map((prod) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={prod.name}>
                  <Product prod={prod} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomeScreen;
