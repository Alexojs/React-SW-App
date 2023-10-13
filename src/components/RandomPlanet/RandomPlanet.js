import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorIndicator from '../ErrorIndicator';

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

	SwapiService = new SwapiService();
	interval = 0;

	state = {
		planet: {},
		loading: true,
		error: false
	}

	componentDidMount() {
		const { updateInterval } = this.props;

		this.updatePlenet();
		this.interval = setInterval(
			() => this.updatePlenet(),
			updateInterval
		);
	}

	componentWillUnmount() {
		clearTimeout(this.interval);
	}

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false,
			error: false
		});
	}

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		});
	}

	updatePlenet() {
		// Choose random planet
		const id = Math.floor(Math.random() * 17 + 2);

		this.SwapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	}

	render() {
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={planet} /> : null;

		return (
			<div className="random-planet jumbotron">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	}
}

RandomPlanet.defaultProps = {
	updateInterval: 2000
}

const PlanetView = (props) => {
	const {
		planet: { id, name, population, rotationPeriod, diameter }
	} = props;

	return (
		<React.Fragment>
			<img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} className="planet-image" />
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population: </span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period: </span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter: </span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
}