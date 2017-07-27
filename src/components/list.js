import { Component } from 'react';
import ReservationEntry from './entry';

const defaultProps = {
  data: []
};

class ReservationList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { data, del } = this.props;
    return (
        <div className="col-lg-6">
          <h3>通知一覧</h3>
          <div className="container">
            {
              data.map((d) =>{
                return <ReservationEntry key={d.time} time={d.time} message={d.message} del={del}/>
              })
            }
          </div>
        </div>
    );
  }
}

ReservationList.defaultProps = defaultProps;

export default ReservationList;
