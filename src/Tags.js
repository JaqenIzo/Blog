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
    <div className="article-card ">
     
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

