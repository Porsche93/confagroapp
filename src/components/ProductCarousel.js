import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

const ProductCarousel = () => {
	return (
		<Carousel
			className="text-center"
			pause="hover"
			style={{ backgroundColor: "rgba(52, 100, 52, 0.8)" }}>
			<Carousel.Item>
				<Link to={`/product/`}>
					<Image src="./images/vegetables2.jpg" alt="no image" fluid />
					<Carousel.Caption className="carousel-caption">
						<h2>fruits</h2>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to={`/product/`}>
					<Image
						src="./images/cereal/cereals and grains.jpg"
						alt="no image"
						fluid
					/>
					<Carousel.Caption className="carousel-caption">
						<h2>cereals and grains</h2>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to={`/product/`}>
					<Image src="./images/vegetables1.jpg" alt="no image" fluid />
					<Carousel.Caption className="carousel-caption">
						<h2>fresh vegetables</h2>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
			<Carousel.Item>
				<Link to={`/product/`}>
					<Image
						src="./images/cereal/agro chemical.jfif"
						alt="no image"
						fluid
					/>
					<Carousel.Caption className="carousel-caption">
						<h2>Agro chemicals</h2>
					</Carousel.Caption>
				</Link>
			</Carousel.Item>
		</Carousel>
	);
};

export default ProductCarousel;
