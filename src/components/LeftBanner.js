import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHeart, faUser, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/images/logo.png'

library.add(faBars, faHeart, faUser, faShoppingBasket)


const LogoImage = styled.div`
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 35px;
`

const Menu = styled.div`
  background-color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  margin-left: -15.6em;
  display: inline-block;
`

const LogoArea = styled.div`
  padding-bottom: 60px;
`

const MenuArea = styled.div`
  font-weight: 100;
`

const LineSeparator = styled.div`
  width: 180px;
  height: 1px;
  background-color: #222;
  margin: 20px 0 30px -12px;
`

const Wrap = styled.div`
  margin: 64px 48px 0;
`

const StyledLink = styled(Link)`
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 100;
  text-decoration: none;
  color: black;

  &:hover {
    color: black;
    text-decoration: none;
  }
`

const LineWrap = styled.div`
  text-align: left;
  height: 39px;
`

const FAIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`

class LeftBanner extends Component {
  render() {
    return (
      <Menu className="banner">
        <Wrap>
          <LogoArea>
            <StyledLink to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <LogoImage />
            </StyledLink>
          </LogoArea>
          <MenuArea>
            <StyledLink to="/signin">로그인</StyledLink> 
            <span style={{ padding: '0px 10px 0px 10px' }}>|</span>
            <StyledLink to="/signup">회원가입</StyledLink>
          </MenuArea>
          <LineSeparator />
          <LineWrap>
            <StyledLink to="/categories"><FAIcon icon="bars" style={{ width: '0.875em' }} /> 카테고리</StyledLink>
          </LineWrap>
          <LineWrap>
            <StyledLink to="/heart"><FAIcon icon="heart" style={{ width: '0.875em' }} /> 하트</StyledLink>
          </LineWrap>
          <LineWrap>
            <StyledLink to="/mypage"><FAIcon icon="user" style={{ width: '0.875em' }} /> 마이페이지</StyledLink>
          </LineWrap>
          <LineSeparator />
          <LineWrap>
            <StyledLink to="/basket"><FAIcon icon="shopping-basket" style={{ width: '0.875em' }} /> 장바구니</StyledLink>
          </LineWrap>
        </Wrap>
      </Menu>
    );
  }
}

export default LeftBanner;