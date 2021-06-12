import HomepageComponent from  './pages/homepage/HomepageComponent.jsx';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {

const Hats = () =>{
  return(
    <div>
    <h1>hats page</h1>
  </div>
  )
}


  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
        <Route exact path='/' component={HomepageComponent} />
        <Route path='/hats' component={Hats} />
     </Switch>
     </BrowserRouter>
    </div>
  );

}

export default App;
