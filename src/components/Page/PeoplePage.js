import React, { Component } from 'react';
// Components
import Row from '../Row';
import { PersonList, PersonDetails } from '../SWComponents';


export default class PeoplePage extends Component {

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
				left={<PersonList onItemSelected={this.onItemSelected} />}
				right={<PersonDetails itemId={selectedItem} />}
			/>
		);
	}
}