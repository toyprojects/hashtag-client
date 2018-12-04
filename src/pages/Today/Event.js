import React, { Component } from 'react'
import styled from 'styled-components'
import HomeMenu from '../../components/HomeMenu'
import '../../assets/css/page.css'

class TodayEvent extends Component {
  render() {
    return (
      <div className="page-wrap">
        <HomeMenu />
        Event
      </div>
    )
  }
}

export default TodayEvent;