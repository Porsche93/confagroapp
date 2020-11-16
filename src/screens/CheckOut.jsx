import React from "react";
import { cartContext } from "./../context/cartContext";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class CheckOut extends React.Component {
	static contextType = cartContext;

	submitOrder = (e, func) => {
		e.preventDefault();
		return func();
	};

	render() {
		const { cart, clearCart, removeFromCart, success } = this.context;
		let qty = 0;
		let cost = 0;

		cart.forEach((item) => {
			cost += parseInt(item.quantity) * parseFloat(item.price);
			qty += parseInt(item.quantity);
		});

		return (
			<>
				{success ? (
					<div className="container text-center py-5">
						<h1 className="text-success">Order Successful</h1>
						<p>Your order has been successfully submitted</p>
						<Link to="/">Return home</Link>
					</div>
				) : cart.length < 1 ? (
					<div className="container py-5 text-center">
						<div className="row">
							<h3>
								<Link to="/">Go add</Link> items to your cart & return here 😎
							</h3>
						</div>
					</div>
				) : (
					<div className="container pt-4">
						<h1 className="text-center">Cart</h1>
						{/* <hr /> */}
						<Row>
							<div className="col">
								<Link to="/products">Keep shopping </Link>
							</div>
						</Row>
						<Row>
							<div className="col-md-9">
								<table className="table table-hover">
									<thead>
										<th></th>
										<th>item</th>
										<th>price</th>
										<th>qty</th>
										<th></th>
									</thead>
									<tbody>
										{cart.map((item) => (
											<>
												<tr style={{ margin: 50 }} key={item.name}>
													<td>
														<img src={item.img} alt={item.name} height="50" />
													</td>
													<td>{item.name}</td>
													<td>{item.price} cedis</td>
													<td>{item.quantity}</td>
													<td>
														<button
															className="btn btn-danger"
															onClick={() => removeFromCart(item.name)}>
															remove
														</button>
													</td>
												</tr>
											</>
										))}
									</tbody>
								</table>
							</div>
							<div className="col-md-3 text-center mb-3">
								<div
									className="rounded shadow-sm p-3"
									style={{ position: "sticky", top: "11%" }}>
									<h5>Summary</h5>
									<hr className="m-0 p-0" />
									<section>
										<p className="p-0 m-0">
											Items Count: <strong>{this.context.cart.length}</strong>
										</p>
										<p className="p-0 m-0">
											Sum Quantity:
											<strong> {qty}</strong>
										</p>
										<div className="mt-4 bg-light">
											<p className="p-0 m-0 text-success">Cart total</p>
											<small>Ghs</small>
											<h3>{cost}</h3>
										</div>
									</section>
									<section>
										<h6 className="mt-3">Delivery info</h6>
										<form
											className="my-3"
											onSubmit={(e) => this.submitOrder(e, clearCart)}>
											<div className="form-row mb-2">
												<div className="col">
													<input
														type="text"
														className="form-control"
														placeholder="Fullname"
														required
													/>
												</div>
											</div>
											<div className="form-row">
												<div className="col-8">
													<input
														type="text"
														className="form-control"
														id="validationCustom04"
														placeholder="Location"
														required
													/>
												</div>
												<div className="col-4">
													<input
														type="text"
														className="form-control"
														id="validationCustom05"
														placeholder="City/Town"
														required
													/>
												</div>
											</div>

											<div className="form-row my-2">
												<div className="col">
													<input
														type="tel"
														className="form-control"
														placeholder="phone number"
														required
													/>
												</div>
											</div>
											{/* <div className="form-row mb-2">
												<div className="col">
													<input
														type="email"
														className="form-control"
														placeholder="email"
													/>
												</div>
											</div> */}
											<div className="my-2">
												<div class="form-check form-check-inline">
													<input
														class="form-check-input"
														type="radio"
														name="inlineRadioOptions"
														id="inlineRadio1"
														value="pickup"
													/>
													<label
														class="form-check-label"
														htmlFor="inlineRadio1">
														I'll pickup
													</label>
												</div>
												<div class="form-check form-check-inline">
													<input
														class="form-check-input"
														type="radio"
														name="inlineRadioOptions"
														id="inlineRadio2"
														value="delivery"
													/>
													<label class="form-check-label" for="inlineRadio2">
														Deliver to me(at a fee)
													</label>
												</div>
											</div>
											<hr />
											<input
												className="btn btn-primary"
												type="submit"
												value="Checkout"
											/>
										</form>
									</section>
								</div>
							</div>
						</Row>
					</div>
				)}
			</>
		);
	}
}

export default CheckOut;
