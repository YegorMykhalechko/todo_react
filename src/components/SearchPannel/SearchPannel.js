import React, { Component } from 'react';

import './SearchPannel.css';

export default class AddItem extends Component {
  constructor() {
    super()
    this.state = {
      term: ''
    }
    this.inputSearchHandler = (e) => {
      const term = e.target.value
      this.setState({term});
      this.props.inputSearchHandler(term)
    }
  }
  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        onChange={this.inputSearchHandler}
        value={this.state.term} />
    );
  }
};
