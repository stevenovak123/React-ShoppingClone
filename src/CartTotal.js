import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format'
const CartTotal = ({getTotalPrice,getCount}) => {
    

    return (
        <Container>
            <Subtotal>Subtotal({getCount()} items):
                <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal


const Container = styled.div`
background-color: hsl(0, 0%, 100%);
flex:0.3;
padding: 2rem;
`
const Subtotal = styled.h2`
 margin-bottom:1rem;
`
const CheckoutButton = styled.button`
 background-color: hsl(42.9, 84.6%, 61.8%);
 width: 100%;
 padding:0.8rem 0.8rem;
 border: 2px solid hsl(42.9, 52.7%, 43.2%);
 border-radius: 4px;
 cursor: pointer;
 font-size: 1rem;
 :hover{
     background:hsl(43.2, 68.9%, 57.3%) ;
 }
`