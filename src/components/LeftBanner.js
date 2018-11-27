import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.div`
  background-color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  margin-left: -15.6em;
  display: inline-block;
`

class LeftBanner extends Component {
  render() {
    return (
      <Menu className="banner">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="signin">로그인</NavLink></li>
        <li><NavLink to="signup">회원가입</NavLink></li>
      </Menu>
    );
  }
}

export default LeftBanner;