import React, { Component } from 'react'
import styled from 'styled-components'
import HomeMenu from '../../components/HomeMenu'
import '../page.css'

class TodayNew extends Component {
  render() {
    return (
      <div className="page-wrap">
        <HomeMenu />
        New
      </div>
    )
  }
}

export default TodayNew;