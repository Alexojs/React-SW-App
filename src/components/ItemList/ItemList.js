import React from 'react';
// Styles
import './ItemList.css';


const ItemList = (props) => {

	const { data, onItemSelected, children: renderLabel } = props;

	const renderItems = (arr) => {
		return arr.map((item) => {
			const { id } = item;
			// Label is a function, it takes item and shows its properties:
			// {(i) => (`${i.name} (${i.birthYear})`)}
			const label = renderLabel(item);

			return (
				<li className="list-group-item"
					key={id}
					onClick={() => onItemSelected(id)}>
					{label}
				</li>
			);
		});
	}

	return (
		<ul className="item-list list-group">
			{renderItems(data)}
		</ul>
	);
}

ItemList.defaultProps = {
	onItemSelected: () => { }
}


export default ItemList;