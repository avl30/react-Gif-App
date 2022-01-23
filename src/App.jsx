import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

import {useState} from "react"


function App() {
   
  
  const [category, setCategory] = useState([]);
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory
         setCategory={setCategory}
      />
      <hr />
      

      <ol>
        {category.map(cat=>(
          
          <GifGrid 
            key={cat}
            cat={cat}
            
          />
        ))}
      </ol>

      
  
    
    </>
    
  )
}

export default App
