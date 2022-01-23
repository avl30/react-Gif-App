
export const getGifs= async(cat)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cat)}&limit=10&api_key=XVXuULP5giQ85IaIiYbLldyHGa7Ne09o`
    const resp = await fetch(url)
    const{data}= await resp.json()
    
    const gif= data.map(imags=>(
        {
            id:imags.id,
            title: imags.title,
            url:imags.images.downsized_medium.url
        }
    ))
       
    return gif
    


}