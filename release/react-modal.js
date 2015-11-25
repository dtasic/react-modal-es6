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

#modal-open-btn {
	border: 0;
	background: #069;
	color: white;
	padding: 10px;
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

.modal-close:hover {
  color: red;
}


*/

import React from 'react';

export default class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    }
  }

  componentWillMount() {
    this.props.openbtn || this.showModal();
  }

  showModal() {
    this.setState({ display: 'block' });
  }

  hideModal() {
    this.setState({ display: 'none' });
  }

  closeOnBackground(e){
    if( e.target.id == 'modal' ) {
      this.hideModal();
    }
  }

  render() {
	var button;
	if (this.props.openbtn) { var button = <button id='modal-open-btn' onClick={(e) => this.showModal(e)}>{(this.props.opentext) ? this.props.opentext : 'Open modal' }</button>; }
    return (
      <span>
        {button}
        <div id="modal" style={this.state} onClick={(e) => this.closeOnBackground(e)} >
          <span className="modal-close" onClick={(e) => this.hideModal(e)}>x</span>
          {(this.props.content && this.props.content)}
        </div>
      </span>
    );
  }
}
