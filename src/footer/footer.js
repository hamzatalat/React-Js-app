import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import TimerExample from './footerTemplate'
import myInitObject from '../globalvar'
import Namechanger from '../namechanger'




class Footer extends React.Component{ 
	constructor(props) { 
    super(props); 
    if(!this.props.homepage)
    {
      console.log("!homepage")
      this.state = { 
      homepage: 'Home',
      pageone: 'P1', 
      pagetwo: 'P2',
      pagethree: 'P3'
    }
    }
    else
    {
    
      console.log("Else")
      console.log(this.props)
      this.state = { 
      homepage: this.props.homepage,
      pageone: this.props.pageone, 
      pagetwo: this.props.pagetwo,
      pagethree: this.props.pagethree
      }
        
    }

  };

  
  render(){

    return (
    <footer className="app-footer">
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
  <Button variant="dark" href="/">{this.state.homepage}</Button>
    <Button variant="dark" href="/P1">{this.state.pageone}</Button>
    <Button variant="dark" href="/P2">{this.state.pagetwo}</Button>
    <Button variant="dark" href="/P3">{this.state.pagethree}</Button>
    <TimerExample start={Date.now()} />
  </ButtonGroup>
  </div>
</footer>
);
}
}

  export default Footer