import React from 'react';

import TitleBar from './Titlebar';
import AddPlayer from './Addform';
import PlayerList from './Playerlist';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created using Meteor"/>
        <div className="wrapper">
          <PlayerList players={this.props.players}/>
          <AddPlayer/>
        </div>
      </div>
    );
  }
};

App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired
};
