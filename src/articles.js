import React,{useState} from "react";







export default function Article({ Article, image, title, preview ,myClick}) {
    const [fullArticle, setFullArticle] = useState(preview);
  
    const handleClick = () => {
      setFullArticle(!fullArticle);
    };
  
    return (
      <div className="article-card" onClick={myClick} >
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{fullArticle ? preview : Article}</p>
        <button className="read-more" myClick={handleClick}>
          Read-more
        </button>
      </div>
    );
  }



  export function MainPost({ Article, image, title, preview}){

    return(
        <>
        <div className="col-12 col-md-10" id="articleView">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{ Article}</p>

        </div>
        
        </>
    )
  }

  