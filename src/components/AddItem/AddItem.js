import React, { Component } from 'react';

import './AddItem.css'

export default class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            label: '',
            disabled: true
        }
        this.onInputChange = (e) => {
            this.setState({ disabled: false, label: e.target.value })
        }
        this.onSubmit = (e) => {
            e.preventDefault()
            this.props.onAdd(this.state.label)
            this.setState({ label: '' })
        }
    }

    render() {
        return (
            <form className="add-item d-flex"
                onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                    onChange={this.onInputChange}
                    placeholder="New "
                    value={this.state.label} />
                <button className="btn btn-outline-secondary"
                    disabled={this.state.disabled}>Add</button>
            </form>
        )
    }
}