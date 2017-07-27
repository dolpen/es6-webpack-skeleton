import { Component } from 'react';
import { connect } from 'react-redux';

class ReservationButton extends Component {
  constructor(props){
    super(props);
  }

  add(e){
    e.preventDefault();
    this.props.add(
        (new Date()).getTime() + 1000 * parseInt(this.props.seconds),
        this.props.label
    );
  }

  render(){
    return (
        <button className="btn btn-secondary" onClick={this.add.bind(this)}>{this.props.label}</button>
    );
  }
}

export default ReservationButton;
