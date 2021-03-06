import React, { Component } from "react";
class CartResult extends Component {
    showTotalAmout = (cart) => {
        var result = null;
        if(cart.length > 0 ){
            cart.map((item, index) => {
                return result+=item.product.price*item.quanlity;
            })
        }
        return result;
    }
    render() {
        var {cart} = this.props;
        return (
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong> {this.showTotalAmout(cart)} $</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        );
    }
}
export default CartResult;