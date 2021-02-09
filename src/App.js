import React from 'react';
import './App.css';
import Navbar from './fragments/Navbar';
import Header from './fragments/Header';
import Footer from './fragments/Footer';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs'
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contactus" component={ContactUs} />
          <Route component={NotFound} />
          </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
