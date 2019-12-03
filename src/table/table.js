
import React, { Component  } from "react";
import TablesTemplate from './tableTemplate'

class Tables extends Component {
constructor()
{
	super();
	this.state={
		todos: []
	};
}
componentDidMount()
{
	fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  
	
}
render()
{
  return (
  <TablesTemplate todos={this.state.todos}/>
  );
}
}
export default Tables