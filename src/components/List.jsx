import React, { useState } from "react";

function List(Prop) {
  var [state, changeState] = useState("none");

  //function clickItem() {
  //  state === "none" ? changeState("line-through") : changeState("none");
  //}

  //return (
  //  <li onClick={clickItem} style={{ textDecoration: state }}>
  //    {Prop.item}
  //  </li>
  //);

  return (
    <li
      onClick={function () {
        Prop.deleteItem(Prop.id);
      }}
      style={{ textDecoration: state }}
    >
      {Prop.item}
    </li>
  );
}

export default List;
