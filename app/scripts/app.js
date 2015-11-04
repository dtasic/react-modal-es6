import React from 'react';
import Modal from './components/react-modal';
import TestContent from './components/react-test-content';

window.React = React;
const modalNode1 = document.getElementById('modal1');
const modalNode2 = document.getElementById('modal2');

var democontent = <div id='content'>some demo text as content for modal 1 passed as variable containing HTML</div>;

React.render(<Modal openbtn={true} opentext="open modal 1" content={democontent} />, modalNode1);
React.render(<Modal openbtn={true} opentext="open modal 2" content=<TestContent someprop='(test prop value)'/> />, modalNode2);
