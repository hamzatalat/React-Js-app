import React from 'react';

import SideBar from '../sidebar'
import { connect } from "react-redux";
import {
 addFooter ,addFooter2 , addFooter3 , addFooter0
} from "../actions/actionCreater";

import { bindActionCreators } from "redux";

class Namechanger extends React.Component { 


constructor(props) { 
    super(props); 
    this.state = {
      p1 : '',
      p2 : '',
      p3 : '',
      h1 : '',
    }
    
    this.changePagehomeName = this.changePagehomeName.bind(this);
    this.changePageoneName = this.changePageoneName.bind(this);
    this.changePagetwoName = this.changePagetwoName.bind(this);
    this.changePagethreeName = this.changePagethreeName.bind(this);

  }

changePageoneName=(param)=> {
    const value = param.target.value;
    this.props.addFooter(value);
  };




  changePagetwoName(param) {
    const value = param.target.value; 
    this.props.addFooter2(value);
  };
  changePagethreeName(param) {
    const value = param.target.value;
    this.props.addFooter3(value);
  };

  changePagehomeName(param) {
    const value = param.target.value;
    this.props.addFooter0(value);
  };

render(){
    return (
    	<div>
    	<SideBar/>
    	<label>
		          Name For Home page
		          <input type="text"  onChange={this.changePagehomeName} className="screen-row" />
            
		  </label>

		 <br/>
    	<label>

		          Name For Page One
		          <input type="text" onChange={this.changePageoneName} className="screen-row"/>
		        </label>
		        <br/>

		        <label>
		          Name For Page two
		          <input type="text" onChange={this.changePagetwoName} className="screen-row"/>
		        </label>
		        <br/>
		        <label>
		          Name For Page three
		          <input type="text" onChange={this.changePagethreeName} className="screen-row"/>
		        </label>
		        
		        </div>
);
}
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addFooter , addFooter2 ,addFooter3 , addFooter0
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Namechanger)