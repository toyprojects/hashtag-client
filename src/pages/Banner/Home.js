import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import LinesEllipsis from 'react-lines-ellipsis'
import '../../assets/css/page.css'
import '../../assets/css/swiper.css'


const Section = styled.div`
  /* padding: 32px 0 32px 30px; */
  padding-top: 32px;
  background: ${props => props.background && props.background};
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

const ProductImageArea = styled.div`
  width: 150px;
  height: 150px;
`

const ProductDetailArea = styled.div`
  text-align: left;
  padding: 10px 10px 3px 10px;
  width: 150px;
`

const ProductBrand = styled.div`
  font-size: 12px;
  color: gray;
`

const ProductName = styled(LinesEllipsis)`
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

const CategoryArea = styled.div`
  padding: 10px 20px;
  display: inline-block;
  width: calc(100% - 40px);
`

const CategoryRow = styled.div`
  display: inline-block;
  width: 25%;
  float: left;
`

const CategoryMenu = styled.div`
  margin-top: 5px;
`

const CategoryMenuIcon = {
  display: 'inline-block',
  width: '50px',
  height: '40px',
  textAlign: 'center',
  verticalAlign: 'middle'
}

const CategoryMenuName = {
  display: 'block',
  marginTop: '4px',
  fontSize: '11px'
}

const isTop = {
  borderBottom: '1px solid #eee',
  paddingBottom: '10px'
}

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
      pagination: {
        clickable: true
      },
    }
    
    // dummy datas
    const Items = [
      {
        brand: '플레이룩',
        title: '#4만장_돌파 #오버핏',
        price: 12000,
        image: 'https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/3260981/conversions/thumb.jpg'
      }, {
        brand: '마롱시크',
        title: '#고퀄 #핸드메이드 #코트',
        price: 219000,
        image: 'https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/3352871/conversions/thumb.jpg'
      }, {
        brand: '베리워니',
        title: '#무료배송 #볼륨_숏패딩',
        price: 39900,
        image: 'https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/3550168/conversions/thumb.jpg'
      }
    ]

    return (
      <div className="page-wrap">
        <Swiper {...params}>
          <div><img src="http://image.oneprice.kr/2018/0921/ca35882bda616330af0e374bbe233f43.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/c044726eaa93b2d1b6305bababb68d60.jpg" /></div>
          <div><img src="http://image.oneprice.kr/2018/1023/bfd63592329262d7694ed4871ee17fe1.jpg" /></div>
        </Swiper>
        <Section background="white">
          <CategoryArea>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>1</span>
                <span style={ CategoryMenuName }>코트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>2</span>
                <span style={ CategoryMenuName }>팬츠</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQzMy43NzYgNDMzLjc3NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDMzLjc3NiA0MzMuNzc2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPHBhdGggZD0iTTM5Mi40MTMsMjMwLjE1OGM3LjA5NC0xMC4zNTQsMTAuODMtMjIuMzY2LDEwLjgzLTM1LjAyNWMwLTEzLjExLTQuMDA2LTI1LjUyOC0xMS42LTM2LjEyNiAgYzE1LjU1Ny0zNS4wMjIsMC40MTktNzYuNDAzLTM0LjM4Ni05Mi45N2MtMC4wOC0wLjAzOC0wLjE2MS0wLjA3NC0wLjI0Mi0wLjEwOUwyOTUuODksNDAuMDg2YzAuMTU0LTEuNjUxLDAuMjQtMy4zMTgsMC4yNC01ICBjMC0xMi4wMzUtMy45NzgtMjMuMzg2LTExLjUwNC0zMi44MjZDMjgzLjQ4OCwwLjgzMSwyODEuNzYxLDAsMjc5LjkzNSwwSDE1My44NDFjLTEuODI2LDAtMy41NTMsMC44MzEtNC42OTEsMi4yNiAgYy03LjUyNiw5LjQ0MS0xMS41MDQsMjAuNzkyLTExLjUwNCwzMi44MjZjMCwxLjY4MiwwLjA4NiwzLjM0OSwwLjI0LDVMNzYuNzYxLDY1LjkyOGMtMC4wODIsMC4wMzUtMC4xNjIsMC4wNzEtMC4yNDIsMC4xMDkgIGMtMzQuODA1LDE2LjU2Ny00OS45NDIsNTcuOTQ5LTM0LjM4Niw5Mi45N2MtNy41OTQsMTAuNTk4LTExLjYsMjMuMDE3LTExLjYsMzYuMTI2YzAsMTIuNjU5LDMuNzM2LDI0LjY3MSwxMC44MywzNS4wMjUgIGMtNy4wOTQsMTAuMzUyLTEwLjgzLDIyLjM2Ni0xMC44MywzNS4wMjZjMCwxMi42NTksMy43MzYsMjQuNjcyLDEwLjgzLDM1LjAyNWMtNy4wOTQsMTAuMzU0LTEwLjgzLDIyLjM2Ny0xMC44MywzNS4wMjUgIGMwLDEyLjI4OCwzLjUxOCwyMy45NjksMTAuMjEyLDM0LjExNGMtMy42OTksOC4xMjMtNS41OTgsMTYuOC01LjU5OCwyNS44MzVjMCwzLjMxNCwyLjY4Nyw2LDYsNmg1MS45NzJ2MjYuNTkyYzAsMy4zMTQsMi42ODcsNiw2LDYgIGgyMzYuNzY2YzEuNTkxLDAsMy4xMTgtMC42MzIsNC4yNDMtMS43NTdjMS4xMjUtMS4xMjUsMS43NTctMi42NTIsMS43NTctNC4yNDNsLTAuMDAyLTI2LjU5MWg1MC43NDVjMy4zMTMsMCw2LTIuNjg2LDYtNiAgYzAtOS4wMzYtMS44OTgtMTcuNzEyLTUuNTk4LTI1LjgzNWM2LjY5NC0xMC4xNDUsMTAuMjEyLTIxLjgyNiwxMC4yMTItMzQuMTE0YzAtMTIuNjU5LTMuNzM2LTI0LjY3Mi0xMC44My0zNS4wMjUgIGM3LjA5NC0xMC4zNTQsMTAuODMtMjIuMzY3LDEwLjgzLTM1LjAyNUM0MDMuMjQyLDI1Mi41MjQsMzk5LjUwNywyNDAuNTExLDM5Mi40MTMsMjMwLjE1OHogTTM4Mi4yNTYsMzYzLjg0OGgtMzguNjA0ICBjMS44MzctNS4zOTUsMi43ODgtMTEuMDkyLDIuNzg4LTE2Ljk1M2MwLTEwLjQ4NC0zLjAyMS0yMC40NDktOC43NzctMjkuMDg2YzIuMzkzLTMuNTksNC4zMDktNy40MTEsNS43MzYtMTEuNDAyaDM4LjcwNiAgYzUuOTgyLDguNDg1LDkuMTM4LDE4LjM4NSw5LjEzOCwyOC44MjhDMzkxLjI0MiwzNDUuNTksMzg4LjE0LDM1NS40MTIsMzgyLjI1NiwzNjMuODQ4eiBNNTEuNTIsMzYzLjg0OCAgYy01Ljg4NC04LjQzNy04Ljk4Ni0xOC4yNTgtOC45ODYtMjguNjEzYzAtMTAuNTI0LDMuMjAzLTIwLjQ5Nyw5LjI3Ni0yOS4wMjVoMzkuODgyYzEuNDM0LDQuMDYzLDMuMzc3LDcuOTUsNS44MSwxMS42ICBjLTUuNzU1LDguNjM3LTguNzc3LDE4LjYwMi04Ljc3NywyOS4wODZjMCw1Ljg2MSwwLjk1MSwxMS41NTgsMi43ODgsMTYuOTUzSDUxLjUyeiBNNTEuODEsMTY2LjEwNmgzNy4yODggIGMtMC4yNDMsMi4wNjYtMC4zNzMsNC4xNTktMC4zNzMsNi4yNzNjMCwxMC40ODUsMy4wMjIsMjAuNDUsOC43NzYsMjkuMDg2Yy00LjY0NSw2Ljk3LTcuNSwxNC44MDktOC40MzIsMjMuMDg2SDUyLjA4NSAgYy02LjI1NS04LjYxMy05LjU1MS0xOC43MzMtOS41NTEtMjkuNDE4QzQyLjUzMywxODQuNjA4LDQ1LjczNiwxNzQuNjM0LDUxLjgxLDE2Ni4xMDZ6IE0zODEuOTY2LDE2Ni4xMDYgIGM2LjA3Myw4LjUyOCw5LjI3NiwxOC41MDMsOS4yNzYsMjkuMDI3YzAsMTAuNjg0LTMuMjk2LDIwLjgwNS05LjU1MSwyOS40MThoLTM1LjU5NmMtMC45MzItOC4yNzctMy43ODctMTYuMTE2LTguNDMyLTIzLjA4NiAgYzUuNzU0LTguNjM2LDguNzc2LTE4LjYwMSw4Ljc3Ni0yOS4wODZjMC0yLjExNS0wLjEzLTQuMjA4LTAuMzczLTYuMjczSDM4MS45NjZ6IE0zODEuODI4LDI5NC40MDdoLTM1LjcgIGMwLjItMS44NzUsMC4zMTItMy43NjksMC4zMTItNS42ODRjMC0xMC40ODUtMy4wMjItMjAuNDUtOC43NzYtMjkuMDg2YzQuNjQ1LTYuOTcsNy41LTE0LjgwOSw4LjQzMi0yMy4wODZoMzYuMTQ2ICBjNS44OTMsOC40NCw5LjAwMSwxOC4yNjksOS4wMDEsMjguNjMzQzM5MS4yNDIsMjc1Ljc4OSwzODcuOTkyLDI4NS44MzUsMzgxLjgyOCwyOTQuNDA3eiBNMzI3LjIyNCwyMDcuNDY1ICBjNC43MjUsNi44MTQsNy4yMTUsMTQuNzM2LDcuMjE1LDIzLjA4NmMwLDguMzUtMi40OTEsMTYuMjcyLTcuMjE1LDIzLjA4NkgxMDcuOTRjLTQuNzI1LTYuODE0LTcuMjE1LTE0LjczNi03LjIxNS0yMy4wODYgIGMwLTguMzUsMi40OTEtMTYuMjcyLDcuMjE1LTIzLjA4NkgzMjcuMjI0eiBNMTA3Ljk0LDMxMS44MDljLTQuNzI1LTYuODE0LTcuMjE1LTE0LjczNi03LjIxNS0yMy4wODYgIGMwLTguMzUsMi40OTEtMTYuMjcyLDcuMjE1LTIzLjA4NmgyMTkuMjg0YzQuNzI1LDYuODE0LDcuMjE1LDE0LjczNiw3LjIxNSwyMy4wODZjMCw4LjM1LTIuNDkxLDE2LjI3Mi03LjIxNSwyMy4wODZIMTA3Ljk0eiAgIE0zMjcuMjI0LDE0OS4yOTNjNC43MjUsNi44MTQsNy4yMTUsMTQuNzM2LDcuMjE1LDIzLjA4NmMwLDguMzUtMi40OTEsMTYuMjcyLTcuMjE1LDIzLjA4NkgxMDcuOTQgIGMtNC43MjUtNi44MTQtNy4yMTUtMTQuNzM2LTcuMjE1LTIzLjA4NmMwLTguMzUsMi40OTEtMTYuMjcyLDcuMjE1LTIzLjA4NkgzMjcuMjI0eiBNNTEuNTM0LDIzNi41NTFIODkuMDcgIGMwLjkzMiw4LjI3NywzLjc4NywxNi4xMTYsOC40MzIsMjMuMDg2Yy01Ljc1NCw4LjYzNi04Ljc3NiwxOC42MDEtOC43NzYsMjkuMDg2YzAsMS44NDcsMC4xMDUsMy42NzYsMC4yOTEsNS40ODZINTEuODEgIGMtNi4wNzMtOC41MjgtOS4yNzYtMTguNTAxLTkuMjc2LTI5LjAyNUM0Mi41MzMsMjU0LjgyLDQ1LjY0MSwyNDQuOTkxLDUxLjUzNCwyMzYuNTUxeiBNMTA3Ljk0MSwzNjkuOTgzICBjLTQuNzI1LTYuODE0LTcuMjE2LTE0LjczNy03LjIxNi0yMy4wODhjMC04LjM0OCwyLjQ5MS0xNi4yNyw3LjIxNi0yMy4wODZoMjE5LjI4M2M0LjcyNSw2LjgxNiw3LjIxNiwxNC43MzgsNy4yMTYsMjMuMDg2ICBjMCw4LjM1MS0yLjQ5MSwxNi4yNzQtNy4yMTYsMjMuMDg4SDEwNy45NDF6IE04MS41NTksNzYuOTI3bDU4Ljg3My0yNC44OWMxLjkzNiw1LjY4NCw0Ljg1NSwxMS4wMzMsOC43MTcsMTUuODc1ICBjMi4wNjYsMi41OTEsNS44NDEsMy4wMTcsOC40MzIsMC45NWMyLjU5MS0yLjA2NiwzLjAxNy01Ljg0MSwwLjk1LTguNDMyYy01LjgxMy03LjI5MS04Ljg4Ni0xNi4wNTUtOC44ODYtMjUuMzQ1ICBjMC00LjY4NywwLjc4My05LjI0MSwyLjMwNS0xMy41MzljMy43MTQsNS4zNTgsOS44MzMsOC45MTEsMTYuNzgzLDkuMTExYzAuMjAyLDAuMDIxLDAuNDA3LDAuMDMxLDAuNjE0LDAuMDMxaDMzLjU0NSAgYzQuMzQyLDAsNy44NzUsMy41MzIsNy44NzUsNy44NzNjMCwwLjMxOSwwLjAzMiwwLjYzLDAuMDgsMC45MzVWOTIuMTVjMCwzLjMxMywyLjY4Niw2LDYsNmMzLjMxMywwLDYtMi42ODcsNi02VjM5LjQ5OCAgYzAuMDQ4LTAuMzA1LDAuMDgtMC42MTYsMC4wOC0wLjkzNWMwLTQuMzQxLDMuNTMzLTcuODczLDcuODc1LTcuODczaDMzLjU0NWMwLjIwNywwLDAuNDEyLTAuMDExLDAuNjE0LTAuMDMxICBjNi45ODItMC4yMDIsMTMuMTI4LTMuNzg0LDE2LjgzNy05LjE4NGMxLjUzOSw0LjMyLDIuMzMxLDguODk4LDIuMzMxLDEzLjYxMWMwLDkuMjkxLTMuMDczLDE4LjA1NS04Ljg4NiwyNS4zNDUgIGMtMi4wNjYsMi41OTEtMS42NDEsNi4zNjYsMC45NSw4LjQzMmMxLjEwNSwwLjg4MSwyLjQyNSwxLjMwOSwzLjczNywxLjMwOWMxLjc2MywwLDMuNTEtMC43NzMsNC42OTUtMi4yNTkgIGMzLjg2Mi00Ljg0Miw2Ljc4Mi0xMC4xOTEsOC43MTctMTUuODc1bDU4Ljg3NCwyNC44OWMyOC44MzEsMTMuODAxLDQxLjM2Myw0OC4xMTksMjguNDc3LDc3LjE3OWgtMzcuNTE2ICBjLTEuNTIxLTQuMDk2LTMuNTYzLTguMDA2LTYuMTA2LTExLjY2N2MyLjYzLTMuNzk1LDQuNzUyLTcuODk1LDYuMzA3LTEyLjIzN2MxLjExNy0zLjEyLTAuNTA2LTYuNTU1LTMuNjI2LTcuNjcyICBjLTMuMTE4LTEuMTE1LTYuNTU0LDAuNTA2LTcuNjcyLDMuNjI2Yy0xLjQzNCw0LjAwNS0zLjQ5MSw3Ljc0Ni02LjEwNiwxMS4xMzhIMTA5LjE5MWMtMi42MTUtMy4zOTMtNC42NzItNy4xMzMtNi4xMDYtMTEuMTM4ICBjLTEuMTE4LTMuMTE5LTQuNTUtNC43NDEtNy42NzItMy42MjZjLTMuMTIsMS4xMTctNC43NDMsNC41NTItMy42MjYsNy42NzJjMS41NTUsNC4zNDMsMy42NzcsOC40NDIsNi4zMDcsMTIuMjM3ICBjLTIuNTQzLDMuNjYyLTQuNTg2LDcuNTcxLTYuMTA2LDExLjY2N0g1My4wODJDNDAuMTk2LDEyNS4wNDYsNTIuNzI4LDkwLjcyOSw4MS41NTksNzYuOTI3eiBNNTAuOTg2LDM3NS44NDhoMzQuMjc2bC03LjU2NSwxMy4zMzYgIEg0Ny40OTVDNDguMDMzLDM4NC41ODIsNDkuMjA4LDM4MC4xMjQsNTAuOTg2LDM3NS44NDh6IE0yMjIuODQ4LDQyMS43NzZ2LTkuMTc4YzAtMy4zMTQtMi42ODctNi02LTZjLTMuMzE0LDAtNiwyLjY4Ni02LDZ2OS4xNzggIEgxMDUuMTE5di0yMC44NzFjMC02LjU4NiwxLjI0NS0xMi45MzIsMy42NzQtMTguOTIySDMyNi4yMWMyLjQyOSw1Ljk5MSwzLjY3MywxMi4zMzcsMy42NzMsMTguOTIybDAuMDAxLDIwLjg3MUgyMjIuODQ4eiAgIE0zNTYuMDc4LDM4OS4xODRsLTcuNTY1LTEzLjMzNmgzNC4yNzZjMS43NzgsNC4yNzYsMi45NTMsOC43MzQsMy40OTIsMTMuMzM2SDM1Ni4wNzh6IiBmaWxsPSIjMDAwMDAwIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                </span>
                <span style={ CategoryMenuName }>패딩</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNjEuNzYxIDYxLjc2MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEuNzYxIDYxLjc2MTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00NS42NTUsNDMuNzE4YzAsMC0wLjAzOCwwLjA0LTAuMTA3LDAuMTA3Yy0zLjk2NS0xLjU4Ny04LjM5LTAuNDIyLTExLjg1MS0zLjUyN2MtMy40OTgtMy4xMzctNi4xMzktOC4wNTktOS4wMzQtMTEuNzgzICAgIGMtMy4xODUtNC4xLTYuNDY5LTguMTIyLTkuODA3LTEyLjA5N2MtMi4zNzUtMi44MjYtNC41NTMtNi4wOTctNy42LTguMjM5QzYuODI1LDcuMzMzLDYuNDM1LDYuOTgyLDUuNzQzLDcuNDgxICAgIGMtMC4zMiwwLjA3Mi0wLjU2NywwLjMyOC0wLjY3LDAuNjRjLTAuMzkzLDAuNDQ1LTAuODYxLDEuMDcxLTEuNDQxLDEuOTE3Yy0zLjk0NCw1Ljc2NS00LjU1MSwxMC43NzEtMi40MjcsMTYuNTM3ICAgIGMyLjEyNCw1Ljc2NSwxLjY2OSwyNi4wOTQsMS42NjksMjYuMDk0czAuOTExLDEuMjEzLDEuODIxLDAuNjA2YzAuOTExLTAuNjA2LTEuMjEzLTE5Ljg3NCwwLjQ1Ni0yMi4xNSAgICBjMCwwLDcuMTMtMy45NDUsMTMuMTk5LDkuNTU4YzYuMDY5LDEzLjUwMiw4Ljk1MSwxMy44MDUsMTMuMTk5LDEzLjgwNWM0LjI0OSwwLDE2LjY4OSwwLjMwNCwyNS43OTEtMS4zNjYgICAgQzY2LjQ0MSw1MS40NTQsNjAuOTc5LDQ4LjExNyw0NS42NTUsNDMuNzE4eiBNMzEuODUxLDQ1Ljk5M2MtNS40NjItNi4zNzItMTguNjYxLTI4LjM3LTIxLjk5OC0zMi45MjEgICAgYy0wLjA2MS0wLjA4Mi0wLjExNy0wLjE2NS0wLjE3NC0wLjI0N2MxLjc5LDIuMDA4LDMuMzg0LDQuMjc3LDUuMDAyLDYuMjAzYzQuMDI2LDQuNzkzLDcuOTA2LDkuNzA5LDExLjcwNywxNC42ODEgICAgYzIuMjUzLDIuOTQ3LDQuMTk1LDYuMjM3LDYuOTczLDguNzI4YzMuMDU1LDIuNzQxLDcuMDUxLDEuNjc3LDEwLjYzMywyLjc1M0M0MS4yOCw0Ny4zMzksMzUuODA5LDUwLjYxMiwzMS44NTEsNDUuOTkzeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
                </span>
                <span style={ CategoryMenuName }>슈즈</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>5</span>
                <span style={ CategoryMenuName }>니트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>6</span>
                <span style={ CategoryMenuName }>남성의류</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>7</span>
                <span style={ CategoryMenuName }>스커트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>8</span>
                <span style={ CategoryMenuName }>전체보기</span>
              </CategoryMenu>
            </CategoryRow>
          </CategoryArea>
        </Section>
        <Section background="transparent">
          <Title><h4 style={{ fontWeight: 'bold' }}>베스트 아이템</h4></Title>
          <SwipeMenu>
            <Swiper {...best} >
              { Items.map((item, index) => { return (
                <StyledLink to="/" exact="true" style={ SwiperParentApp }>
                  <ProductImageArea>
                    <div style={{ width: '150px', height: '150px', 
                      backgroundRepeat: 'no-repeat', 
                      backgroundSize: 'cover', 
                      backgroundImage: `url(${ item.image })` }}>
                    </div>
                  </ProductImageArea>
                  <ProductDetailArea>
                    <ProductBrand>{ item.brand }</ProductBrand>
                    <ProductName 
                      text={ item.title }
                      maxLine="1"
                      ellipsis=".."
                      basedOn="letters"
                    />
                    <ProductPrice>{ item.price.toLocaleString(navigator.language, { minimumFractionDigits: 0 }) }</ProductPrice>
                  </ProductDetailArea>
                </StyledLink>
              ) }) }
            </Swiper>
          </SwipeMenu>
        </Section>
      </div>
    )
  }
}

export default Home;