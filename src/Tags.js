import React ,{useState}from "react";
import { data } from "./objects";
import {
  Button,
  Card,
  Text,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";


const tags = data.map((item, index) => {
  return item.tag;
});

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const myTags = ["All", ...removeDuplicates(tags)];

export function Tags({ tag, myClick }) {
  return (
    <>
      <Button
        ml={2}
        size={"sm"}
        backgroundColor={"chocolate"}
        onClick={() => myClick(tag)}
      >
        {tag}
      </Button>
    </>
  );
}

export function TagCards({ title, image, tag, preview,myClick }) {
  
  return (
    <div className="tagCards" style={{margin:"0px 10px"}} onClick={myClick}>
     
        <Card maxHeight={"200px" } maxWidth={"550px"}>
          <CardHeader padding={"2px"}>
          <Text >{title}</Text>
          </CardHeader>
          <CardBody backgroundImage={image} padding={"2px"}>
            <Text>Tag:{tag}</Text>
            <Text>{preview}</Text>
          </CardBody>
          <Button >Read More</Button>
        </Card>
      
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
          <div className="mx-auto">
            {tags.map((item, index) => {
              
              return (
                <TagCards
                  key={index} 
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




