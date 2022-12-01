

import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
    // 1.categories para almacenar categorias  y luego el punto inicial de nuestro estado o useState
    //espacio en memoria para almacenar las categorias y se inicializa como un arreglo, no se puede
    // poner condiciones en el state de react if...
    const [categories, setCategories] = useState(['One Punch']);
    // 2. agregar categoría, 
    // tratar de evitar el push para insertar en arreglos, el push en react es utilizado para mutar un objeto 
    // setCategories se usa para cuando queremos cambiar categorías
    const onAddCategory =(newCategory) =>{

        if ( categories.includes(newCategory)) return;
        setCategories([newCategory,...categories ]);
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* mandamos una property a AddCategory */}
            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={onAddCategory}
            />

            {/* Listado de GIF */}
            
                {
                    categories.map((category) => (
                        <GifGrid 
                        key={category}
                        category={category}/>

                    ))
                }
           
                {/* Gif Item */}
        </>
    )
}