import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import TimerExample from './footerTemplate'
import myInitObject from '../globalvar'





class Footer extends React.Component{ 
constructor(props) { 
    super(props); 

      this.state = { 
      homepage: 'Home',
      pageone: 'P1', 
      pagetwo: 'P2',
      pagethree: 'P3'
    }
    

    this.changePagehomeName = this.changePagehomeName.bind(this);
    this.changePageoneName = this.changePageoneName.bind(this);
    this.changePagetwoName = this.changePagetwoName.bind(this);
    this.changePagethreeName = this.changePagethreeName.bind(this);

  }

changePageoneName=(param)=> {
    //var that=this;
    const value = param.target.value;
    this.setState({pageone: param.target.value});
    this.forceUpdate()
    console.log(this.state.pageone)
    this.forceUpdate();
    this.render();
    console.log('force re render called')


    
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
    this.setState({homepage: value});
    console.log(this.state.homepage);
  };







    render(){

    return (
      <div>
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
<span>{this.state.pageone}</span>
</div>
);
}
}

  export default Footer