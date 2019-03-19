import React, { Component } from 'react'

function A(WrappedComponent){
    return class A extends Component {
        constructor(props){
            super(props)
            this.state = {
                vaule: ''
            }
        }
        onInputChange = (e) => {           
            this.setState({
                value: e.target.value
            })
        }
        render() {
          const { age, ...otherProps} = this.props;
          const newProps = {
              value: this.state.value,
              onInput: this.onInputChange
          }
          return (
              <div className="a-container">
                  <div className="header">
                      <div>提示</div>
                      <div>X</div>
                  </div>
                  <div>
                      <WrappedComponent sex={'男'} {...otherProps} {...newProps} ></WrappedComponent>
                  </div>
              </div>
          )
        }
    }
}
export default A 
