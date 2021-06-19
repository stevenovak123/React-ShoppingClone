
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import {db} from './firebase'
function App() {
  const [cartItems, setCartItems] = useState([]);
  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        product: doc.data()
      }))
      setCartItems(tempItems);
    })
  }
  useEffect(() => {
    getCartItems();
  },[])
  
  return (
      <Router>
    <Container>
      <Header cartItems={cartItems} />
      <Switch>
          <Route path="/cart">
            <Cart cartItems={cartItems} key={cartItems.id}/>
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
