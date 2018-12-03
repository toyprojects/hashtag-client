import React, { Component } from 'react'
import { Route, HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import styled from 'styled-components'
import LeftBanner from './components/LeftBanner'
import RightBanner from './components/RightBanner'
import BounceLoader from 'react-spinners/BounceLoader';

import routes from './routes'

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

const override = {
  margin: '0 auto',
  marginTop: '50%'
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }

  render() {
    return (
      <HashRouter>
        <div style={{ textAlign: 'center', background: '#f6f6f6' }}>
          <LeftBanner />
          <View>
            <BounceLoader
              className={override}
              sizeUnit={"px"}
              size={150}
              color={'#2979ff'}
              loading={this.state.loading}
            />
            <Switch>
              { routes.map(route => <Route key={route.path} {... route} />) }
            </Switch>
          </View>
          <RightBanner />
        </div>
      </HashRouter>
    );
  }
}

export default App;
