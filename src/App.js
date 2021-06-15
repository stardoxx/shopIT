import HomepageComponent from  './pages/homepage/HomepageComponent.jsx';
import {Switch, Route, BrowserRouter, withRouter, Routes } from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shopPageComponent.jsx';
import Header from './components/header/Header.jsx';
import SigningPage from './pages/signin-signup/SigningPage.jsx';

function App() {



  return (
    <div className="App">
     <Header/>
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

export default App;
