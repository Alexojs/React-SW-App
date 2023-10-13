import React from 'react';
// Components
import ItemDetails, { Record } from '../ItemDetails';
// HOC
import { withSwapiService } from '../HocHelper';


const PlanetDetails = (props) => {
	return (
		<ItemDetails {...props}>

			<Record field="population" label="Population" />
			<Record field="rotationPeriod" label="Rotation Period" />
			<Record field="diameter" label="Diameter" />

		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPlanet,
		getImageUrl: swapiService.getPlanetImage
	};
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
