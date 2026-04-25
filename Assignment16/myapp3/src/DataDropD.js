// 2) Declare variable which contains array Data 

// let data  = ['C' , 'C++' , 'Java' , 'AdvJava' , 'WPT']

// display above variable data in Dropdown format 
//  on html page 

import { useState } from "react";

function DropDown(){


    let [data,setData]=useState(['C','C++','Java','AdvJava','WPT']);

    


    return(
        <>
        <select >
            {data.map((item,index)=>(
                <option key={index}>{item} </option>
            ))}
        </select>
        </>
    );
}

export default DropDown;