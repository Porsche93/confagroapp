import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Cart from "../components/cart";

const Header = () => {
	return (
		<header style={{ marginBottom: 70 }}>
			<Navbar
				fixed="top"
				variant="light"
				expand="lg"
				className="bg-success"
				collapseOnSelect>
				<Container>
					<LinkContainer to="/">
						<Navbar.Brand className="text-white">
							<img
								src="./images/logo.jpeg"
								width="50"
								height="50"
								className="mr-3"
								style={{ borderRadius: "50%" }}
								alt="Confagro Logo"
							/>
							CONFAGRO
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<LinkContainer className="text-white" to="/products">
								<Nav.Link>products</Nav.Link>
							</LinkContainer>
							<LinkContainer to="/productlist">
								<Nav.Link className="text-white">
									{/* <NavDropdown title="Products">
                    <NavDropdown.Item href="/productlist">
                      // All Products
                    </NavDropdown.Item>
                    <NavDropdown.Item>Cereals and grains</NavDropdown.Item>
                    <NavDropdown.Item>Vegetables</NavDropdown.Item>
                    <NavDropdown.Item>Fruits</NavDropdown.Item>
                    <NavDropdown.Item>Seedlings</NavDropdown.Item>
                    <NavDropdown.Item>Agro Chemicals</NavDropdown.Item>
                  </NavDropdown> */}
								</Nav.Link>
							</LinkContainer>
							{/* <NavDropdown title="confagro" id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown> */}
							<LinkContainer className="text-white" to="/aboutus">
								<Nav.Link>
									<i className="fas fa-user"></i>about us
								</Nav.Link>
							</LinkContainer>
							{/* <LinkContainer className="text-white" to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>Sign In
                </Nav.Link>
              </LinkContainer> */}
							<Cart />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
