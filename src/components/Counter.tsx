import React from 'react';
import {CounterButton} from "./CounterButton";
import {CounterInput} from "./CounterInput";
import c from '../counter.module.css'

export type CounterPropsType = {
    value: number
    increment: () => void
    reset: () => void
    error: string | null
}

export const Counter = (props: CounterPropsType) => {


    return (
        <>
            <div className={c.counter}>
                <div className={c.counter__wrapper}>
                    <div className={c.counter__input}>
                        <CounterInput value={props.value} callback={() => (props.value)}/>
                        <div className={c.error}> {props.error &&
                            <div className={c.error__text}>{props.error}</div>}</div>
                    </div>
                    <div className={c.counter__buttons}>
                        <CounterButton name={'Inc'} callback={props.increment} error={props.error}/>
                        <CounterButton name={'Reset'} callback={props.reset}/>
                    </div>
                </div>
            </div>
        </>
    );
};

