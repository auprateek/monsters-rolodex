import {CardList } from './components/card-list/card-list.component';
import './App.css';
import React,{Component} from 'react';

import {SearchBox} from './components/search-box/search-box.component';
class App extends Component
{
  constructor()
  {
    super();
    this.state=
    {monsters :[],
      searchField: ''
          };
  }


componentDidMount()
{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({ monsters :users}))
}

  render()
    {
      const {monsters, searchField}= this.state;
      const monsterfilter= monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
       return (
         <div className="App">
         {/* <input type="search" placeholder="Monster Search" onChange={e => this.setState({searchField :e.target.value})} /> */}
          <h1>Monster Rolodex</h1>
          <SearchBox placeholder="Monster Search" handleChange={e => this.setState({searchField :e.target.value}) }/>
           <CardList monsters={monsterfilter} />
          
        
          </div>
    
    )
  }
  
    
} 




export default App;
