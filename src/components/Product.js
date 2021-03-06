import { Component } from 'react';
import * as message from '../constants/Message';

  class Product extends Component {

    showRattings = (ratting) => {
        var result = [];
        for (let i = 1; i <= ratting; i++) {
            result.push(<i key={i} className="fa fa-star"></i>);           
        }
        for (let j = 1; j <= (5-ratting); j++) {
            result.push(<i key={j+6} className="fa fa-star-o"></i>);  
        }
        return result;
    }

    addToCart = (product) =>{
        this.props.addToCart(product);
        this.props.onMsgAddSuccess(message.MSG_ADD_TO_CART_SUCCESS);
        console.log(message.MSG_ADD_TO_CART_SUCCESS);
    }

      render (){
          var {product} = this.props;
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.image}
                            className="img-fluid" alt="" />
                        <a href=" #">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href=" #">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRattings(product.ratting)}
                            </li>
                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a onClick={() => this.addToCart(product)} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
      }
    
  }

  export default Product;
