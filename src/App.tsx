import React, {useState} from 'react';
import c from './counter.module.css'
import {Counter} from "./components/Counter";
import {SetCounter} from "./components/SetCounter";

function App() {

    let [minValue, setMinValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [value, setValue] = useState(minValue)

    let [singleView, setSingleView] = useState<boolean>(true)

    let [error, setError] = useState<string | null>(null)
    let [settingsError, setSettingError] = useState<string | null>(null)

    let [message, setMessage] = useState<string | null>('Установите параметры счетчика')
    // увеличение счеткича
    const counterIncrement = () => {
        setValue(++value)
        if (value >= maxValue) {
            setError('Достигнуто максимальное значение')
        }
    }
    // сброс счетчика
    const counterReset = () => {
        setValue(minValue)
        setError(null)
        setMessage(null)
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
        value <= minValue || minValue < 0 ?
            setSettingError('Введите корректное значение') :
            setSettingError(null)
        setMaxValue(value)
    }
    // установка начального значения счетчика
    const counterHandler = () => {
        setValue(minValue)
        setError(null)
        setMessage(null)
    }

    // изменяем вид счетчика, заходим в настройки счетчика
    const changeView = () => {
        setSingleView(!singleView)
    }

    // выходим из настроек, устанавливаем начальное состояние счетчика
    const settingsBack = () => {
        setValue(minValue)
        setSingleView(true)
        setError(null)
        setMessage(null)
    }

    return (
        <>
            <div className={c.container}>
                <Counter value={value}
                         increment={counterIncrement}
                         reset={counterReset}
                         error={error}
                         settingsError={settingsError}
                         message={message}/>
                <SetCounter minValue={minValue}
                            maxValue={maxValue}
                            minValueSet={setValueMin}
                            maxValueSet={setValueMax}
                            counterHandler={counterHandler}
                            settingsError={settingsError}
                />
                {singleView ?
                    <div>
                        <Counter value={value}
                                 increment={counterIncrement}
                                 reset={counterReset}
                                 error={error}
                                 changeView={changeView}
                                 message={message}
                        />
                    </div>
                    :

                    <div>
                        <SetCounter minValue={minValue}
                                    maxValue={maxValue}
                                    minValueSet={setValueMin}
                                    maxValueSet={setValueMax}
                                    counterHandler={counterHandler}
                                    settingsError={settingsError}
                                    changeView={settingsBack}
                        />
                    </div>
                }


            </div>


        </>
    );
}

export default App;
