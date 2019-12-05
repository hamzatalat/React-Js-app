import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css' 
import ReactDOM from 'react-dom';
import Login from './login'
import './index.css'
import ImageSlider from './imageSlider'
import Table from './table'
import Namechanger from './namechanger'
import { Route,  BrowserRouter as Router } from 'react-router-dom'
import Footer from './footer'


import React from 'react';


//class Fea extends React.Component {
//	render(){
//	return(<div>
//    <IndexTemplate/>
//    </div>);
//}
//}
//export default Fea;
var pageone ='P1';
var pagetwo ='P2';
var pagethree ='P3';
var homepage ='Homes';


const routing = (
  <Router>
  

      <Route exact path="/" component={Login} />
      <Route exact path="/P1" component={ImageSlider} />
      <Route exact path="/P2" component={Table} />
      <Route exact path="/P3" component={() => <Namechanger pageone={pageone} pagetwo={pagetwo} pagethree={pagethree} homepage={homepage}  />}/>
    
  </Router>
)


ReactDOM.render(
	<div >{routing}
	<Footer pageone={pageone} pagetwo={pagetwo} pagethree={pagethree} homepage={homepage}/>
	</div> ,document.getElementById("root"))