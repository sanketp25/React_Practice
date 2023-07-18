import React from "react";
import {Fragment, useState } from "react";



interface Props{
  items: string[],
  heading: string,
  onSelectItem:  (item:string) => void
}





function ListGroup({items,heading,onSelectItem}:Props) {
  const [selectedIndex,setSelectedIndex] = useState(-1);
  const getMessage = () => {
    return items.length === 0 ? "No Item was found" : null;
  };
  return (

    <Fragment>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => { 
              if(selectedIndex !== null)
                setSelectedIndex(index); 
                onSelectItem(item)
              }
            }
            
          >
            {item}
          </li> /* Adding key will help enable react identify unique elements*/
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
