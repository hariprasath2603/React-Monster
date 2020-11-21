import React from "react";
import "./card-list.css";

import Card from "../card/card";

const CardList = ({ monsterList, searchField }) =>{
  (monsterList = monsterList.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  ));
return (
  <div className="card-list">
    {monsterList.map((data) => (
      <Card key={data.id} data={data} />
    ))}
  </div>
)
    }

export default CardList;
