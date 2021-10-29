import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header"
import ProducListing from './components/ProductListing';
import ProducDetail from './components/ProductDetail';


function App() {
  return (
    <div>
        <Router>
            <Header />
            <Switch>
              <Route path="/" exact component={ProducListing} />
              <Route path="/product/:productId" exact component={ProducDetail} />
              <Route> 404 Not Found! </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;