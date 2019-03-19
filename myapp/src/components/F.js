import React, { Component } from 'react'
import E from './E'

class F extends Component {
    componentWillMount(){
        alert('我是原始生命周期')
    }
    render() {
        return (
        <div>
            我是div
        </div>
        )
    }
}

export default E(F)
