import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import LeftBanner from './components/LeftBanner'
import RightBanner from './components/RightBanner'

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const View = styled.div`
  background-color: white;
  max-width: 500px;
  width: 100%;
  height: 100vh;
  display: inline-block;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  overflow: auto;
`

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center', background: '#f6f6f6' }}>
          <LeftBanner />
          <View>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </View>
          <RightBanner />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
