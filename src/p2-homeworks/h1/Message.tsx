import React from "react";
import s from './Message.module.css'

type PropsMessageType = {
    avatar: string
    name: string,
    message: string,
    time: string,
}

function Message(props: PropsMessageType) {
    return (
        <div className={s.message}>
            <img src={props.avatar}/>
            <div> {props.name}</div>
            <div> {props.message} at {props.time}?</div>

        </div>
    );
}

export default Message;
