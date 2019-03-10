import React, { Component } from 'react';
import PollItem from './PollItem';

class TabContainer extends Component {
  render() {
    return (
      <div>
        <PollItem></PollItem>
        <PollItem></PollItem>
        <PollItem></PollItem>
        <PollItem></PollItem>
      </div>
    );
  }
}

export default TabContainer;
