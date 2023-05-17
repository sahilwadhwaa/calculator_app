import { useDispatch } from "react-redux"
import { addCalc } from "../features/counter/calcSlice";
import { useState } from "react";

export const CalcName= ({display, calc}) =>{
     
    const dispatch= useDispatch();
    const [name, setName]= useState("");

    let onSave= () => {
        if(name.length === 0){
            alert("Enter the name")
            return
        }
        let calc_details= {
            name: name,
            calculation: calc,
            result: display,
            id: Math.random() * 10
        }
        dispatch(addCalc(calc_details));
        setName("");
    }
    return (
        <div>
            <div className="text-3xl font-bold py-5">Calculation Name</div>
            <div className="flex">
                <div className="pr-3">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Name" value={name} onChange={(e) =>setName(e.target.value)}/>
                </div>
                <button 
                    onClick={onSave}
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline" type="button">
                    Save
                </button>
            </div>   
        </div>
    )
}