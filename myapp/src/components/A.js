import React, { Component } from 'react'

function A(WrappedComponent){
    return class A extends Component {
        render() {
          const { age, ...otherProps} = this.props;
          return (
              <div className="a-container">
                  <div className="header">
                      <div>提示</div>
                      <div>X</div>
                  </div>
                  <div>
                      <WrappedComponent sex={'男'} {...otherProps} ></WrappedComponent>
                  </div>
              </div>
          )
        }
    }
}
export default A 
