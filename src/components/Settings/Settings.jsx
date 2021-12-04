import React from 'react';
import './Settings.css';

export class Settings extends React.Component {
  onChangeInput = (e) => {
    const { value } = e.target;
    this.props.onChangeBoardSize(+value);
  };

  render() {
    return (
      <label className="settings">
        board size:{' '}
        <input
          className="settins__input"
          type="number"
          onChange={this.onChangeInput}
        />
      </label>
    );
  }
}
