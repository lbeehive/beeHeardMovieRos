import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import MovieList from './MovieList';
import Header from './Header';
import Footer from './Footer';
import App from './App';
import Signup from './Signup';
import Signin from './Signin';


/*
import Main from './Components/Structure/Main';
import MovieListHeading from './components/MovieListHeading';
*/

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Switch>
        <Route exact path="/" render={() => signedIn() ? <Redirect to="/movielist"/> : <App/>} />
          <Route exact path="/" component={MovieList} />
          <Route exact path="/home" component={MovieList} />
          <Route exact path="/movielist" component={MovieList} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
        <Footer />
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function signedIn() {
  return (localStorage.getItem("token") != null) ? true : false
}

