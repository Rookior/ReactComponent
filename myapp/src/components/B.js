import React, { Component } from 'react'
//import A from './A';
import d from './D';

class B extends Component {
  render() {
    return (
      <div>
        <img src={require('../images/b.png')} />
      </div>
    )
  }
}

export default d(B)
