import React from "react";
import { Cards } from "../cards/cards.component";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.users.map((user) => (
        <Cards user={user} key={user.id}/>
      ))}
    </div>
  );
};
