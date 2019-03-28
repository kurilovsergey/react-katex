import React from 'react';
import ReactDOM from 'react-dom';

import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Equally from './component/Equally.js'
import Menu from './component/Menu.js'


//const store = ['c = \\pm\\sqrt{a^2 + b^2}','\\int_0^\\infty x^3 dx','\\int_0^\\infty x^8 dx','\\int_0^\\infty x^2 dx','\\int_0^\\infty x^2 dx'];



class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.onMenu = this.onMenu.bind(this);
    this.state = {store: ['c = \\pm\\sqrt{a^1 + b^1}','\\int_0^\\infty x^3 dx','\\int_0^\\infty x^8 dx','\\int_0^\\infty x^2 dx','\\int_0^\\infty x^2 dx'],
                  menu: false,
                  x: 416,
                  y: 47,
                  clickId: 0};
  }

  onMenu = (event) => {
    var target = event.target || event.srcElement;
    var id = target.id;
    //alert(id);
    this.setState({menu: true, x: event.clientX, y: event.clientY, clickId: id });
    }

render () {
  

  
  let equallyElemements=this.state.store.map((item, i)=><div><InlineMath math={item} />
    <Equally onMenu={this.onMenu} i={i} /></div>);

const status = this.state.menu;
let element;

if (status) {
  element=<div style={{ height: 10, color: 'blue', left: this.state.x, top: this.state.y, position: 'fixed' }}>
    <div><button>Rollback to it</button></div>
    <div><button>Rewrite</button></div>
    <div><button>Copy to new row</button></div>
  </div>
}


return (
  <div
    style={{
      width: '40%',
      margin: '0 auto',
    }}
  >


{equallyElemements}
{element}

 
  </div>
   );
  }
}

ReactDOM.render(<ExamplePage />, document.getElementById('root'));
