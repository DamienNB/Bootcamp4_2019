import React from 'react';

class Search extends React.Component {
	filterUpdate(event) {
		//Here you will need to update the value of the filter with the value from the textbox
		this.setState({
			text: event.target.value
		});

		if (this.props.onChange)
			this.props.onChange(event.target.value);
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		const { filterText } = this.props;

		return (
			<div>
				<form>
					<input
						name="search"
						type="text"
						placeholder="🔎 Type to Filter"
						value={filterText}
						onChange={this.filterUpdate.bind(this)} />
				</form>
			</div>
		);
	}
}
export default Search;
