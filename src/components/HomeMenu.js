import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import QueryString from 'query-string'
import styled from 'styled-components'

const SwipeMenu = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`

const StyledLink = styled(NavLink)`
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
  }
`

class HomeMenu extends Component {
  render() {
    return (
      <SwipeMenu>
        <StyledLink to="/" exact="true">홈</StyledLink>
        <StyledLink to="/today/ranking">오늘랭킹</StyledLink>
        <StyledLink to="/today/new">오늘신상</StyledLink>
        <StyledLink to="/today/reward">오늘리워드</StyledLink>
        <StyledLink to="/today/benefit">오늘혜택</StyledLink>
      </SwipeMenu>
    )
  }
}

export default HomeMenu;