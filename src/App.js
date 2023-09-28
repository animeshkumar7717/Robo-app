import { Component } from 'react'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();

    this.state = {
      monster: [
        {
          name: 'Aniemsh',
          id: '1234'
        },
        {
          name: 'Deepak',
          id: '1122'
        },
        {
          name: 'Aashlesha',
          id: '2211'
        },
        {
          name: 'Hemalata',
          id: '3344'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monster.map((monster) => {
            return <div key={monster.id}>
              <h1 >{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
