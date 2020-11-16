import React from "react";
import Product from "../components/Product";
import { Container, Row, Col } from "react-bootstrap";
import { allProducts } from "../products";

const ProductsListScreen = ({ onAddToCard }) => {
	return (
		<div className="pt-3">
			<h1 className="text-center">Explore our product</h1>
			<Container>
				{/* all | Vegetable | Cereal and grains | Fruit | | Agro-chemicals */}
				<Row>
					{allProducts.map((prod) => {
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
};

export default ProductsListScreen;
