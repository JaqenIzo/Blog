import React, {  useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Blg.css";
import Article from "./articles";
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

  const[initial,setInitial] = useState([...data])

  function x(ind){
   
    setInitial()

  }
  return (
    <>
      <h1 id="articlesTitle">
        {" "}
        <a name="articles" href="#articles"> Articles</a>
      </h1>
      
     {initial? <div className="articles-grid">
        {initial.map((item, ind) => {
          return <Article {...item} key={ind} />;
        })}
      
      </div>:  <FullArticles obj={[...data]} />}
    </>
  );
}

export function FullArticles(obj){

  

  return(
    <>
    <div className="container">
      <div className="articles-grid col-12 col-md-7">
        <Article {...obj[0]}/>
      </div>

      {/* <div className="articles-grid col-">
        {myObj.map(
          (item,index)=>{
            return <TagCards {...item} key={index}/>
          }
        )}

      </div> */}




    </div>
    </>
  )
}





