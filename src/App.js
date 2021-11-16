import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { ProductData, ProductDataTwo } from "./components/Products/data";
import { GlobalStyle } from "./globalStyles";
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={ProductData} />
      <Feature />
      <Products heading="Best Seafood for You" data={ProductDataTwo} />
      <Footer />
    </Router>
  );
};

export default App;
