import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CounterContainer = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button
      onClick={() => dispatch({ type: 'DELETE-TEN' })}
    >
      -10
    </button>
    <button
      onClick={() => dispatch({ type: 'DELETE-ONE' })}
    >
      -1
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD-ONE' })}
    >
      +1
    </button>
    <button
      onClick={() => dispatch({ type: 'ADD-TEN' })}
    >
      +10
    </button>
  </div>
);

export default connect(
  mapStateToProps
)(CounterContainer);
