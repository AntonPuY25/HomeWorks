import React, {useState} from "react";
import Affairs from "./Affairs";
import AlternativeAffairs from "./AlternativeAffairs";


export type AffairPriorityType = 'high' | "middle" | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: string
}

export type FilterType = "all" | AffairPriorityType;


const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: "React", priority: "high"},
    {_id: 2, name: "anime", priority: "low"},
    {_id: 3, name: "games", priority: "low"},
    {_id: 4, name: "work", priority: "high"},
    {_id: 5, name: "html & css", priority: "middle"},
];


export const filterAffairs = (affairs: Array<AffairType>, filter: string): Array<AffairType> => {
    if (filter === "all") return affairs
     if (filter === "high") return affairs.filter((a)=>a.priority==='high')
     if (filter === "low") return affairs.filter((a)=>a.priority==='low')
     if (filter === "middle") return affairs.filter((a)=>a.priority==='middle')


    return affairs;


}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    let deleteAfair = affairs.filter((affair) => affair._id !== _id)
    return deleteAfair;
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>("all");

    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div>
            <hr/>
            homeworks 2


            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>


            <hr/>
        </div>
    );
}

export default HW2;
