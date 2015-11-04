/*

CSS:

#modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9000;
  background: rgba(0,0,0,0.8);
}

.modal-close {
  cursor: pointer;
  color: white;
  padding: 20px;
  z-index: 9100;
  position: absolute;
  top: 0;
  right: 0;
}

modal-close:hover {
  color: red;
}


*/

import React from 'react';

export default class Test extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
	var democontent = <span id='content'>some other componenet as content for modal 2 passed via prop</span>;
    return (
		<div>{democontent}</div>
    );
  }
}
