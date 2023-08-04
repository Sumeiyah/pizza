// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Recipe from './components/Recipe';
import Login from './components/Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <nav className="bg-gradient-to-r from-gray-900 to-red-500 p-4">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="/login">Login</Link> 
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          
        </ul>
      </nav>
      <Switch>
        <Route path="/login" component={Login} /> 
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/recipes" component={Recipe} />
        <Route exact path="/" component={Home} /> {/* Home page route */}
      </Switch>
    </Router>
  );
};

export default App;
