import React from "react";

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 30 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>Qty: {qty}</div>

          <div className="cart-item-actions">
            <img
              alt="dec"
              style={styles.icon}
              className="action-item"
              src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
              onClick={() => {
                this.props.onDec(this.props.product);
              }}
            />
            <img
              alt="inc"
              style={styles.icon}
              className="action-item"
              src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1638770750~hmac=84969bbf3c857c9a77f642d53d18333a"
              onClick={() => {
                this.props.onInc(this.props.product);
              }}
            />
            <img
              alt="del"
              style={styles.icon}
              className="action-item"
              src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1638770767~hmac=00f54028f234fe712fdc4e8debf64f68"
              onClick={() => {
                this.props.onDel(this.props.product);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
    background: "#ccc",
  },
  icon: {
    height: 30,
    width: 30,
  },
};
export default CartItem;
