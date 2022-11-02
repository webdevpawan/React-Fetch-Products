import React from "react";
import Products from "./components/products/Products.component";
import Increament from "./components/increament/increament.component";
class App extends React.Component{
  constructor(){
    super()
  }

  render(){
    return(
      <>
      {/* <Increament /> */}
      <Products />
      </>
    )
  }
}

export default App ;