import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner"
import useGif from "../hooks/useGif";

export default function Random(){

    const{spin,gif,fetchData} = useGif();
    return(
    
    <div className="w-3/6 bg-green-600 rounded-md flex flex-col items-center relative "  >
        <div className="text-2xl underline text-center my-5 " >A RANDOM GIF</div>
        <div>
        {spin ? <Spinner className=" " />  :    <div>
            <img src={gif} className="h-72" ></img>
        </div>}
        </div>
     
        <button onClick={()=> {fetchData()}} className="text-2xl w-9/12  my-[10px] bg-yellow-400 rounded-md ">Generate</button>
    </div>
    
);
}