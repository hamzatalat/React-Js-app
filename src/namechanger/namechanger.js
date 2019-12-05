import React from 'react';
import Footer from '../footer'

import SideBar from '../sidebar'

class Namechanger extends Footer{ 


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