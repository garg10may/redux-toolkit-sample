import React from 'react'
import { incrementCount, resetCount, deleteCounter } from './myCounterSlice';
import { useDispatch } from 'react-redux';

export default function Counter({ value, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div style={{ margin: 10, fontWeight: 20, float: 'left' }}>{value}</div>
      <button style={{ margin: 10 }} onClick={() => dispatch(incrementCount(id))}>Increment</button>
      <button style={{ margin: 10 }} onClick={() => dispatch(resetCount(id))}>Reset</button>
      <button style={{ margin: 10 }} onClick={() => dispatch(deleteCounter(id))}>Delete</button>
    </div>
  );
}