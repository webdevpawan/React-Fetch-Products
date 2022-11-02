import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./product.css"
class ProductsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <div className="product-items">
                    {
                        this.props.newProducts.map((products, index) => {
                            return (
                                <div>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={products.image} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{products.title}</h5>
                                            <p className="card-text">{products.category}</p>
                                            <p>Price : {products.price}</p>
                                            <a href="#" className="btn btn-primary">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}

export default ProductsList;