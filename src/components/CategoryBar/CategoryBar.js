import React from "react";
import { observer } from "mobx-react-lite";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";
import { useStore } from "../../hook/useStore";

const CategoryBar = observer(() => {
  const { category } = useStore();

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
