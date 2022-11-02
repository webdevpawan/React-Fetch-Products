import React from "react";
import ProductsList from "./productlist.component";

class Products extends React.Component{
  constructor(){
    super()

    this.state = {
        products : [],
        productsLoaded : false
    }
  }
  componentDidMount(){
    fetch("https://fakestoreapi.com/products/")
    .then((res) =>{
        return res.json()
    })
    .then((data) =>{
        this.setState({
            products : data,
            productsLoaded : true
        })
    })
  }
  render(){
    if(!this.state.productsLoaded){
      return<h3>
        Please wait some time...
      </h3>
    }
    return(
      <>
      <ProductsList  newProducts = {this.state.products}   />
      </>
    )
  }
}

export default Products ;