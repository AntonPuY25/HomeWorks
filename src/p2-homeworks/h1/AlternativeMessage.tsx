import React from "react";
import s from './Message.module.css'
type PropsMessageType ={
    avatar:string
    name: string,
    message: string,

}
function AlternativeMessage(props:PropsMessageType) {
    return (

            <div className={s.message}>
                <img src={props.avatar}/>
                <div> {props.name}</div>
                <div> {props.message}?</div>
        </div>
    );
}

export default AlternativeMessage;
