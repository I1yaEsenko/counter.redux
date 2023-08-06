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
    changeView?: () => void
}


export const SetCounter = (props: SetCounterPropsType) => {

    const counterErrorClass = () =>
        (props.settingsError ? `${c.setCounter__error_input} + ${c.setCounter__input}` : c.setCounter__input)

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
                    {props.changeView ? <CounterButton name={'Set'}
                                                       callback={props.changeView}
                                                       error={props.settingsError}
                                                       disable={!!props.settingsError}/> :
                        <CounterButton name={'Set'}
                                       callback={props.counterHandler}
                                       error={props.settingsError}
                                        disable={!!props.settingsError}/>
                    }

                </div>


            </div>
        </div>
    );
};

