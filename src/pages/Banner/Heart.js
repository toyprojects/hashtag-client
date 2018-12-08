import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../../assets/css/page.css'
import 'react-tabs/style/react-tabs.css'

const TabMenuForm = styled(Tabs)`
  /* border-bottom: 1px solid #eee; */
  margin-top: 70px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  /* height: 40px; */
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
`

const View = styled.div`
  background-color: white;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  display: inline-block;
  overflow: auto;
`

const StyledTab = styled(Tab)`
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
  margin-left: 20px;

  &:hover {
    color: black;
    text-decoration: none;
  }

  &.react-tabs__tab--selected {
    color: #2979ff;
    font-weight: bold;
    border-bottom: 2px solid #2979ff;
  }
`

class Heart extends Component {
  render() {
    return (
      <div>
        <TabMenuForm>
          <TabList style={{ borderBottom: 'none', textAlign: 'left', height: '40px', borderBottom: '1px solid #eee' }}>
            <StyledTab>피드</StyledTab>
            <StyledTab>하트</StyledTab>
            <StyledTab>최근본</StyledTab>
          </TabList>
        
          <View>
            <TabPanel>
              <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel>
          </View>
        </TabMenuForm>
      </div>
    )
  }
}

export default Heart;