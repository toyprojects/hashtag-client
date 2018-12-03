import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import QueryString from 'query-string'
import styled from 'styled-components'

const SwipeMenu = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-bottom: 15px;
  height: 40px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`

const StyledLink = styled(NavLink)`
  display: inline-block;
  background-color: transparent !important;
  background-image: none !important;
  border-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  color: black;
  margin-left: 20px;

  &:hover {
    color: black;
    text-decoration: none;
  }

  &.active {
    color: #2979ff;
    font-weight: bold;
    border-bottom: 2px solid #2979ff;
  }
`

class HomeMenu extends Component {
  render() {
    return (
      <SwipeMenu>
        <StyledLink to="/" exact="true" style={{ marginLeft: '30px' }}>홈</StyledLink>
        <StyledLink to="/today/ranking">오늘랭킹</StyledLink>
        <StyledLink to="/today/new">오늘신상</StyledLink>
        <StyledLink to="/today/reward">오늘리워드</StyledLink>
        <StyledLink to="/today/benefit">오늘혜택</StyledLink>
        <StyledLink to="/today/basket">오늘찜순위</StyledLink>
        <StyledLink to="/today/event" style={{ marginRight: '30px' }}>오늘이벤트</StyledLink>
      </SwipeMenu>
    )
  }
}

export default HomeMenu;