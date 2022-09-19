import React from 'react';
import './Settings.css';

export class Settings extends React.Component {
  onChangeInput = (e) => {
    const { value } = e.target;
    this.props.onChangeBoardSize(Math.max(6, +value));
  };

  render() {
    return (
      <label className="settings">
        board size:{' '}
        <input
          className="settins__input"
          type="number"
          min="6"
          disabled={this.props.isDisabled}
          onChange={this.onChangeInput}
        />
      </label>
    );
  }
}
