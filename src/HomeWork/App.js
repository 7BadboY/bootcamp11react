import React, { Component } from 'react';
import UserCard from './UserCard(hw1)/UserCard';
import StatisticSection from './StatisticSection(hm2)/StatisticSection';
import PricingPlan from './PricingPlan(hw3)/PricingPlan';
import PricingItems from './PricingPlan(hw3)/pricing-plan';
import transactions from './TransactionHistory(hw4)/transactions';
import TransactionHistory from './TransactionHistory(hw4)/TransactionHistory';


class App extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        name: 'Jacques Gluke',
        tag: '@jgluke',
        location: 'Ocho Rios, Jamaica',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
        stats: {
          followers: 5603,
          views: 4827,
          likes: 1308,
        },
      stats: [
          { id: 'id-1', label: '.docx', percentage: 22 },
          { id: 'id-2', label: '.pdf', percentage: 4 },
          { id: 'id-3', label: '.mp3', percentage: 17 },
          { id: 'id-4', label: '.psd', percentage: 47 },
          { id: 'id-5', label: '.pdf', percentage: 10 },
        ]

      }
    }
  }
  render () {
    const { user, stats } = this.state;
    return (
      <>
        <UserCard {...user} />
        <StatisticSection stats={stats} />
        <PricingPlan plan={PricingItems} />
        <TransactionHistory transactions={transactions} />
    </>
  )
}
}

export default App;
