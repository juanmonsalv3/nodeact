import React, {Component} from 'react';


class Credits extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <a className="waves-effect waves-light btn">Credits:{this.props.credits}</a>
    );
  }
}

export default Credits;
