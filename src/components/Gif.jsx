function Gif({image}) {

    const{title, url}=image

  return(
      <li>
          <img src={url} alt={title} />
          <p>{title}</p>

      </li>
  ) 
   
}

export default Gif;

