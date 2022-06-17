import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, signin, signout} from '../action';


const Home = () => {
  const counter = useSelector(state => state.counter);
  const islogged = useSelector(state => state.logged)
  const dispatch = useDispatch();


  return (
    <div>This Is Home
      <div>
        <h1>Counter {counter}</h1>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>

        {islogged ? <h3>User can see information beacause it is logged in</h3> : <h3>Cant See Any Thing</h3> }

        <button onClick={() => dispatch(signin())}>Signin</button>
        <button onClick={() => dispatch(signout())}>Signout</button>
      </div>
    </div>
  )
}

export default Home;