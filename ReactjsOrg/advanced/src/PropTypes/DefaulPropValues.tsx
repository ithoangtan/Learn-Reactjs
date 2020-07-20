import React, { Component } from 'react'

interface Props {
   name:string
}
interface State {
   
}

export default class DefaulPropValues extends Component<Props, State> {
   state = {}
   static defaultProps: { name: string; };

   render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
}
// Specifies the default values for props:
DefaulPropValues.defaultProps = {
   name: 'Hoàng Tấn'
 };
