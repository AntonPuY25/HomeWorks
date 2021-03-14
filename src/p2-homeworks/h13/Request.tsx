import React, {useState} from "react";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import RequestApi from "./RequestApi";

const Request = () => {
    let arr = ['1', '2', '3']
    const [value, onChangeOption] = useState(arr[0]);
    const [valueRequest, setValue] = useState('')
    const sendRequest = () => {
        RequestApi.orderPost(value)
            .then(data => {
                setValue(data.info)
            })
            .catch((response) => {
                debugger
                setValue(response.response.data.errorText)
            })
    }
    return (
        <div>
            <div><SuperRadio
                name={"value"}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            /></div>
            <br/>
            <div><SuperButton sendRequest={sendRequest}> Send</SuperButton></div>

            <div>
                {valueRequest}
            </div>
        </div>

    )
}
export default Request