import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.div`
  background-color: white;
  width: 250px;
  height: 100%;
  position: fixed;
  display: inline-block;
`

class RightBanner extends Component {
  render() {
    return (
      <Menu className="banner">
        <h1>인기글</h1>
      </Menu>
    );
  }
}

export default RightBanner;