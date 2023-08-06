import React from 'react';
import {CounterButton} from "./CounterButton";
import {CounterInput} from "./CounterInput";
import c from '../counter.module.css'

export type CounterPropsType = {
    value: number
    increment: () => void
    reset: () => void
    error: string | null
    changeView?: () => void
    message?: string | null
    settingsError?: string | null
}

export const Counter = (props: CounterPropsType) => {

    const disableButtonInc = () =>
        !!props.error || !!props.message || !!props.settingsError
    const disableButtonReset = () =>
        !!props.settingsError  || !!props.message

    return (
        <>
            <div className={c.counter}>
                <div className={c.counter__wrapper}>
                    <div className={c.counter__input}>
                        {/*отрисовка начального экрана, ошибки ввода данных или поля счетчика*/}
                        { props.settingsError ?
                            <div className={c.setCounter__error}>
                                {props.settingsError &&
                                    <div className={c.setCounter__error_text}>{props.settingsError}</div>}
                            </div> : props.message ? props.message :
                            <CounterInput value={props.value} callback={() => (props.value)}/>}
                        {/*сообщение о достижении предельного значения*/}
                        <div className={c.error}> {props.error &&
                            <div className={c.error__text}>{props.error}</div>}
                        </div>
                    </div>
                    {/*Кнопки увеличения и перезагрузки счетчика*/}
                    <div className={c.counter__buttons}>
                        <CounterButton name={'Inc'} callback={props.increment} error={props.error}
                                       disable={disableButtonInc()}/>
                        <CounterButton name={'Reset'} callback={props.reset} disable={disableButtonReset()}/>
                        {props.changeView &&
                            <CounterButton name={'Set'} callback={props.changeView} disable={!!props.settingsError}/>}
                    </div>
                </div>
            </div>
        </>
    );
};

