import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUsScreen = () => {
	return (
		<div>
			<Container>
				<h3>Our Company</h3>
				<Row>
					<hr />
					<p className="justify mb-5">
						Confagro seeks to connect farmers to their customers and other end
						users of agricultural produce in an online market place. We are an
						online market shop which deals in the sales of farm
						produce,seedlings and agro chemicals for both retailers and
						wholesalers.Our main aim is to help provide ready market for farmers
						through our online market place.Confagro offers you all and lots
						more at a very affordable price which you can trust.
					</p>

					<hr />

					<section class="row about my-5">
						<article class="col-md-4 text-centre">
							<img
								src="./images/team/vision.jpg"
								style={{ maxHeight: "15vh" }}
								alt="vision"
							/>
						</article>
						<div className="col text-center text-md-left justify-content-center align-self-center">
							<h4>Vision</h4>
							<p>
								To promote the growth and development of agribuisness e-commerce
								and nutritional standards of the people
							</p>
						</div>
					</section>

					<section class="row about my-5">
						<div className="col text-center text-md-left justify-content-center align-self-center">
							<h4>Objectives</h4>

							<ol>
								<li>
									To give pace to the growth rate bof agricultural development
									and productivity which will strengthen the economic status of
									the farmers.
								</li>
								<li>
									To bring in good marketing pratices which will help cope with
									environmental changes, quality of farm produce and customer
									satisfaction.
								</li>
								<li>
									Improve the lives of agro dealers, smallerholder farmers,
									women and youth through innovative solutions. .
								</li>
							</ol>
						</div>
						<article class="col-md-4 text-centre">
							<img
								src="./images/team/objectives.png"
								style={{ maxHeight: "15vh" }}
								alt="objectives"
							/>
						</article>
					</section>
				</Row>
				<div className="my-5">
					<h4>Team</h4>
				</div>
				<Row>
					{/* Theresa */}

					<article class="col-md-2 text-centre offset-md-1">
						<img
							src="./images/team/theresa.jpg"
							style={{ maxHeight: "15vh" }}
							alt="cofounder"
						/>
					</article>
					<div className="col-md-3 text-md-left text-center">
						<h6>Banyeh Theresa</h6>
						<div>konta</div>
						<div>Web developer</div>
						<a href="mailto:banyehtheresa84@gmail.com">
							banyehtheresa@gmail.com
						</a>
					</div>

					{/* Portia */}

					<article class="col-md-2 text-centre offset-md-1 mt-4 mt-md-0">
						<img
							src="./images/team/portia.jpg"
							style={{ maxHeight: "15vh" }}
							alt="cofounder"
						/>
					</article>

					<div className="col-md-3 text-md-left text-center">
						<h6>Dumba Portia</h6>
						<div>Sumbo</div>
						<div>CEO</div>
						<a href="mailto:dumbaportia@gmail.com">dumbaportia@gmail.com</a>
					</div>
				</Row>
				<div className="justify my-5">
					<h4>Contact</h4>
					<div>0558096473</div>
					<div>0554060729</div>
				</div>
			</Container>
		</div>
	);
};

export default AboutUsScreen;
