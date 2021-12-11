import React from 'react';
import './Settings.css';

export class Settings extends React.Component {
  onChangeInput = (e) => {
    const { value } = e.target;
    this.props.onChangeBoardSize(Math.max(3, +value));
  };

  render() {
    return (
      <label className="settings">
        board size:{' '}
        <input
          className="settins__input"
          type="number"
          disabled={this.props.isDisabled}
          onChange={this.onChangeInput}
        />
      </label>
    );
  }
}
