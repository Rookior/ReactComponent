import React, { Component } from 'react'
import A from './A';

class C extends Component {
    constructor(props){
        super(props)
        this.state={
            value: ''
        }
    }
    render() {
        return (
        <div>
            <input type='text' value={this.state.value} {...this.props}/>
            <img src={require('../images/c.png')} />
        </div>
        )
    }
}

export default A(C)
