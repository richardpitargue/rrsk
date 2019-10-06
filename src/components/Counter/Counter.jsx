import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.onClickDecrement = this.onClickDecrement.bind(this);
    this.onClickIncrement = this.onClickIncrement.bind(this);
  }

  onClickDecrement(e) {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  }

  onClickIncrement(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div id="id-counter-wrapper">
        <div className="counter-item right">
          <input
            type="button"
            className="counter-button"
            value="-"
            onClick={this.onClickDecrement}
          />
        </div>
        <div className="counter-item">
          <span>{this.state.count}</span>
        </div>
        <div className="counter-item left">
          <input
            type="button"
            className="counter-button"
            value="+"
            onClick={this.onClickIncrement}
          />
        </div>
      </div>
    )
  }
}

export default Counter;