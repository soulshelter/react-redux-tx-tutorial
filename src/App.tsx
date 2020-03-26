import React from 'react';
import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
//import CounterContainer from './containers/counterContainer'

function App() {
  return (
    <>
      <Counter />
      <TodoInsert />
      <TodoList />
    </>
  )
}

export default App;
