import HomepageComponent from  './pages/homepage/HomepageComponent.jsx';
import {Switch, Route, BrowserRouter, withRouter, Routes } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shopPageComponent.jsx';
import Header from './components/header/Header.jsx';
import SigningPage from './pages/signin-signup/SigningPage.jsx';
import {auth} from './firebase/firebase.utils';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state ={
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
       <Header currentUser = {this.state.currentUser} />
       <BrowserRouter>
       <Switch>
          <Route exact path='/' component={withRouter(HomepageComponent)} />
          <Route exact path='/shop' component={withRouter(ShopPage)} />
          <Route path = '/signin' component = {SigningPage} />
       </Switch>
       </BrowserRouter>
      </div>
    );
    }

}

export default App;
