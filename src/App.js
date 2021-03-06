import Header from './components/Header';
// import Products from './components/Products';
import Footer from './components/Footer';
import Message from './components/Message';
// import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
function App() {
  return (
    <div>

      <main id="mainContainer">
        <div className="container">
          <Header></Header>
          <ProductsContainer></ProductsContainer>

          <MessageContainer />

          <CartContainer></CartContainer>
        </div>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
