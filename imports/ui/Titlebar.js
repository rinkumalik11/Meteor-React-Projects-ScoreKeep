import React from 'react';

export default class TitleBar extends React.Component {
    render(){
      return (
        <div className="title-bar">
          <div className="wrapper">
            <h1>{this.props.title}</h1>
            <h4 className="title-bar__subtitle">{this.props.subtitle}</h4>
          </div>
        </div>
      );
    }
}

TitleBar.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
};
