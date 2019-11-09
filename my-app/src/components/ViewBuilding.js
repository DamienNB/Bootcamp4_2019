import React from 'react';

class ViewBuilding extends React.Component {
	render() {
		const { data, selectedBuilding } = this.props;
		let list = data.filter(x => x.id === selectedBuilding).map(directory => {
			return (
				<>
					<tr key={directory.id}>
						<td> {"Code: "} </td>
						<td> {directory.code} </td>
					</tr>
					<tr>
						<td> {"Name: "} </td>
						<td> {directory.name} </td>
					</tr>
					<tr>
						<td> {directory.address && "Address: "} </td>
						<td> {directory.address} </td>
					</tr>
					<tr>
						<td> {directory.coordinates && "Latitude: "} </td>
						<td> {directory.coordinates && directory.coordinates.latitude} </td>
					</tr>
					<tr>
						<td> {directory.coordinates && "Longitude: "} </td>
						<td> {directory.coordinates && directory.coordinates.longitude} </td>
					</tr>
				</>
			);
		})
		return (
			<div>
				{selectedBuilding === 0 &&
					<p>
						{' '}
						<i>Click on a name to view more information</i>
					</p>
				}
				{list}
			</div>
		);
	}
}
export default ViewBuilding;
