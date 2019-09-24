import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/etuned/users/users')
      .then(response=> response.json())
      .then(users => {this.setState({ people: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { people, searchfield } = this.state;
    const filteredPeople = people.filter(people =>{
      return people.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !people.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Our Team</h1>
          <SearchBox searchChange={this.onSearchChange}/>
            <CardList people={filteredPeople} />
        </div>
      );
  }
}

export default App;
