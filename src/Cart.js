import React from 'react'
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
const Cart = ({ cartItems }) => {
    
    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
        total+=(item.product.price * item.product.quantity)
      })
        return total
    }
    const getCount =()=> {
       let count = 0;
    //loop through all items
    console.log(cartItems)
      cartItems.forEach((item) => {
    count += item.product.quantity;
      })
       return count
    }

    return (
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal getCount={getCount} getTotalPrice={getTotalPrice }/>
        </Container>
    )
}

export default Cart

const Container = styled.div`
display: flex;
padding:1.2rem 1.3rem 0 1.2rem;
align-items: flex-flex-start;
`