import React from 'react'
import styled from 'styled-components'
import logo from './assets/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const Header = () => {
    return (
        
        <Container>
            <HeaderLogo>
                <image><img src={logo} alt="logo"/></image>
            </HeaderLogo>
            <HeaderOptionAddress>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select your Address</OptionLineTwo>
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
                    <OptionLineOne>Returns </OptionLineOne>
                    <OptionLineTwo>&Orders</OptionLineTwo>
                </HeaderOption>
                <HeaderOptionCart>
                    <ShoppingCartIcon/>
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
        color: hsl(0, 0%, 100%);
       
    `
const HeaderLogo = styled.div`
img{
    width: 60px;
    margin-left: 10px;
}
`

const HeaderOptionAddress = styled.div`
`
const OptionLineOne = styled.div`
`
const OptionLineTwo = styled.div`
`
const HeaderSearch = styled.div`
display:flex
`
const HeaderSearchInput = styled.input`
`
const HeaderSearchIconContainer = styled.div`
`
const HeaderNavItems = styled.div`
display: flex;
`
const HeaderOption = styled.div`
`
const HeaderOptionCart = styled.div`
`

