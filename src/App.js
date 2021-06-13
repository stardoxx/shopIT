import HomepageComponent from  './pages/homepage/HomepageComponent.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import ShopPage from './pages/shop/shopPageComponent.jsx';

function App() {



  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/shop' component={ShopPage} />
     </Switch>
     </BrowserRouter>
    </div>
  );

}

export default App;
