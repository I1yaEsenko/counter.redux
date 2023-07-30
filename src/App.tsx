import React from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";

function App() {
  return (
      <>
         <div className='container'>
            <Counter/>
            <SetCounter/>
         </div>

      </>
  );
}

export default App;
