import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Search from './pages/Search';
import Result from './pages/Result';
import Details from './pages/Details';
import NotFound from './pages/NotFound';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/result/:searchTerm" component={Result} />
        <Route exact path="/result/:searchTerm/details" component={Details} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </div>
);
export default App;
