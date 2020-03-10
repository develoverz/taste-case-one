import React, {Component} from 'react'
import firebase from '../firebase'
export default class AddProducts extends Component{
    state={
        productName:'',
        productCat:'',
        productPrice:'',
    }
    handleInput=(e)=>{
        console.log(e.taregt)
        this.setState({[e.target.name]:e.target.value})
    }
    handleAdd=()=>{
        const productRef=firebase.database().ref('products')
        const product={
            product_name:this.state.productName,
            product_cat:this.state.productCat,
            product_price:this.state.productPrice,
            vendor_id:this.props.currentId
        }
        productRef.push(product)
    }

    render(){
        
        return(
            <div>
                <input type="text" name="productName" placeholder="eg:dosa" onChange={this.handleInput}/>
                <input type="text" name="productCat" placeholder="eg:south" onChange={this.handleInput}/>
                <input type="text" name="productPrice" placeholder="eg:50" onChange={this.handleInput}/>

            <input style={{height:50,width:50,borderRadius:'50%'}} type="button" value="add" onClick={()=>{this.handleAdd();this.props.handleProductAdd()}}/>
            </div>

        )
    }
}