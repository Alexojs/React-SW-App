import React from 'react';
// Components
import ItemList from '../ItemList';
// HOC
import {
	withData,
	withSwapiService,
	compose,
	withChildFunction
} from '../HocHelper';


const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPeople
	};
}

const mapPlanetsMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllPlanets
	};
}

const mapStarhipsMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getAllStarships
	};
}

const PersonList = compose(
	withSwapiService(mapPersonMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const PlanetsList = compose(
	withSwapiService(mapPlanetsMethodsToProps),
	withData,
	withChildFunction(renderName)
)(ItemList);

const StarshipsList = compose(
	withSwapiService(mapStarhipsMethodsToProps),
	withData,
	withChildFunction(renderModelAndName)
)(ItemList);

export {
	PersonList,
	PlanetsList,
	StarshipsList
}