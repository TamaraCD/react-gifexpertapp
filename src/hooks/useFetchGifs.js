import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect( () => {
        getGifs( category ) //esta instruccion se ejecutara cuando el componente es renderizado por primera vez
        .then(imgs => {
            setTimeout(() => {
                
                setState({
                    data: imgs,
                    loading: false,
                })
            }, 500);
         }); 
    }, [category])


    return state; // { data:[], loading: true }
}