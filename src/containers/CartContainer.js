import { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import * as message from '../constants/Message';
import CartResult from '../components/CartResult';
import * as actions from '../actions/index';

  class CartContatiner extends Component {

    showCartItem = (cart) => {
      var result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>
      var {onDeleteCartItem, onMsgDeleteSuccess, onUpdateCartItem, onMsgUpdateSuccess} = this.props;
      
      if(cart.length>0){
        result = cart.map((item, index) => {
          return <CartItem key={index} item={item} index={index} 
          onUpdateCartItem={onUpdateCartItem}
          onMsgUpdateSuccess={onMsgUpdateSuccess}
          onDeleteCartItem={onDeleteCartItem} onMsgDeleteSuccess={onMsgDeleteSuccess}></CartItem>
        })
      }
      return result;
    }

    showCartResult = (cart) => {
      let result = null;
      if(cart.length > 0) {
        result = <CartResult cart={cart}></CartResult>
      }
      return result;
    }

      render (){     
        
        var {cart} = this.props;        
        return (
            <Cart>
              {this.showCartItem(cart)}
              {this.showCartResult(cart)}
            </Cart>
        );
      }
    
  }

  CartContatiner.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
      product: PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
          inventory: PropTypes.number.isRequired,
          ratting: PropTypes.number.isRequired,
        }).isRequired,
        quantity:PropTypes.number.isRequired
      })
    )};

  const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
  }

  const mapDispatchToProps = (dispatch, props) => {
    return {
      onDeleteCartItem : (item) => {
        dispatch(actions.deleteCartItem(item))
      },
      onMsgDeleteSuccess : (message) => {
        dispatch(actions.msgDeleteSuccess(message))
      },
      onUpdateCartItem: (product, quantity) => {
        dispatch(actions.UpdateCartItem(product, quantity))
      },
      onMsgUpdateSuccess : (message) => {
        dispatch(actions.msgUpdateSuccess(message))
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CartContatiner);
