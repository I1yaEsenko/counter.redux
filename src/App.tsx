import React, {useState} from 'react';
import c from './counter.module.css'
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";

function App() {

    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [value, setValue] = useState(minValue)

    let [error, setError] = useState<string | null>(null)
    let [settingsError, setSettingError] = useState<string | null>(null)

    //  ошибка в поле настроек

    // увеличение счеткича
    const counterIncrement = () => {
        setValue(++value)
        if (value >= maxValue) {
            setError('Предельное значение')
        }
    }
    // сброс счетчика
    const counterReset = () => {
        setValue(minValue)
        setError(null)
    }
    // изменение минимального значения
    const setValueMin = (value: number) => {
        value < 0 || maxValue <= value ?
            setSettingError('Введите корректное значение') :
            setSettingError(null)
        setMinValue(value)
    }
    // изменение максимального значение и проверка на ошибку
    const setValueMax = (value: number) => {
        value <= minValue ?
            setSettingError('Введите корректное значение') :
            setSettingError(null)
        setMaxValue(value)
    }
    // установка начального значения счетчика
    const counterHandler = () => {
        setValue(minValue)
        setError(null)
    }
    return (

        <>
            <div className={c.container}>
                <Counter value={value}
                         increment={counterIncrement}
                         reset={counterReset}
                         error={error}/>
                <SetCounter minValue={minValue}
                            maxValue={maxValue}
                            minValueSet={setValueMin}
                            maxValueSet={setValueMax}
                            counterHandler={counterHandler}
                            settingsError={settingsError}
                />
            </div>

        </>
    );
}

export default App;
