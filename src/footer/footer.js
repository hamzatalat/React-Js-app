import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import TimerExample from './footerTemplate'

import { connect } from "react-redux";





class Footer extends React.Component{ 





    render(){

    return (
      <div>
    <footer className="app-footer">
<div className="d-flex flex-column">
  <ButtonGroup size="lg">
  <Button variant="dark" href="/">{this.props.homepage}</Button>
  <Button variant="dark" href="/P1">{this.props.pageone}</Button>
  <Button variant="dark" href="/P2">{this.props.pagetwo}</Button>
  <Button variant="dark" href="/P3">{this.props.pagethree}</Button>
  <TimerExample start={Date.now()} />
  </ButtonGroup>

  </div>
</footer>
<span>{this.props.pageone}</span>
</div>
);
}
}

const mapStateToProps = state =>{
  console.log(state)
  return {
    pageone : state.AddFooter[0].pageone,
    pagetwo : state.AddFooter[0].pagetwo,
    pagethree : state.AddFooter[0].pagethree,
    homepage : state.AddFooter[0].homepage,
  };
}

  export default connect(mapStateToProps)(Footer);