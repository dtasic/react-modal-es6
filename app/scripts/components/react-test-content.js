import React from 'react';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
		<span id='content'>some other componenet as content for modal 2 passed via prop with {this.props.someprop}</span>
    );
  }
}
