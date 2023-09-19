import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps={
    numberWords: ['one','two','three','four','five','six']
  }
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.props.handleClick(this.props.idx);
  }
 
  render() {
    const{numberWords,locked,val,disabled}=this.props
   let classes=`Die fa-5x fas fa-dice-${numberWords[val-1]} `
   if(locked) classes+='Die-locked'
    return (
      <i
        disabled={disabled}
        className={classes}
        onClick={this.handleClick}  
      >
        {/* {this.props.val} */}
      </i>
    );
  }
}

export default Die;
// ()=>this.props.handleClick(this.props.idx) direclty inside onlick