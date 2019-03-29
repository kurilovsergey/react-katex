import React from 'react';
import ReactDOM from 'react-dom';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import Equally from './component/Equally.js';
import Headrowe from './component/Headrowe'
import s from "./index.module.css"



//const store = ['c = \\pm\\sqrt{a^2 + b^2}','\\int_0^\\infty x^3 dx','\\int_0^\\infty x^8 dx','\\int_0^\\infty x^2 dx','\\int_0^\\infty x^2 dx'];



class ExamplePage extends React.Component {
  constructor(props) {
    super(props);
    this.onMenu = this.onMenu.bind(this);
    this.onRollback = this.onRollback.bind(this);
    this.onNewrow = this.onNewrow.bind(this);
    this.state = {store: ['c = \\pm\\sqrt{a^1 + b^1}','\\int_0^\\infty x^1 dx','\\int_0^\\infty x^2 dx','\\int_0^\\infty x^3 dx','\\int_0^\\infty x^4 dx'],
                  menu: false,
                  x: 416,
                  y: 47,
                  clickId: undefined,
                  newrow: []};
  }

  onMenu = (event) => {
    var target = event.target || event.srcElement;
    var id = target.id;
    //alert(id);
    this.setState({menu: true, x: event.clientX, y: event.clientY, clickId: 1+(+id) });
    }

    onRollback = () => {
      this.setState(() => {
        this.state.store.splice(this.state.clickId, this.state.store.length-this.state.clickId)
      });
      this.setState({menu: false});
      }
      
      onRewrite = () => {
        this.setState(() => {
          this.state.store.splice(this.state.store.length, 0, this.state.store[this.state.store.length-1] )
        });
        this.setState({menu: false});
      }

      onNewrow = () => {
        this.setState(() => {
          this.state.newrow=this.state.newrow.concat(this.state.store[this.state.clickId-1])
        });
        this.setState({menu: false});
      }

render () {
  

  
  let equallyElemements=this.state.store.map((item, i)=><div><InlineMath math={item} />
    <Equally onMenu={this.onMenu} i={i} /></div>);

  let newrowelements=this.state.newrow.map((item)=><InlineMath math={item}/>);

const status = this.state.menu;
let element;

if (status) {
  if (this.state.clickId!=this.state.store.length) {element=<div style={{ height: 10, color: 'blue', left: this.state.x, top: this.state.y, position: 'fixed' }}>
    <div><button onClick={this.onRollback}>Rollback to it</button></div>
    <div><button onClick={this.onNewrow}>Copy to new row</button></div>
  </div>
  } else {element=<div style={{ height: 10, color: 'blue', left: this.state.x, top: this.state.y, position: 'fixed' }}>
  <div><button onClick={this.onRewrite}>Rewrite</button></div>
  <div><button onClick={this.onNewrow}>Copy to new row</button></div>
</div>
  }
}


return (
  <div>
    <div className={s.headrow}>{equallyElemements}</div>
    <div>{newrowelements}</div>
    <div>{element}</div>
  </div>
   );
  }
}

ReactDOM.render(<ExamplePage />, document.getElementById('root'));
