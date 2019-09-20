import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import { people } from './people';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      people: people,
      searchfield: ''
    }
  }

  onSearchChange(event) {
    this.setState({ searchfield: event.target.value })
    const filteredPeople = this.state.people.filter(people =>{
      return people.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    console.log(filteredPeople);
  }
  
  render (){
    return (
      <div className='tc'>
        <h1>Our Team</h1>
        <Searchbox onSearch={this.onSearchChange}/>
        <Cardlist people={this.state.people}/>
      </div>
  );
  }  
}

export default App;  