import React from 'react';
import Footer from '../footer'

import SideBar from '../sidebar'
import { connect } from "react-redux";
import {
 addFooter ,addFooter2 , addFooter3 , addFooter0
} from "../actions/actionCreater";
import { ADD_FOOTER_P1 } from "../actions/actionsTypes";
import { ADD_FOOTER_P2 ,ADD_FOOTER_P3 ,ADD_FOOTER_P0 } from "../actions/actionsTypes";
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

    // console.log(this.props.pagetwo)
    // this.props.addFooter2(this.props.pagetwo);
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

 // export default Namechanger


  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addFooter , addFooter2 ,addFooter3 , addFooter0
    }, dispatch)
}

// const mapStateToProps = state =>{
//   return {
//     pageone : state.AddFooter[0].pageone,
//     pagetwo : state.AddFooter[0].pagetwo,
//     pagethree : state.AddFooter[0].pagethree,
//     homepage : state.AddFooter[0].homepage,
//   };
// }





export default connect(null, mapDispatchToProps)(Namechanger)