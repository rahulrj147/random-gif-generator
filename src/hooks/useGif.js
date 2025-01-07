import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY ="rxJqMaXkyFxSgEmjQj7mmQViKrg4jXdh";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

export default function useGif(){
    const[spin,setsip] = useState(false);
    const[gif,setgif] = useState('');

    async function fetchData(tag) {
        setsip(true);
        try {
            const output = await axios.get(tag ? `${url}&tag=${tag}` : url );
            setgif(output.data.data.images.original.url);
        } catch (error) {
            console.error("Error fetching data:", error.response ? error.response.data : error.message);
        }
        setsip(false);
    }

    useEffect(()=>{
        fetchData("");
    },[])

    return {spin,gif,fetchData};
}