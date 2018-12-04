import React, { Component } from 'react'
import styled from 'styled-components'
import HomeMenu from '../../components/HomeMenu'
import '../../assets/css/page.css'

class TodayBasket extends Component {
  render() {
    return (
      <div className="page-wrap">
        <HomeMenu />
        Basket
      </div>
    )
  }
}

export default TodayBasket;