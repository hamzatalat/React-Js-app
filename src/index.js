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
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import MainReducer from './Reducer/MainReducer'




/*
const initState={
 pageone :'P1',
 pagetwo :'P2',
 pagethree :'P3',
 homepage :'Homes'

}
function myreducer(state=initState,action)
{ 
	if(action.type == 'Change the veriables')
	{	
		return
		{
			pageone=action.pageone
		}
	}
	 
}

const store =createStore(myreducer)

store.subscribe(() =>{

	console.log('state updated')
	console.log(store.getState())
})

const changeAction = {type:'Change the veriables', pageone: 'but milk' }

store.dispatch(changeAction)*/

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
      //<Route exact path="/P3" component={() => <Namechanger  />}/>
    
  </Router>
)

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)(MainReducer)


ReactDOM.render(<Provider store={store}>
	<div >{routing}
	<Footer />
	</div></Provider> ,document.getElementById("root"))