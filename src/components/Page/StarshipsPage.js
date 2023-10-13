import React, { Component } from 'react';
// Components
import Row from '../Row';
import { StarshipsList, StarshipDetails } from '../SWComponents';


export default class StarshipsPage extends Component {

	state = {
		selectedItem: 2
	}

	onItemSelected = (selectedItem) => {
		this.setState({ selectedItem });
		console.log(selectedItem);
	}

	render() {
		const { selectedItem } = this.state;

		return (
			<Row
				left={<StarshipsList onItemSelected={this.onItemSelected} />}
				right={<StarshipDetails itemId={selectedItem} />}
			/>
		);
	}
}