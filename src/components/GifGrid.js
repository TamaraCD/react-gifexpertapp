import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setimages] = useState([]);

    const { data:images, loading } = useFetchGifs(category);

    // console.log(data);
    console.log(loading);

    // useEffect( () => {
    //     getGifs( category ) //esta instruccion se ejecutara cuando el componente es renderizado por primera vez
    //     .then(imgs => setimages(imgs)); 
    // }, [category])
 
    return (
        <>
        <h3 className="animate__animated animate__flash">{ category }</h3>
        { loading && <p>Loading</p> }
        <div className= "card-grid">
            
                {
                    images.map((img) => (
                            // <li key= { id }>{ title }</li>
                            <GifGridItem 
                                key = { img.id }
                                { ...img }
                            />
                        ))
                }
            
        </div>
        </>
        
    )
}
