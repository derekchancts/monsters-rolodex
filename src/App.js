import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters:[],
      searchField: '',
      placeholder: 'search monsters...'
    }

    // this.handleChange = this.handleChange.bind(this);

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((data) => {
       // console.log(data)
        this.setState({
          monsters: data
        })
        //console.log(this.state.monsters)
      })
  }


  
  render() {

    const { monsters, searchField } = this.state;
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    
    const filteredMonsters = monsters.filter(monster => {
     return monster.name.toLowerCase().includes(searchField.toLowerCase()) 
    })
   
    
    /* 
    return (
      <>
        <div className="App">
          <input type="search" placeholder="search monsters..." 
            onChange={e => this.setState({ searchField: e.target.value }, () => {
              console.log(this.state)
            } )} />
          <CardList monsters={filteredMonsters} />  
        </div>
      </>
    )
  } */


  return (
    <>
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox handleChange={this.handleChange} placeholder={this.state.placeholder}  />
        <CardList monsters={filteredMonsters} />  
      </div>
    </>
  )
} 

}


export default App;
