import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects:[]
    }
  }

//data for keys should not be in constrctor
//should be in a WillMount to run at each render like examples below 
//LifeCycle Method:
  componentWillMount(){ 
    this.setState({projects: [
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

      ]});

  }


  render() {

    return (
      <div className="App">
        <AddProject />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;