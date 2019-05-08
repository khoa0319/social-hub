import React, { Component } from 'react';
import NavbarSmall from './NavbarSmall'
import NavbarBig from './NavbarBig'
class Navbar extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-light fixed-top">

					<div className="d-block d-sm-none">
						<img src='img/logo.png' className="logo d-flex justify-content-center mx-auto d-block" alt="nothing" />
						<NavbarSmall />
					</div>
					
					<div className="container d-none d-sm-block">
						<NavbarBig />
					</div>

				</nav>
			</div>
		);
	}
}

export default Navbar;
