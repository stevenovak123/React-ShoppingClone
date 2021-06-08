import React from 'react'
import styled from 'styled-components'
import logo from './assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        
        <Container>
            <HeaderLogo>
                <Link to="/">
                <picture><img src={logo} alt="logo"/></picture>
                </Link>
            </HeaderLogo>
            <HeaderOptionAddress>
                <LocationOnIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your Address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>
            <HeaderSearch>
                <HeaderSearchInput type="text"></HeaderSearchInput>
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>
            <HeaderNavItems>
                <HeaderOption>
                    <OptionLineOne>Hello,Steve</OptionLineOne>
                    <OptionLineTwo>Account & lists</OptionLineTwo>
                </HeaderOption>
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <Link to="/cart">
                    <ShoppingCartIcon />
                    <CartCount>5</CartCount>
                    </Link>
                </HeaderOptionCart>
            </HeaderNavItems>
        </Container>
        
    )
}

export default Header

const Container= styled.div`
        height: 60px;
        background-color:hsl(180, 6.3%, 6.3%);
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: hsl(0, 0%, 100%);
       
    `
const HeaderLogo = styled.div`
a{
    text-decoration:none
}
img{
    width: 4rem;
    margin-left: 0.625rem;
}
`

const HeaderOptionAddress = styled.div`
padding-left: 0.625rem;
padding-right: 0.625rem;
display: flex;
align-items:center;

`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
font-weight: 700;
`
const HeaderSearch = styled.div`
display:flex;
flex-grow: 1;
height:2.5rem;
border-radius: 0.625rem;
overflow: hidden;
margin-left:4px;
background-color:hsl(0, 0%, 100%);
:focus-within{
    box-shadow: 0 0 0 3px hsl(36, 100%, 50%);
}
`
const HeaderSearchInput = styled.input`
flex-grow: 1;
border:0;
:focus{
    outline:none;
}
`
const HeaderNavItems = styled.div`
display: flex;
padding: 1rem;
`
const HeaderSearchIconContainer = styled.div`
background-color: hsl(33.8, 98.6%, 70.4%);
width:2.80rem ;
color: hsl(0, 0%, 0%);
display: flex;
justify-content: center;
align-items: center;
`
const HeaderOption = styled.div`
padding: 0.625rem;
`
const HeaderOptionCart = styled.div`
display: flex;
a{
    display: flex;
    align-items: center;
    color: hsl(0, 0%, 100%);
    padding-right:0.625rem;
    text-decoration:none;
}
`
const CartCount = styled.div`
padding-left: 0.4rem;
`
