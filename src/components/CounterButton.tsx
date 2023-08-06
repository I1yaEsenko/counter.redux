import React from 'react';
import c from '../counter.module.css'

type CounterButtonPropsType = {
    name: string
    callback: () => void
    error?: string | null
    disable?: boolean
}

export const CounterButton = (props: CounterButtonPropsType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <>
            <button className={props.error ? c.counter__button_error : c.counter__button}
                    onClick={onClickHandler}
                    disabled={props.disable}
            >{props.name}</button>
        </>
    );
};

