import React,{useState} from "react";







export default function Article({ Article, image, title, preview ,myClick}) {
    const [fullArticle, setFullArticle] = useState(preview);
  
    const handleClick = () => {
      setFullArticle(!fullArticle);
    };
  
    return (
      <div className="article-card" >
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{ preview }</p>
        <button className="read-more" >
          Read-more
        </button>
      </div>
    );
  }


  