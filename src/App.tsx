import CartContextProvider from "./store/CartContextProvider.tsx";
import Header from "./components/Header.tsx";
import Product from "./components/Product.tsx";
import Shop from "./components/Shop.tsx";
import { DUMMY_PRODUCTS } from "./utils/dummy-products.ts";
import "./App.css";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
