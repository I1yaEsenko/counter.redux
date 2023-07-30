import React, {useState} from 'react';
import {CounterButton} from "./CounterButton";
import {CounterInput} from "./CounterInput";

export const Counter = () => {


   let [value, setValue] = useState(0)



   const counterIncrement = () => {
      setValue(++value)
   }

   const counterReset = () => {
      setValue(0)
   }




   return (
     <div>
        <div>
           <CounterInput value={value} callback={()=>(value)}/>
           <CounterButton name={'Inc'} callback={counterIncrement}/>
           <CounterButton name={'Reset'} callback={counterReset}/>
        </div>


     </div>
   );
};

