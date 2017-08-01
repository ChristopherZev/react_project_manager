import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';


class App extends Component {
  constructor(){
    this.state = {
      projects:[
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping cart',
          category: 'Web Development'
        }
      ]
    }
  }


  render() {
    return (
      <div className="App">
        My App
        <Projects />
      </div>
    );
  }
}

export default App;