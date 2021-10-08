import { Component } from 'react';
import * as Message from '../constants/Message';

  class CartItem extends Component {

    subTotal = (price, quantity) => {
       return price*quantity
    }

    onDeleteCartItem = (product) => {
        this.props.onDeleteCartItem(product);
        this.props.onMsgDeleteSuccess(Message.MSG_DELETE_PRODUCT_IN_CART);
    }

    onUpdateCart = (product, quantity) => {
        if (quantity>0) {
            this.props.onUpdateCartItem(product, quantity);
            this.props.onMsgUpdateSuccess(Message.MSG_UPDATE_CART_SUCCESS);
        }
    }

      render (){
          var { item } = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={item.product.image}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => this.onUpdateCart(item.product, item.quantity-1)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href=" #">—</a>
                        </label>
                        <label onClick={() => this.onUpdateCart(item.product, item.quantity+1)} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a href=" #">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.subTotal(item.product.price, item.quantity)}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item" onClick={ () => this.onDeleteCartItem(item.product)}>
                        X
                    </button>
                </td>
            </tr>
        );
      }
    
  }

  export default CartItem;
