// import React, { Component } from 'react';
// import Header from './components/Header/Header';
// import Counter from './components/Counter/Counter';
// import Form from './components/Form/Form';
// import style from './App.css';

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
            users.map(user => <UserCard key={user.id} {...user} />)}
        </ul>
    </> )
    );
  }
