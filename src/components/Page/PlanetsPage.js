import React, { Component } from 'react';
// Components
import Row from '../Row';
import { PlanetsList, PlanetDetails } from '../SWComponents';


export default class PlanetsPage extends Component {

	state = {
		selectedItem: 1
	}

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem });
	}

	render() {
		const { selectedItem } = this.state;

		return (
			<Row
				left={<PlanetsList onItemSelected={this.onItemSelected} />}
				right={<PlanetDetails itemId={selectedItem} />}
			/>
		);
	}
}