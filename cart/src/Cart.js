import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 8999,
          title: "Phone",
          qty: 1,
          img: "",
        },
        {
          id: 2,
          price: 999,
          title: "Watch",
          qty: 1,
          img: "",
        },
        {
          id: 3,
          price: 54999,
          title: "Laptop",
          qty: 1,
          img: "",
        },
      ],
    };
  }
  handleIncreaseQuantity=(product)=> {
    const productInd=this.state.products.findIndex(obj=>obj.id===product.id);
    const products=this.state.products
    product.qty++;
    products[productInd]=product;
    this.setState({products:products})
  }
  handleDecreaseQuantity=(product)=> {
    const productInd=this.state.products.findIndex(obj=>obj.id===product.id);
    const products=this.state.products
    products.qty--;
    products[productInd]=product;
    this.setState({products:products})
  }
  handleDeleteProduct=(product)=> {
    const productInd=this.state.products.findIndex(obj=>obj.id===product.id);
    const products=this.state.products
    products.splice(productInd)
    this.setState({products:products})
  }
  render() {
    console.log("render")
    const { products } = this.state;
    return (
      <div>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onInc={this.handleIncreaseQuantity}
              onDec={this.handleDecreaseQuantity}
              onDel={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}
export default Cart;
