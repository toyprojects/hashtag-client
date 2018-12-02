import React, { Component } from 'react'
import styled from 'styled-components'
import HomeMenu from '../../components/HomeMenu'
import '../page.css'

class TodayRanking extends Component {
  render() {
    return (
      <div className="page-wrap">
        <HomeMenu />
        Ranking
      </div>
    )
  }
}

export default TodayRanking;