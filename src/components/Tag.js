import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./spinner"
import useGif from "../hooks/useGif";

const API_KEY ="VdmwH4tg2Keu26NwjrhD7adeJ60Eo7Zg";
export default function Tag(){  
    const[text,settext] = useState('');
    const {spin,gif,fetchData} = useGif(); 
    function generatehandler(){
        fetchData(text);
    }
    return(
    <div className="w-3/6 bg-blue-600 rounded-md flex flex-col items-center my-10 "  >
        <div className="text-2xl underline text-center my-5 " >RANDOM {text} GIF</div>
        <div>
                {spin ? <Spinner/>:<div>
                    <img src={gif} className="h-72" ></img>
                </div>}
                </div>
        <input type="text" onChange={(e)=>settext(e.target.value)} value={text} placeholder="Enter your text" className="w-3/6 my-5 rounded-md p-2 text-center "/>
        <button onClick={generatehandler} className="text-2xl w-9/12  mb-[10px] rou bg-yellow-400">Generate</button>
    </div>
    
);
}