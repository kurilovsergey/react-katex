import React from 'react';
import ReactDOM from 'react-dom';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';


const Equally = (props) => {
  return (
  <div><button id={props.i} onClick={props.onMenu}>=</button></div>
)
}

export default Equally;

