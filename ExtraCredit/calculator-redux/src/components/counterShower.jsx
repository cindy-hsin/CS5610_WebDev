import React from "react";
import {useSelector} from 'react-redux';



export default function CounterShower(props) {
  const total = useSelector(state => state.calculate.total);
  const history = useSelector(state => state.calculate.history);
  const historyResults = history.map((result) => <li>{result}</li>);

  return (
      <div>
        <h1>History Results: </h1>
        <ul>{historyResults}</ul>
        <h1>Current Result: </h1>
        <h1>{total}</h1>
      </div>
  )

}




// class CounterShower extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.total}</h1>
//       </div>
//     );
//   }
// }


// // useDispatch
// let mapDispatchToProps = function (dispatch, props) {
//   return {};
// };
// // this guy isn't used here, but it's needed as the first argument in connect
// // I guess you could also pass undefined...


// // useSelector
// function mapStateToProps(state, props) {
//   return {
//     total: state.sum,
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CounterShower);


