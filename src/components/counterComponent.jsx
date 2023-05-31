import React, { Component } from 'react'
 
export default class Counter extends Component {
  state={
  //  value:this.props.counter.value
    // tags:["tag1","tag2","tag3"]
  }

  // renderTags(){
  //   if (this.props.counter.tags.length===0) return <p>There are no tags!</p>;
  //   return this.props.counter.tags.map(tag=><li key={tag}>{tag}</li>)
  // }
// handleIncrement=()=>{
//   this.setState({value:this.props.counter.value+1})
// }

  render() { 
    let classes = this.getBadgeClasses();

    return (<div>
      <span className={classes}>{this.formatCount()}</span>
      <button onClick={this.props.onIncrement} className="btn btn-secondary btn-sm">Increment</button>
      <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
      {/* <ul>
      {this.state.tags.length===0&&"Please enter tags!"}
      {this.renderTags()}
      </ul> */}
      </div>);
  }
  getBadgeClasses() {
    let classes = "m-2 badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(){
    const {value}=this.props.counter;
    return value===0?<span>Zero</span>: value;
  }
}
