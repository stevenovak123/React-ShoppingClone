import React from 'react'
import styled from 'styled-components'
import Product from './Product'
const Home = () => {
    return (
        <Container>
            <Banner>

            </Banner>
            <Content>
               <Product/>
               <Product/>
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
max-width: 150rem;
margin: 0 auto;
`
const Banner = styled.div`
background-image:url('https://imgur.com/SYHeuYM.jpg');
min-height: 600px;
background-position: center;
background-size: cover;
z-index: 1;
mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0, 0,0,0));
`
const Content = styled.div`
padding-left: 1rem;
padding-right: 1rem;
margin-top:-20rem ;
display: flex;
    
`