import Gif from "./Gif";
import { getGifs } from "../helpers/getGif";
import {useEffect, useState} from "react"

function GifGrid({cat}) {

   const [images, setImages] = useState([]);

   useEffect(() => {
     
        getGifs(cat)
          .then(setImages)

          

         
     
   }, [cat]);

  
  
 
 return (
      <div>
            <h3>
                {cat}
            </h3>
            
            <ol className="list">
                {images.length>0 ?images.map(image =>(
                    <Gif 
                    key={image.id}
                    image={image}
                    />
                )):<p>Loading.....</p> }
                
            </ol>
        </div>
)}

export default GifGrid;
