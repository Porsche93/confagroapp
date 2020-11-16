import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { cartContext } from "./../context/cartContext";

class Product extends React.Component {
	static contextType = cartContext;

	render() {
		const { name, price, wieght, category, img } = this.props.prod;

		return (
			<Card className="my-3 p-3 rounded shadow">
				<Link to={`/product/`}>
					<Card.Img className="product-img" src={img} variant="top" />
				</Link>

				<Card.Body className="text-center">
					<Link to={`/product/`}>
						<Card.Title as="div">
							<strong>Name: {name}</strong>
						</Card.Title>
					</Link>

					<Card.Text as="div">Weight: {wieght}</Card.Text>
					<Card.Text as="div">Price: {price} cedis</Card.Text>
					<Card.Text as="div">Category: {category}</Card.Text>

					<button
						className="btn btn-primary"
						onClick={() => this.context.addToCart(this.props.prod)}>
						Add to Cart
					</button>
				</Card.Body>
			</Card>
		);
	}
}

export default Product;
