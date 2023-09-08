import React from "react";
import { data } from "./objects";
import {
  Button,
  Card,
  Text,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";

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

export function TagCards({ title, image, tag, preview }) {
  return (
    <div className="article-card">
     
        <Card maxHeight={"200px" } maxWidth={"550px"}>
          <CardHeader padding={"2px"}>
          <Text >{title}</Text>
          </CardHeader>
          <CardBody backgroundImage={image} padding={"2px"}>
            <Text>Tag:{tag}</Text>
            <Text>{preview}</Text>
          </CardBody>
          <Button>Read More</Button>
        </Card>
      
    </div>
  );
}

export function All({ title, tag, preview }) {
  return { ...data.map((item, ind) => <TagCards key={ind} {...data} />) };
}

export default function Wellbeing({ title, tag, preview }) {
  let wellbeingArticles = [...data].filter(
    (item, ind) => item.tag === "finance"
  );

  return (
    <>
      {wellbeingArticles.map((itm, ind) => (
        <TagCards key={ind} {...wellbeingArticles} />
      ))}
    </>
  );
}

export function Food({ title, tag, preview }) {
  let foodArticles = [...data].filter((item, ind) => item.tag === "food");

  return (
    <>
      {foodArticles.map((itm, ind) => (
        <TagCards key={ind} {...foodArticles} />
      ))}
    </>
  );
}

export function Finance({ title, tag, preview }) {
  let financeArticles = [...data].filter((item, ind) => item.tag === "finance");

  return (
    <>
      {financeArticles.map((itm, ind) => (
        <TagCards key={ind} {...financeArticles} />
      ))}
    </>
  );
}
