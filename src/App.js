import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFount/NotFound';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Cart from './components/Cart/Cart';





function App() {
  return (

    <BrowserRouter >
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/service">
          <Service />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
