import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Baby Yoda']);

    // const handleAdd = () => {
    //     const newSerie = 'Sailor Moon';
    //     // setCategories([...categories, newSerie]);
    //     setCategories((cat) => [...cat, newSerie]);
    //     
    // }
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick = { handleAdd }>Agregar</button> */}

           <ol>
               { 
                categories.map(category => (
                    // <li key= { cat }>{ cat }</li>
                    <GifGrid 
                        key = { category } 
                        category = { category }
                    />
                ))
               }
           </ol>
        </div>
    );
}

export default GifExpertApp;