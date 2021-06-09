import React from 'react'
import styled from 'styled-components'
const Product = () => {
    return (
        <Container>
            <Title>
                Imac
            </Title>
            <Price>
                $1499
            </Price>
            <Rating>
            ⭐⭐⭐⭐⭐
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg' />
            <ActionDiv>
            <AddToCartButton>Add to Cart</AddToCartButton>
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
const Rating = styled.div``
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
`