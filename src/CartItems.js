
import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
const CartItems = ({ cartItems }) => {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item) =>
                    (<CartItem
                        key={item.id}
                        id={item.id}
                        item={item.product}
                    />
                    ))
                    
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
background-color: hsl(0, 0%, 100%);
flex:0.8;
padding:2rem;
margin-right:1.5rem;
`
const Title = styled.h2`
margin-bottom:0.8rem;
`
const ItemsContainer=styled.div``