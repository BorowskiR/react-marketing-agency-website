import React from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Footer from './components/Footer';
import SignUp from './pages/SignUp/SignUp';
import Products from './pages/Products/Products';
import Services from './pages/Services/Services';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/services" exact component={Services} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
