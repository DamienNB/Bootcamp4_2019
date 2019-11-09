import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            name: '',
            latitude: '',
            longitude: '',
            address: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { buildingSubmit } = this.props;

        if ((this.state.code.length > 0) &&
            (this.state.name.length > 0) &&
            (this.state.address.length > 0)) {

            if (isNaN(parseFloat(this.state.latitude)) ||
                isNaN(parseFloat(this.state.longitude))) {

                buildingSubmit({
                    id: 0,
                    code: this.state.code.toUpperCase(),
                    name: this.state.name,
                    address: this.state.address
                });
            }
            else {
                buildingSubmit({
                    id: 0,
                    code: this.state.code.toUpperCase(),
                    name: this.state.name,
                    coordinates: {
                        latitude: parseFloat(this.state.latitude),
                        longitude: parseFloat(this.state.longitude)
                    },
                    address: this.state.address
                });
            }

            this.setState({
                code: '',
                name: '',
                latitude: '',
                longitude: '',
                address: ''
            });

            alert("Building succesfully submitted!");
        }
        else {
            alert("A code, name, and address are required!");
        }
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Building Code:
                    <input
                        name="code"
                        type="text"
                        placeholder="Code"
                        value={this.state.code}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Building Name:
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Latitude:
                    <input
                        name="latitude"
                        type="text"
                        placeholder="Latitude"
                        value={this.state.latitude}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Longitude:
                    <input
                        name="longitude"
                        type="text"
                        placeholder="Longitude"
                        value={this.state.longitude}
                        onChange={this.handleChange} />
                </label>
                <label>
                    Building Address:
                    <input
                        name="address"
                        type="text"
                        placeholder="Address"
                        value={this.state.address}
                        onChange={this.handleChange} />
                </label>
                <input
                    type="submit"
                    value="🏢 Submit"
                />
            </form>
        )
    }
}

export default AddBuilding;
