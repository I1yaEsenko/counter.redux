import React, {useState} from 'react';
import {CounterInput} from "./CounterInput";
import {CounterButton} from "./CounterButton";
import c from '../counter.module.css'

export type SetCounterPropsType = {
    minValue: number
    maxValue: number
    minValueSet: (value: number) => void
    maxValueSet: (value: number) => void
    counterHandler: () => void
    settingsError: string | null
}


export const SetCounter = (props: SetCounterPropsType) => {

    const counterErrorClass = () =>
       props.settingsError ? `${c.setCounter__error_input} + ${c.setCounter__input}` : c.setCounter__input


    return (
        <div className={c.setCounter}>
            <div className={c.setCounter__wrapper}>
                <div className={c.setCounter__minMaxInputs}>
                    <CounterInput value={props.minValue}
                                  callback={props.minValueSet}
                                  className={counterErrorClass()}/>
                    <CounterInput value={props.maxValue}
                                  callback={props.maxValueSet}
                                  className={counterErrorClass()}/>
                </div>
                <div className={c.setCounter__buttonSet}>
                    <CounterButton name={'Set'} callback={props.counterHandler} />
                </div>
                <div className={c.setCounter__error}>
                    {props.settingsError && <div className={c.setCounter__error_text}>{props.settingsError}</div>}
                </div>
            </div>
        </div>
    );
};

