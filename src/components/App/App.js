import React, { Component } from 'react';
// Components
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../Page';
// Services
import SwapiService from '../../services/SwapiService';
// Context
import { SwapiServiceProvider } from '../SwapiServiceContext';
// Components

// Styles
import './App.css';


export default class App extends Component {

	swapiService = new SwapiService();

	render() {

		return (
			<ErrorBoundary>
				<SwapiServiceProvider value={this.swapiService}>
					<div className="container col-md-9">
						<div className="sw-app">

							<Header />

							<RandomPlanet />

							<PeoplePage />

							<PlanetsPage />

							<StarshipsPage />

						</div>
					</div>
				</SwapiServiceProvider>
			</ErrorBoundary >
		);
	}
}