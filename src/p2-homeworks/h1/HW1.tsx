import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

const messageData = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Anton",
    message: "Did you press a button",
    time: "22:00",
};
const messageData1 = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Alex",
    message: "No,and you?",

};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            should work (должно работать)

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            <AlternativeMessage
                avatar={messageData1.avatar}
                name={messageData1.name}
                message={messageData1.message}

            />


            <hr/>
        </div>
    );
}

export default HW1;
