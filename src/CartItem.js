import React from 'react'
import styled from 'styled-components'
import { db } from './firebase';
const CartItem = ({ id, item }) => {
    let options = [];

    for (let i = 1; i < Math.max(item.quantity + 1, 20); i++){
        options.push(<option value={i}>Qty:{i}</option>)
    }
    const changeQuantity = (newQuantity) => {
        console.log(newQuantity);
         db.collection('cartItems').doc(id).update({
            quantity: parseInt(newQuantity)
        })
    
}
    return (
        <Container>
            <ImageContainer>
                <img src={item.image} alt="the product"/>
            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                            value={item.quantity}
                            onChange={(e)=>changeQuantity(e.target.value)}
                        >{options}
                            
                      </select>
                        
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                {item.price}
            </CartItemPrice>
        </Container>
    )
}

export default CartItem


const Container = styled.div`
padding-top:1rem;
padding-bottom:1rem;
display:flex;
`
const ImageContainer = styled.div`
width: 17rem;
height: 17rem;
flex-shrink: 0;
flex-grow: 0;
margin-right: 1rem;
img{
    object-fit: contain;
    height: 100%;
    width: 100%;
}
`
const CartItemInfo = styled.div`
flex-grow:1
 `
const CartItemInfoTop = styled.div`
color:hsl(189.1, 100%, 26.1%);
h2{
    font-size:1.2rem;
}
`
const CartItemInfoBottom = styled.div`
display:flex;
margin-top:4px;
`
const CartItemQuantityContainer = styled.div`
    select{
        border-radius: 7px;
        background-color: hsl(180, 7.3%, 94.5%);
        padding: 10px;
        box-shadow: 0 2px 5px hsl(180, 6.3%, 6.3%);
        :focus{
            outline: none;
        }
    }
    
`
const CartItemDeleteContainer = styled.div`
    color:hsl(189.1, 100%, 26.1%);
    margin-left:1rem;
    cursor: pointer;
`
const CartItemPrice = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    margin-left: 1rem;

`
