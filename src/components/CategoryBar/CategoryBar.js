import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

const CategoryBar = observer(() => {
  const { category } = useContext(Context);

  return (
    <ListGroup as="ul">
      {category.categories.map((item) => {
        return (
          <ListGroup.Item
            as="li"
            className="list-item"
            active={item.id === category.selectedCategory.id}
            onClick={() => category.setSelectedCategory(item)}
            key={item.id}
          >
            {item.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
});

export default CategoryBar;
