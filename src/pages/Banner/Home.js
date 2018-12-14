import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import LinesEllipsis from 'react-lines-ellipsis'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import '../../assets/css/page.css'
import '../../assets/css/swiper.css'

// Category Images
import CategoryAll from '../../assets/images/category/menu.png'
import CategoryHighHeel from '../../assets/images/category/high-heel.png'
import CategoryTShirt from '../../assets/images/category/tshirt.png'
import CategoryDress from '../../assets/images/category/dresses.png'
import CategoryJacket from '../../assets/images/category/jacket.png'
import CategoryPants from '../../assets/images/category/pants.png'
import CategoryPadding from '../../assets/images/category/padding.png'
import CategoryMan from '../../assets/images/category/man.png'

import ActiveTabArrow from '../../assets/images/down-arrow.png'


const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  background: ${props => props.background && props.background};
`

const Title = styled.div`
  padding-left: 20px;
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
  marginLeft: '20px'
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
  padding: 10px 3px;
  display: inline-block;
  width: calc(100% - 40px);
`

const CategoryRow = styled.div`
  display: inline-block;
  width: 25%;
  float: left;
`

const CategoryMenu = styled.div`
  margin-top: 10px;
`

const CategoryMenuIcon = {
  display: 'inline-block',
  width: '50px',
  height: '40px',
  textAlign: 'center',
  verticalAlign: 'middle'
}

const GrayLine = styled.div`
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 10px;
    background-color: #eee;
  }
`

const CategoryMenuName = {
  display: 'block',
  marginTop: '4px',
  fontSize: '11px'
}

const isTop = {
  borderBottom: '1px solid #eee',
  paddingBottom: '10px'
}

const StyledTabList = styled(TabList)`
  margin: 0;
  padding: 0;
  list-style: none;
  padding-bottom: 65px;
`

const StyledTab = styled(Tab)`
  width: 31.33%;
  position: relative;
  float: left;
  border-radius: 25px;
  border: 1px solid #999;
  color: #999;
  font-size: 15px;
  padding: 7px 5px 7px 5px;
  font-weight: 500;
  cursor: pointer;

  &.react-tabs__tab--selected {
    border-radius: 25px;
    border-color: #2979ff;
    color: #2979ff;

    &::after {
      content: "";
      background-image: url(${ActiveTabArrow});
      position: absolute;
      background-repeat: no-repeat;
      bottom: -53px;
      left: 44%;
      width: 100px;
      height: 50px;
      background-size: 18px;
    }
  }
`

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  &.react-tabs__tab-panel--selected {
    display: inline-block;
  }
`

const ItemWrap = styled.div`
  width: 50%;
  padding: 0 5px;
  margin-bottom: 30px;
  float: left;
`

const ItemThumbnail = styled.div`
  width: 100%;
`

const ItemDetail = styled.div`
  text-align: left;
  padding: 12px 0 0;
  height: 120px;
`

const ItemBrand = styled.p`
  color: #999;
  font-size: 13px;
  width: 100%;
  margin-bottom: -3px;
`

const ItemName = styled.div`
  width: 100%;
  height: 35px;
  margin: 5px 0 10px;
  padding-right: 17px;
  display: block;
  display: -webkit-box;
  max-height: 45px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: 400;
  color: #000;
`

const ItemOriginalPrice = styled.div`
  font-size: 10px;
  height: 12px;
  color: #bbb;
  text-decoration: line-through;
`

const ItemDeelPrice = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #2979ff;
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
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryJacket } />
                </span>
                <span style={ CategoryMenuName }>코트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryPants } />
                </span>
                <span style={ CategoryMenuName }>팬츠</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryPadding } />
                </span>
                <span style={ CategoryMenuName }>패딩</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryHighHeel } />
                </span>
                <span style={ CategoryMenuName }>슈즈</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryTShirt } />
                </span>
                <span style={ CategoryMenuName }>니트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryMan } />
                </span>
                <span style={ CategoryMenuName }>남성의류</span>
              </CategoryMenu>
            </CategoryRow>
            <CategoryRow>
              <CategoryMenu style={ isTop }>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryDress } />
                </span>
                <span style={ CategoryMenuName }>스커트</span>
              </CategoryMenu>
              <CategoryMenu>
                <span style={ CategoryMenuIcon }>
                  <img style={{ width: '29px' }} src={ CategoryAll } />
                </span>
                <span style={ CategoryMenuName }>전체보기</span>
              </CategoryMenu>
            </CategoryRow>
          </CategoryArea>
        </Section>
        <GrayLine />
        <Section background="transparent" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
          <Tabs>
            <StyledTabList>
              <StyledTab>오늘특가</StyledTab>
              <StyledTab style={{ marginLeft: '3%', marginRight: '3%' }}>오늘베스트</StyledTab>
              <StyledTab>오늘신상</StyledTab>
            </StyledTabList>

            <StyledTabPanel>
              <ItemWrap>
                <ItemThumbnail> 
                  <img style={{ width: '217px' }}
                    src="https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/4111339/conversions/thumb.jpg" />
                </ItemThumbnail>
                <ItemDetail>
                  <ItemBrand>메이블</ItemBrand>
                  <ItemName>추천♥크리스마스 커플룩 니트 2~3만원대 특가전!</ItemName>
                  <ItemOriginalPrice><span>35,000</span></ItemOriginalPrice>
                  <ItemDeelPrice><span>20%</span> 33,250</ItemDeelPrice>
                </ItemDetail>
              </ItemWrap>
              <ItemWrap>
                <ItemThumbnail> 
                  <img style={{ width: '217px' }}
                    src="https://s3.ap-northeast-2.amazonaws.com/storage.b-flow.io/4111339/conversions/thumb.jpg" />
                </ItemThumbnail>
                <ItemDetail>
                  <ItemBrand>메이블</ItemBrand>
                  <ItemName>추천♥크리스마스 커플룩 니트 2~3만원대 특가전!</ItemName>
                  <ItemOriginalPrice><span>35,000</span></ItemOriginalPrice>
                  <ItemDeelPrice><span>20%</span> 33,250</ItemDeelPrice>
                </ItemDetail>
              </ItemWrap>
            </StyledTabPanel>

            <StyledTabPanel>
              <h2>오늘베스트</h2>
            </StyledTabPanel>

            <StyledTabPanel>
              <h2>오늘신상</h2>
            </StyledTabPanel>
          </Tabs>
        </Section>
        <GrayLine />
        <Section background="transparent">
          <Title><h4 style={{ fontWeight: 'bold' }}>베스트 아이템</h4></Title>
          <SwipeMenu>
            <Swiper {...best} >
              <div style={{ paddingBottom: '37px' }}>
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
              </div>
            </Swiper>
          </SwipeMenu>
        </Section>
      </div>
    )
  }
}

export default Home;