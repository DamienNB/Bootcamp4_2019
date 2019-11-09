import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      highest_id: 0,
      filterText: '',
      selectedBuilding: 0
    };
  }
  componentWillMount() {
    this.setState({
      data: this.props.data,
      highest_id: 148
    })
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  newBuilding(value) {
    value.id = this.state.highest_id + 1;

    // update the highest_id val
    this.setState({ highest_id: value.id });

    // console.log(value);

    this.state.data.push(value);
  }

  deleteBuilding(code) {
    this.setState({
      data: this.state.data.filter(directory =>
        (directory.code.toUpperCase() !== code.toUpperCase()))
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  render() {

    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <main>
          <div className="row">
            <div className="column1">
              <Search
                onChange={this.filterUpdate.bind(this)}
              />
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tbody>
                    <tr>
                      <th>
                        <b>Code Building</b>
                      </th>
                    </tr>
                    <BuildingList
                      data={this.state.data}
                      filterText={this.state.filterText}
                      selectedUpdate={this.selectedUpdate.bind(this)}
                    />
                  </tbody>
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding
                data={this.state.data}
                selectedBuilding={this.state.selectedBuilding}
              />
            </div>
            <div className="column3">
              <b>Add a building</b>
              <AddBuilding
                buildingSubmit={this.newBuilding.bind(this)}
              />
            </div>
            <div className="column4">
              <b>Remove a building</b>
              <RemoveBuilding
                deleteBuilding={this.deleteBuilding.bind(this)}
              />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
