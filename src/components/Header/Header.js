import React from 'react';

import './Header.css';

const Header = (props) => {
	return (
		<div className="header d-flex justify-content-between">
			<h3>
				<a href="#people">SW App</a>
			</h3>
			<ul className="menu d-flex">
				<li>
					<a href="#people">People</a>
				</li>
				<li>
					<a href="#planets">Planets</a>
				</li>
				<li>
					<a href="#starships">Starships</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;