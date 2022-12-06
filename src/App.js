import "./App.css";
// import Counter from "./components/Counter/Counter";
// import FormData from "./components/FormData/FormData";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Header from "./components/Header";
import {Provider} from 'react-redux'
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Provider>
  );
}

export default App;
