import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.handleAddToProducts = this.handleAddToProducts.bind(this);
    }


 addProduct(name, price, img){
    console.log("addBill")
   
    const newObj = {"name": name, "price": +price,  "img": img};
    console.log("newObj: ",newObj)
    axios.post('/api/product',newObj )
    .then(res => {
     
     this.setState({ 
        name: '',
        price: 0,
        img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'});
     })
     .catch((err) => {
       console.log(err);
     });
   }


    handleImageChange( event){
        this.setState({ img: event.target.value})
    
    }

    handleNameChange( event){
        this.setState({ name: event.target.value})
    
    }
    
    handlePriceChange( event ){
        this.setState({ price: event.target.value})
    
    }

    handleAddToProducts(event){
        event.preventDefault();
        console.log("We are at handleClick at forms")
        const {name, price, img} = this.state
      
        this.addProduct(name, price, img);
    }
  
    
    

    render(){
        return(
            <div className="productform">
                <img src={this.state.img} alt="product image" width="250px" height="150px"/>
                <span>Image URL:</span>
                <input type="text" name="img" value={ this.state.img } onChange={this.handleImageChange} />
                <span>Product Name:</span>
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                <span>Price:</span>
                <input type="price" name="price" value={this.state.price} onChange={this.handlePriceChange}/>
                <div class="buttonsarea">
                <button>Cancel</button> <button onClick={this.handleAddToProducts}> Add to Inventory</button>
                </div>
            </div>
        )
    }

}

export default Form;