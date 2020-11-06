import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header'
import React, {Component} from 'react';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {

    axios.get(`/api/inventory`)
    .then(res => {
      const inventory = res.data;
      this.setState({ 
        inventory: inventory });
      })
  
  }




render(){
  return (
    <div className="App">
         <Header/>
         <main>
      <Dashboard products={ this.state.inventory } />
      <Form/>
      </main>
   
     
    </div>
  );

}
  
 
}

export default App;
