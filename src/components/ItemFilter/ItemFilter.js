import React, { Component } from 'react';

import './ItemFilter.css';

export default class ItemStatusFilter extends Component {
  constructor() {
    super()
    this.buttons = [
      { name: 'all', label: 'All' },
      { name: 'active', label: 'Active' },
      { name: 'done', label: 'Done' },
    ]
  }
  render() {
    const { filter, filterChangeHandler } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classButton = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (<button type="button"
        className={`btn ${classButton}`}
        key={name}
        onClick={() => filterChangeHandler(name)}>{label}</button>)
    })
    return (
      <div className="btn-group" >
        {buttons}
      </div>
    );
  };
};
