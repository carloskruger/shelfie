
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

    this.updateInventory = this.updateInventory.bind(this)
  }

  componentDidMount() {
console.log("componentDidMount runs")
    axios.get('/api/inventory')
    .then(res => {
      console.log("res.data", res.data)
      const inventory = res.data;
      this.setState({ 
        inventory: inventory });
      }).catch((err) => {
        console.log(err);
      });
  
  }

updateInventory(inventory){
  this.setState= {
    inventory: inventory,
  }
}



render(){
  
  const testArray = [
    
    {
    "id": 6,
    "name": "Airplane",
    "price": 100000,
    "img": "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
    },
    {
    "id": 7,
    "name": "rabbit",
    "price": 25,
    "img": "https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
    }
  
    ]

  return (
    <div className="App">
         <Header/>
         <main>
      <Dashboard products={ testArray } /> 
      <Form  updInventory={ this.updateInventory }/>
      </main>
   
     
    </div>
  );

}
  
 
}

export default App;
