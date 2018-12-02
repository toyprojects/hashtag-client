import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HomeMenu from '../components/HomeMenu'
import './page.css'

class Home extends Component {
  render() {
    return (
      <div className="page-wrap">
        <HomeMenu />
        Home
      </div>
    )
  }
}

export default Home;