import React, {ChangeEvent} from 'react';

type CounterInputPropsType = {
   value: number
   callback:(value:number)=> void
}


export const CounterInput = (props: CounterInputPropsType) => {

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      let newValue = e.currentTarget.value
      props.callback(parseInt(newValue))
   }
   return (
     <>
        <input value={props.value} type="number" onChange={onChangeHandler}/>
     </>
   );
};

