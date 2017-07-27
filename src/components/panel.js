import { Component } from 'react';
import ReservationButton from './button';

class ReservationPanel extends Component {
  constructor(props){
    super(props);
  }

  add(e){
    console.log(e);
    console.log(this);
    e.preventDefault();
    this.props.add(
        (new Date()).getTime() + 1000 * parseInt(this.value),
        this.textContent
    );
  }

  render(){
    const { add } = this.props;
    return (
        <div className="col-lg-6">
          <h3>登録する</h3>
          <div className="btn-group" role="group" aria-label="upto 15min">
            <ReservationButton label="1分タイマー" seconds="60" add={add}/>
            <ReservationButton label="3分タイマー" seconds="180" add={add}/>
          </div>
        </div>
    );
  }
}

export default ReservationPanel;
