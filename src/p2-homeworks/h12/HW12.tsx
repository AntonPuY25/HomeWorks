import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeAC, TypeThemeState} from "./bll/themeReducer";
import {Dispatch} from "redux";


function HW12() {
    const them = ['dark', 'red','yellow','some']
    const themes = useSelector<AppStoreType, TypeThemeState>(state => state.theme)
    const theme = themes.them;
    const dispatch = useDispatch<Dispatch>()

    const onChangeCallback = (value: string) => {
        dispatch(changeThemeAC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect options={them} onChangeOption={onChangeCallback} />

            <hr/>
        </div>
    );
}

export default HW12;
