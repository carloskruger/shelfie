import React, {Component} from 'react';

class Product extends Component {
handleClick(event, id, deleteProduct, getInventory){
    event.preventDefault();
    event.stopPropagation();
    deleteProduct(id);
    getInventory();

}
    render(){
console.log("props: ",this.props)
const {id, getInventory, deleteProduct} = this.props
        return (
            <div>
                <div className="productcard">
                <div className="picturearea">
                
                <img src={this.props.img} width="250px" height="150px" /> 
                </div>
                <div className="infoarea">
                    <p>{this.props.name}</p>
                    <p>${this.props.price}</p>
                    <div className="buttonsarea">
                                    {/* <button className="buttonproduct" >Delete</button> */}
                        <button className="buttonproduct" onClick={this.handleClick}>Delete</button>
                        <button className="buttonproduct">Edit</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }


}

export default Product;