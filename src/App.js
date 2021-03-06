import { Component } from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import ProductsContainer from "./containers/ProductsContainer";
import CartContainer from "./containers/CartContainer";
import MessageContainer from "./containers/MessageContainer";

  class App extends Component {
      render () {
        return (
            <div>
                <Header></Header>
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer></ProductsContainer>
                        <MessageContainer></MessageContainer>
                        <CartContainer></CartContainer>
                    </div>
                </main>
                
                <Footer></Footer>
            </div>
          );
      }
    
  }

  export default App;
