import React, { Component } from "react";
import PropTypes from "prop-types";

interface Props {
   children: any
}
interface State {}

// Required children is "string"
export default class SingleChildString extends Component<Props, State> {
   state = {};
   static propTypes: { children: PropTypes.Validator<string>; };

   render() {
      // This must be exactly one element or it will warn.
      const children = this.props.children;
      return <div>{children}</div>;
   }
}
SingleChildString.propTypes = {
   children: PropTypes.string.isRequired,
};
