
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

    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    
    this.getInventory();
  
  
  }

getInventory(){

  axios.get('/api/inventory')
  .then(res => {
    const inventory = res.data;
    this.setState({ 
      inventory: inventory });
    }).catch((err) => {
      console.log(err);
    });

}

  deleteProduct(id) {
   
    axios.delete('/api/inventory/'+id)
  //  .then(  res => res.sendStatus(200) )
  //  .catch( err => {
  //   res.status(500).send({errorMessage: "couldn't delete the product!"});
  //   console.log(err)
  //   });



    }



render(){


  return (
    <div className="App">
         <Header/>
         <main>
      {/* <Dashboard products={ testArray } />  */}
      <Dashboard products={ this.state.inventory } deleteProduct={ this.deleteProduct}  getInventory={ this.getInventory }/> 
      <Form  getInventory={ this.getInventory }/>
      </main>
   
     
    </div>
  );

}
  
 
}

export default App;
