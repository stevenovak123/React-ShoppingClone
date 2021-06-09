
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components'

function App() {
  return (
      <Router>
    <Container>
      <Header />
      <Switch>
          <Route path="/cart">
      <Cart />
          </Route>
          <Route path="/">
          <Home/>
          </Route>
      </Switch>
    </Container>
      </Router>
  );
}

export default App;
const Container = styled.div`
background-color: hsl(0, 0%, 91.8%);
`
