import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css' 
import ReactDOM from 'react-dom';
import Login from './login'
import './index.css'
import ImageSlider from './imageSlider'
// import table from './table'
// import fileDialog from './fileDialog'
// import Graph from './graph'
// import IndexTemplate from './templates/indextemplate'
import { Route,  BrowserRouter as Router } from 'react-router-dom'


import React from 'react';


//class Fea extends React.Component {
//	render(){
//	return(<div>
//    <IndexTemplate/>
//    </div>);
//}
//}
//export default Fea;


const routing = (
  <Router>
  

      <Route exact path="/" component={Login} />
      <Route exact path="/P1" component={ImageSlider} />

    
  </Router>
)


ReactDOM.render(
	<div >{routing}</div> ,document.getElementById("root"))