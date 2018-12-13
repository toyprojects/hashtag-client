import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Swiper from 'react-id-swiper'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

const SwipeMenu = styled.div`
  border-bottom: 1px solid #eee;
  margin-top: 15px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  height: 40px;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`

const StyledLink = styled(NavLink)`
  width: auto;
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

  &:hover {
    color: black;
    text-decoration: none;
  }

  &.active {
    color: #2979ff;
    font-weight: bold;
    border-bottom: 2px solid #2979ff;
  }
`

const SwiperParentApp = {
  width: 'auto',
  display: 'inline-block',
  marginLeft: '33px'
}

const SearchContainer = styled.div`
  padding-top: 20px;
  text-align: left;
`

const SearchBar = styled.div`
  width: 87%;
  border: 1px solid #ccc;
  height: 40px;
  border-radius: 20px;
  padding: 0 20px 0 20px;
  margin: 0 auto;
  line-height: 35px;
  font-size: 13px;
  color: #222;
  font-weight: 100;
`

class HomeMenu extends Component {
  handleSearchClick = () => {
    this.props.history.push('/search')
  }

  render() {
    const params = {
      slidesPerView: 'auto',
      grabCursor: true,
      pagination: {
        clickable: true
      },
    };
    return (
      <div>
        <SearchContainer onClick={ this.handleSearchClick }>
          <SearchBar>
            <span>원하는 검색어로 최저가 상품들을 !</span>
            <span style={{ float: 'right' }}><FontAwesomeIcon icon="search" style={{ cursor: 'pointer' }} /></span>
          </SearchBar>
        </SearchContainer>
        <SwipeMenu>
          <Swiper {...params}>
            <StyledLink to="/" exact="true" style={ SwiperParentApp }>
              <div className="inner-slide-content">홈</div>
            </StyledLink>
            <StyledLink to="/today/ranking" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘랭킹</div>
            </StyledLink>
            <StyledLink to="/today/new" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘신상</div>
            </StyledLink>
            <StyledLink to="/today/reward" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘리워드</div>
            </StyledLink>
            <StyledLink to="/today/benefit" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘혜택</div>
            </StyledLink>
            <StyledLink to="/today/basket" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘찜순위</div>
            </StyledLink>
            <StyledLink to="/today/event" style={ SwiperParentApp }>
              <div className="inner-slide-content">오늘이벤트</div>
            </StyledLink>
          </Swiper>
        </SwipeMenu>
      </div>
    )
  }
}

export default HomeMenu;