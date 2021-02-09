import React, {useState} from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0);
    const [date, setDate] = useState<Date>();
    const [show, setShow] = useState<boolean>(false);

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        const id: number = window.setInterval(() => {
            return setDate(new Date())
        }, 1000);
        setTimerId(id);
    }

    const onMouseEnter = () => {
        setShow(true)
    };
    const onMouseLeave = () => {
        setShow(false)

    };

    const stringTime = date && `${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
    :${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
    :${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}`

    const stringDate = date && `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}
    :${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}
    :${date.getFullYear() < 10 ? '0' + date.getFullYear() : date.getFullYear()}`

    return (
        <div className={s.allContainer}>

            <div className={s.clockContainer}>

                <div className={s.time}
                     onMouseEnter={onMouseEnter}
                     onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div className={s.data}>
                        {stringDate}
                    </div>
                )}
                <div className={s.buttons}>
                    <SuperButton className={s.but1} onClick={start}>start</SuperButton>
                    <SuperButton onClick={stop}>stop</SuperButton>
                </div>

            </div>
        </div>
    );
}

export default Clock;
