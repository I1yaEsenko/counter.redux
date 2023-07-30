import React from 'react';


type CounterButtonPropsType = {
   name: string
   callback: ()=>void
}

export const CounterButton = (props: CounterButtonPropsType) => {
   const onClickHandler = () => {
      props.callback()
   }
   return (
     <>
        <button onClick={onClickHandler}>{props.name}</button>
     </>
   );
};

