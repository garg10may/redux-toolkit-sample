import React from 'react';
import Counter from './myCounter';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounters } from './myCounterSlice';

function Counters() {

  const dispatch = useDispatch();
  return (
    <div>
      <div>
        {/* <button onClick={() => dispatch(resetAllCount())}>Global Reset</button> */}
      </div>
      <div>
        {
          selectCounters.map(x => {
            return <Counter
              id={x.id}
              value={x.value}
              key={x.id}
            ></Counter>
          })
        }
      </div>
    </div >
  )
}


export default Counters;