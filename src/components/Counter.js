import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {

  const Dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const showOrHide = useSelector(state => state.counter.showCounter)


  const toggleCounterHandler = () => {
    // Dispatch({type : "toggle"}) - code in redux 
    Dispatch(counterActions.toggleCounter())  //- this line code in reduxtool
  };

  const incrementhandler = () => {
    // Dispatch({type : 'increment'})
    Dispatch(counterActions.increment())
  }

  const increasehandler  = () => {
    // Dispatch({type : 'increase',amount : 10})
    Dispatch(counterActions.increase(10))
  }

  const decrementhandler = () => {
    // Dispatch({type : 'decrement'})
    Dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showOrHide && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={increasehandler}>increase by 10</button>
        <button onClick={decrementhandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
