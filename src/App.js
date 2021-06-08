
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';

function App() {
  return (
      <Router>
    <div >
      <Header />
      <Switch>
          <Route path="/cart">
      <Cart />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
      </Switch>
    </div>
      </Router>
  );
}

export default App;
