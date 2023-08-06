import React, {ChangeEvent} from 'react';

type CounterInputPropsType = {
    value: number
    callback: (value: number) => void
    className?: string
}


export const CounterInput = (props: CounterInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newValue = e.currentTarget.value
        props.callback(JSON.parse(newValue))
    }

    return (
        <>
            <input value={props.value}
                   type="number"
                   onInput={onChangeHandler}
                   className={props.className}
            />
        </>
    );
};

