import React, {  useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Blg.css";
import Article, { MainPost } from "./articles";
import { TagCards } from "./Tags";
import { data } from "./objects";






export default function Home(props) {
  return (
    <>
      <nav>
        <ul>
          {props.links.map((item, index) => {
            return <Navlink key={index} linkName={item} />;
          })}
        </ul>
      </nav>
    </>
  );
}

function Navlink({ linkName, myStyle }) {
  const [myColor, setMyColor] = useState("blue");

  const handleClick = () => setMyColor(!myColor);
  return (
    <li onClick={handleClick} style={{ color: myColor ? "red" : "blue" }}>
      {linkName}{" "}
    </li>
  );
}

function createStar(num) {
  return [...Array(num)];
}

export function Ratemovie({ highestRating = 5 }) {
  const [isSelected, setIsSelected] = useState(0);

  //  function handleClick(){
  //  setIsSelected(ind+1)
  // }

  return (
    <div>
      {createStar(highestRating).map((item, ind) => (
        <Star
          style={{ display: "inline-block" }}
          key={ind}
          selected={isSelected > ind}
          onSelect={() => setIsSelected(ind + 1)}
        />
      ))}
    </div>
  );
}

export function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "red" : "gray"} onClick={onSelect} />;
  
}

function mySorting(propertyName){
  return function sorting(obj1,obj2){

    let item1= obj1[propertyName].toLowerCase();
    let item2= obj2[propertyName].toLowerCase();

    if(item1>item2){return 1} else if(item1===item2){return 0} else{return -1}

  }
}

console.log(data.sort(mySorting("title")));

export function ArticleGrid({ obj }) {

  const [selectedArticle, setSelectedArticle] = useState(null);

  const showArticle = (article) => {
    setSelectedArticle(article);
  };

  console.log(obj)


  
  return (
    <>
      <h1 id="articlesTitle">
        {" "}
        <a name="articles" href="#articles"> Articles</a>
      </h1>
      
      <div className="articles-grid">
        {obj.map((item, ind) => {
          return <Article {...item} key={ind} myClick={()=>{showArticle(item)}} />;
        })}
      
      </div> 


      
    </>
  );
}



export function FullArticles({ obj }) {

  let randomPost = obj[Math.floor(Math.random() * obj.length)];
  console.log(randomPost)

  const [selectedArticle, setSelectedArticle] = useState(randomPost);

  const showArticle = (article) => {
    let mainArticle = document.querySelector(".mainArticle");
    mainArticle.classList.remove("d-none");
    setSelectedArticle(article);
  };

  console.log(obj);

  return (
    <>
      <div className="d-lg-flex flex-row" id="articleParent">
      <div className="articles-grid col-4" id="articleViewGrid">
          {obj.map((item, index) => (
            <Article {...item} key={index} myClick={() => showArticle(item)} />
          ))
          }
        </div>

        <div className="mainArticle">
          { <MainPost {...selectedArticle} /> }
        </div>

        
      </div>
    </>
  );
}





