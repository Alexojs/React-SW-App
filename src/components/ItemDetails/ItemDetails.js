import React, { Component } from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

import './ItemDetails.css';

export default class ItemDetails extends Component {

	swapiService = new SwapiService();

	state = {
		item: null,
		image: null,
		loading: true
	}

	componentDidMount() {
		this.updateItem();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.props.itemId !== prevProps.itemId) {
			this.updateItem();
			this.setState(({ loading }) => {
				return {
					loading: true
				};
			});
		}
	}

	componentWillUnmount() {
		this.setState(({ loading }) => {
			return {
				loading: true
			};
		});
	}

	updateItem() {
		const { itemId, getData, getImageUrl } = this.props;

		if (!itemId) {
			return;
		}

		getData(itemId)
			.then((item) => {
				this.setState({
					item,
					image: getImageUrl(item),
					loading: false
				});
			});
	}

	render() {
		const { loading, item, image } = this.state;

		if (loading) { return <Spinner />; }

		return (
			<div className="item-details card">
				<img className="item-image"
					src={image}
					alt="charcter" />

				<div className="card-body">
					<h4>{item.name}</h4>
					<ul className="list-group list-group-flush">
						{React.Children.map(this.props.children, (child, idx) => {
							return React.cloneElement(child, { item });
						})}
					</ul>
				</div>
			</div>
		);
	}
}

const Record = ({ item, field, label }) => {
	return (
		<li className="list-group-item">
			<span className="term">{label}:</span>
			<span>{item[field]}</span>
		</li>
	);
}

export { Record };