import React from 'react';
// Components
import ItemDetails, { Record } from '../ItemDetails';
// HOC
import { withSwapiService } from '../HocHelper';

const PersonDetails = (props) => {
	return (
		<ItemDetails {...props}>

			<Record field="gender" label="Gender" />
			<Record field="eyeColor" label="Eye Color" />

		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPerson,
		getImageUrl: swapiService.getPersonImage
	};
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);