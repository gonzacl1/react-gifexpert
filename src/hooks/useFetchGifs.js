import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
    }
        //sirve para disparar efectos secundarios, algun proceso que se quiera ejecutar cuando algo suceda
        //useEffect no puede ser asyncrono.
        useEffect(() => {
          getImages();
        }, []);

  return {
    images,
    isLoading
    }
}
