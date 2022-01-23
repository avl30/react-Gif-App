import {useState} from "react";
import PropTypes from "prop-types";

function AddCategory({setCategory}) {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = e =>{
        e.preventDefault()
        
        if(inputValue.trim()==="" || Number(inputValue)){
             console.log("error...");
        return
    }
    setCategory( [inputValue])
    setInputValue("")

    }

    


  return(

    <form onSubmit={handleSubmit}>
        <input type="text"
               value={inputValue}
               onChange={e =>setInputValue(e.target.value)}
        />
    </form>
      
  
  )
  
  
}
export default AddCategory;

AddCategory.propTypes={
    setCategory: PropTypes.func.isRequired
}