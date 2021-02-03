import React, {useState} from "react";
import {AllActions, homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id}>
            <span><b>Name: </b>{p.name}</span>
            <span><b>Age: </b>{p.age}</span>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, AllActions.ActionUp))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, AllActions.ActionDown))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, AllActions.ActionAge))

    return (
        <div>
            <hr/>
            homeworks 8


            {finalPeople}
            <div><SuperButton onClick={sortUp}>Sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>Sort down </SuperButton></div>
            <div><SuperButton onClick={sortAge}>Age 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
