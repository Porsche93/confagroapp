import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ProductsListScreen from "./screens/ProductsListScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Footer from "./components/Footer";
import React, { Component } from "react";
import CheckOut from "./screens/CheckOut";

class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Route path="/" component={HomeScreen} exact />
				<Route path="/aboutus" component={AboutUsScreen} />
				<Route path="/products" component={ProductsListScreen} />
				<Route path="/login" component={LoginScreen} />
				<Route path="/register" component={RegisterScreen} />
				<Route path="/checkout" component={CheckOut} />
				<Footer />
			</Router>
		);
	}
}

export default App;
