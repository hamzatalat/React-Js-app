import React from 'react';
import Footer from '../footer'

import SideBar from '../sidebar'

class Namechanger extends Footer{ 
	constructor() { 
   super();
    
    this.changePagehomeName = this.changePagehomeName.bind(this);
    this.changePageoneName = this.changePageoneName.bind(this);
    this.changePagetwoName = this.changePagetwoName.bind(this);
    this.changePagethreeName = this.changePagethreeName.bind(this);

  }

changePageoneName(param) {
    const value = param.target.value;
    this.setState({pageone: value});
    console.log(this.state.pageone)
    
  };
  changePagetwoName(param) {
    const value = param.target.value;	
    this.setState({pagetwo: value});
    console.log(this.state.pagetwo);
  };
  changePagethreeName(param) {
    const value = param.target.value;
    this.setState({pagethree: value});
    console.log(this.state.pagethree);
  };

  changePagehomeName(param) {
    const value = param.target.value;
    this.setState({homepage: this.state.homepage =value});
    console.log(this.state.homepage);
  };



    render(){
    return (
    	<div>
    	<SideBar/>
    	<label>
		          Name For Home page
		          <input type="text"  onChange={this.changePagehomeName} className="screen-row" />
              <span>{this.state.homepage}</span>
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

  export default Namechanger