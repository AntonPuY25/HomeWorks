import React from "react";
import s from './error.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div>404</div>
            <div className={s.errorText}>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    );
}

export default Error404;
