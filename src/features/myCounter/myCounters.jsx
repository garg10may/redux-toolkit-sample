import React from 'react';
import Counter from './myCounter';
import { useSelector, useDispatch } from 'react-redux';
import { selectCounters, resetAllCount } from './myCounterSlice';

function Counters() {

  const dispatch = useDispatch();
  // const counters = useSelector(state => state.myCountersXYZ); // this can also be used
  const counters = useSelector(selectCounters);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(resetAllCount())}>Global Reset</button>
      </div>
      <div>
        {
          counters.map(x => {
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