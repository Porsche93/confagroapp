import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
	return (
		<footer className="footer bg-success">
			<Container>
				<Row>
					<Col className="text-center text-white py-5">
						<p className="p-0 m-0">Copyright &copy; confagro 2020</p>
						<p className="p-0 m-0">confagro20@gmail.com</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
