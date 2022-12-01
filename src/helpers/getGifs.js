

export const getGifs = async(category) => {
//asyn y await porque espera recobir datos expertnos del API
    const url =`https://api.giphy.com/v1/gifs/search?api_key=aeRt8hDKfRq8IIn2YJdh8zO8Z99CxD03&q=${category}&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map( img => ({
        //retornamos un objeto
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}