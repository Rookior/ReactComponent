import React, { Component } from 'react'

function A(WrappedComponent){
    return class A extends Component {
        render() {
          return (
              <div className="a-container">
                  <div className="header">
                      <div>提示</div>
                      <div>X</div>
                  </div>
                  <div>
                      <WrappedComponent sex={'男'} {...this.props}></WrappedComponent>
                  </div>
              </div>
          )
        }
    }
}
export default A 
