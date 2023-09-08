import React, {  useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Blg.css";
import { data } from "./objects";
import { Button} from "@chakra-ui/react";

import {TagCards,Tags} from "./Tags";

const tags = data.map((item, index) => {
  return item.tag;
});

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const myTags = ["All", ...removeDuplicates(tags)];

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

export function ArticleGrid({ obj }) {
  return (
    <>
      <h1 id="articlesTitle">
        {" "}
        <a name="articles" href="#articles"> Articles</a>
      </h1>
      <div className="articles-grid">
        {obj.map((item, ind) => {
          return <Article {...item} key={ind} />;
        })}
      </div>
    </>
  );
}

export function Article({ Article, image, title, preview }) {
  const [fullArticle, setFullArticle] = useState(preview);

  const handleClick = () => {
    setFullArticle(!fullArticle);
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{fullArticle ? preview : Article}</p>
      <button className="read-more" onClick={handleClick}>
        Read-more
      </button>
    </div>
  );
}

export function Intro({ tag }) {

  const [tags, setTags] = useState([]);

  function handleClick(tag){
  
    let myArr = [...data].filter(
      (item, index) => item.tag === tag
    );
    tag === "All" ? setTags([...data]) : setTags(myArr);
  
  }
  

  
  return (
    <>
      <section id="home">
        <div className="hero">
          <h1>Discover Inner Peace</h1>
          <p>
            Embrace <strong>serenity</strong>, find balance, and nourish your
            soul.
          </p>

          <a href="#articles">
            <Button
              children={"Explore Articles"}
              mb={2}
              backgroundColor={"chocolate"}
            />{" "}
          </a>
          <div id="tags" className="mt-2 d-inline-block">
            <p>
              TAGS:
              {myTags.map((itm, ind) => (
                <Tags
                  tag={itm}
                  key={ind}
                myClick={handleClick}
             
                />
              ))}
            </p>
          </div>
          <div>
            {tags.map((item, index, arr) => {
              
              return (
                <TagCards
                  key={index} // Assuming item.title is a unique identifier
                  title={item.title}
                  tag={item.tag}
                  preview={item.preview}
                  {...tags}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>Our Agenda</h2>
          <p>
            Welcome to Inner Peace Wellness Blog, your guide to finding
            tranquility amidst the chaos of modern life. Our mission is to
            provide you with valuable insights, practices, and resources to help
            you cultivate inner peace and live a more fulfilling life.
          </p>
        </div>
      </section>
    </>
  );
}


