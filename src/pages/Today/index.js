import React, { Component } from 'react'
import { TodayRanking, TodayNew, TodayReward, TodayBenefit, TodayBasket, TodayEvent } from '../';

import HomeMenu from '../../components/HomeMenu'

class Today extends Component {

  componentDidMount() {
    console.log('today component did mount')
  }

  render() {

    return(
      <div>

        <HomeMenu />

        {
              (() => {

                if (this.props.match.params.title === 'ranking')
                  return <TodayRanking />
                else if (this.props.match.params.title === 'new') 
                  return <TodayNew />
                else if (this.props.match.params.title == 'reward')
                  return <TodayReward />
                else if (this.props.match.params.title === 'benefit')
                  return <TodayBenefit />
                else if (this.props.match.params.title === 'basket')
                  return <TodayBasket />
                else if (this.props.match.params.title === 'event')
                  return <TodayEvent />
                else
                  return false
              })()

        }
      </div>
    )
  }
}

export default Today;