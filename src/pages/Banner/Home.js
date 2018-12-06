import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import '../../assets/css/page.css'
import '../../assets/css/swiper.css'

class Home extends Component {
  render() {
    const params = {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
      }
    }

    return (
      <div className="page-wrap">
        <Swiper {...params}>
          <div><img src="http://image.oneprice.kr/2018/0921/ca35882bda616330af0e374bbe233f43.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/c044726eaa93b2d1b6305bababb68d60.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/bfd63592329262d7694ed4871ee17fe1.jpg" /></div>
        </Swiper>
      </div>
    )
  }
}

export default Home;