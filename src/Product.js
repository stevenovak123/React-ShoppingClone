import React from 'react'
import styled from 'styled-components'
import {db} from './firebase'
const Product = ({ title, price, rating, image, id }) => {
    
    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get().then((doc) => {
            if (doc.exists) {
                cartItem.update({
                    quantity:doc.data().quantity+1
                })
            } else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image: image,
                    price: price,
                    quantity: 1
                })
            }
            
        })
    }



    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating).fill().map(rating=><p>⭐</p>)
                }
            </Rating>
            <Image src={image} />
            <ActionDiv>
                <AddToCartButton
                onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionDiv>
        </Container>
    )
}

export default Product



const Container = styled.div`
    background-color: hsl(0, 0%, 100%);
    z-index:100;
    width: 20rem;
    flex:1;
    padding: 1.5rem;
    margin:1rem;
    max-height: 25rem;
    display: flex;
    flex-direction: column;
`
const Title = styled.span``
const Price = styled.span`
 font-weight:800;
 margin-top: 0.2rem;
 
 `
const Rating = styled.div`
    display: flex;
    align-items: center;
`
const Image = styled.img`
max-height:15rem;
object-fit: contain;
`
const ActionDiv = styled.div`
margin-top:1rem;
display:flex;
align-items: center;
justify-content: center;
`

const AddToCartButton = styled.button`
width:10rem;
height: 2rem;
background-color: hsl(42.9, 84.6%, 61.8%);
border: 2px solid hsl(42.9, 52.7%, 43.2%);
border-radius: 2px;
cursor: pointer;
`