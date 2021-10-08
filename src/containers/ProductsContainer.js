import { Component } from 'react';
import Products from '../components/Products';
import {connect} from 'react-redux';
import Product from '../components/Product';
import PropTypes from 'prop-types';
import * as types from '../actions/index';

  class ProductsContainer extends Component {

    showProducts = (products) => {
        var result = null;
        var {addToCart,onMsgAddSuccess} = this.props;
        if(products.length > 0){
            result = products.map((value, index) => {
              return <Product key={index+1} product={value} addToCart={addToCart} onMsgAddSuccess={onMsgAddSuccess}></Product>
          })
        }
        
        return result;
    }

      render (){
        var {products} = this.props;
        
        return (
            <Products>
              {this.showProducts(products)}
            </Products>
        );
      }
    
  }

  ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        ratting: PropTypes.number.isRequired,
      })
    ).isRequired,
    onMsgAddSuccess: PropTypes.func.isRequired
  };

  const mapStateToProps = (state) => {
    return {
        products: state.product
    }
  }

  const mapDispatchToProps = (dispatch, props) => {
    return {
      addToCart : (product) => {
        dispatch(types.addToCart(product,1))
      },
      onMsgAddSuccess : (message) => {
        dispatch(types.msgAddSuccess(message))
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);
