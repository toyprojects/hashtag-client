import React, { Component } from 'react'
import styled from 'styled-components'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

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

const SearchInput = styled.input`
  border: none;
  color: #222;
  font-size: 13px;
  font-weight: 100;
  width: 90%;
`

class Search extends Component {
  render() {
    return (
      <div>
        <SearchContainer>
          <SearchBar>
            <SearchInput placeholder="검색어를 입력하세요" />
            <span style={{ float: 'right' }}><FontAwesomeIcon icon="search" style={{ cursor: 'pointer' }} /></span>
          </SearchBar>
        </SearchContainer>
      </div>
    )
  }
}

export default Search;