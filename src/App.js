import React, { Component } from 'react';
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import Form from './components/Form/Form';
import style from './App.css';
import UserCard from './components/UserCard(hw1)/UserCard';
import StatisticSection from './components/StatisticSection(hm2)/StatisticSection';
import PricingPlan from './components/PricingPlan(hw3)/PricingPlan';
import PricingItems from './components/PricingPlan(hw3)/pricing-plan';
import transactions from './components/TransactionHistory(hw4)/transactions';
import TransactionHistory from './components/TransactionHistory(hw4)/TransactionHistory';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      logoTitle: 'BadboY Fixing Room',
      count: 0,
      users: [],
    };
  }

  onIncrement = () => {
    // this.setState({
    //   count: this.state.count + 1
    // });
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  onDecrement = () => {
    if (this.state.count > 0)
      // this.setState({
      //   count: this.state.count - 1,
      // });
      this.setState(prevState => {
        return {
          count: prevState.count - 1,
        };
      });
  };

  onSubmit = data => {
    const { users } = this.state;
    const newUsers = [...users];
    const userData = data;
    userData.id = new Date().getTime();
    newUsers.push(data);

    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { logoTitle, count, users } = this.state;

    return (
      <>
        <Header logoTitle={logoTitle} logged="true" />
        <div className={style.main__container}>
          <h1 className="main__title">My React</h1>
        </div>
        <Counter
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          count={count}
        />
        <Form onSubmit={this.onSubmit} />
        <ul>
          {users.length > 0 &&
            users.map(users => <UserCard key={users.id} {...users} />)}
        </ul>
        <UserCard {...user} />
        <StatisticSection stats={stats} />
        <PricingPlan plan={PricingItems} />
        <TransactionHistory transactions={transactions} />
      </>
    );
  }
}

export default App;
