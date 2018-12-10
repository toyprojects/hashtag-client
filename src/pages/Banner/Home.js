import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import '../../assets/css/page.css'
import '../../assets/css/swiper.css'


const Section = styled.div`
  /* padding: 32px 0 32px 30px; */
  padding-top: 32px;
`

const Title = styled.div`
  padding-left: 32px;
  text-align: left;
`

const SwipeMenu = styled.div`
  margin-top: 40px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`

const StyledLink = styled(NavLink)`
  width: 150px;
  height: 250px;
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
  margin: 0;
  box-shadow: 0 15px 50px 0 rgba(213,216,228,.3);

  &:hover {
    color: black;
    text-decoration: none;
  }
`

const SwiperParentApp = {
  width: 'auto',
  display: 'inline-block',
  marginLeft: '32px'
}

const SwiperWrapperStyle = {
  height: '270px'
}

const ProductImageArea = styled.div`
  width: 150px;
  height: 150px;
`

const ProductDetailArea = styled.div`
  text-align: left;
  padding: 10px 10px 3px 10px;
`

const ProductBrand = styled.div`
  font-size: 12px;
  color: gray;
`

const ProductName = styled.div`
  line-height: 1.2;
  font-size: 14px;
  max-height: 29px;
`

const ProductPrice = styled.div`
  padding-top: 15px;
  font-size: 18px;
  color: #2979ff;
  font-weight: bold;
`

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

    const best = {
      slidesPerView: 'auto',
      grabCursor: true,
      autoHeight: false,
      height: 280,
      autoHeight: false,
      pagination: {
        clickable: true
      },
    }

    return (
      <div className="page-wrap">
        <Swiper {...params}>
          <div><img src="http://image.oneprice.kr/2018/0921/ca35882bda616330af0e374bbe233f43.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/c044726eaa93b2d1b6305bababb68d60.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/bfd63592329262d7694ed4871ee17fe1.jpg" /></div>
        </Swiper>
        <Section background="white">
          <Title><h4 style={{ fontWeight: 'bold' }}>베스트 아이템</h4></Title>
          <SwipeMenu>
            <Swiper {...best} >
              <StyledLink to="/" exact="true" style={ SwiperParentApp }>
                <ProductImageArea>
                  <div style={{ width: '150px', height: '150px', 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    backgroundImage: `url('https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/3260981/conversions/thumb.jpg')` }}>
                  </div>
                </ProductImageArea>
                <ProductDetailArea>
                  <ProductBrand>플레이룩</ProductBrand>
                  <ProductName>#4만장돌파 #오버핏</ProductName>
                  <ProductPrice>12,000</ProductPrice>
                </ProductDetailArea>
              </StyledLink>
            </Swiper>
          </SwipeMenu>
        </Section>
      </div>
    )
  }
}

export default Home;