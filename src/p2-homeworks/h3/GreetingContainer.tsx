import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (value: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
        let name = event.currentTarget.value
        setName(name);
    };
    const addUser = () => {
        if (!name) {
            setError('Please, enter the name')
        } else {
            setError("")
            addUserCallback(name)
            alert(`Hello ${name}!`)
            setName("")
        }


    };

    let totalUsers = users.length;
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}

        />
    );
}

export default GreetingContainer;
