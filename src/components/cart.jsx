import React, { useContext } from "react";
import cartIcon from "../cart.svg";
import { cartContext } from "./../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
	const { cart } = useContext(cartContext);

	return (
		<p
			style={{
				marginTop: "3px",
			}}>
			<img src={cartIcon} height="30" alt="cart icon" />
			{cart.length ? (
				<span>
					<Link to="/checkout" className="btn btn-sm btn-secondary ml-1">
						<span className="badge badge-light">{cart.length}</span> - Checkout
					</Link>
				</span>
			) : (
				<span className="badge badge-light">0</span>
			)}
		</p>
	);
};

export default Cart;
