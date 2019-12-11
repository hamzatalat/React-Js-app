import Table from 'react-bootstrap/Table'
import React from "react";
import SideBar from '../sidebar'
const TablesTemplate=(props)=> {

  return (
  
     


<div className="container">
        <div className="col-xs-12">

<SideBar/>
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
    <th>Id</th>
      <th>Title</th>
      <th>Status</th>
      
    </tr>
  </thead>
  <tbody>
    
  {props.todos.map((todo) => (

    <tr>
    <td>{todo.id}</td>
      <td>{todo.title}</td>
      

      { todo.completed &&
                
                <td>Completed</td>
                
      }
      { !todo.completed &&
                  <td>Pending</td>
      }              
      
      
    </tr>
    ))}
  </tbody>

</Table>
</div>
       </div>
  
);
}
export default TablesTemplate