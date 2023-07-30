import React, {useState} from 'react';
import {CounterInput} from "./CounterInput";
import {CounterButton} from "./CounterButton";

export const SetCounter = () => {

   let [minValue, setMinValue] = useState(0)
   let [maxValue, setMaxValue] = useState(5)

   const setValueMax = (value:number) => {
      let maxValue = value
      console.log(maxValue)

   }
   const setValueMin = (value:number) => {
      let minValue = value
   }

   const valueSet = () => {

   }

   return (
     <div>
        <div>
           <CounterInput value={1} callback={setValueMin}/>
           <CounterInput value={4} callback={setValueMax}/>
           <CounterButton name={'Set'} callback={valueSet}/>
        </div>
     </div>
   );
};

