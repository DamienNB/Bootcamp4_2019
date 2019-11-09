import React from 'react';

class BuilingList extends React.Component {
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText, selectedUpdate } = this.props;

		const buildingList = data
			.filter(directory => 
				directory.name.toLowerCase().includes(filterText.toLowerCase())
			)
			.map(directory => {
				return (
					<tr key={directory.id}>
						<td onClick={()=>selectedUpdate(directory.id)}> {directory.code} </td>
						<td onClick={()=>selectedUpdate(directory.id)}> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
