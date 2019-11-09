import React from 'react';

class RemoveBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ''
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
		const { deleteBuilding } = this.props;
        deleteBuilding(this.state.code.toUpperCase())

        this.setState({
            code: ''
        })

        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Code of Building to Erase:
                    <input
                        name="code"
                        type="text"
                        placeholder="Code"
                        value={this.state.code}
                        onChange={this.handleChange} />
                </label>
                <input
                    type="submit"
                    value="❌ Erase"
                />
            </form>
        )
    }
}

export default RemoveBuilding;
