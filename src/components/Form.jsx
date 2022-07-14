import React, { useState } from "react";
import List from "./List.jsx";

function Form() {
  var [input, changeInput] = useState("");
  var [placeholder, changePlaceholder] = useState([]);

  function addItem(event) {
    event.preventDefault();
    changePlaceholder((oldArray) => [...oldArray, input]);
  }

  function inputItem(event) {
    changeInput(event.target.value);
  }

  function deleteItem(id) {
    changePlaceholder(
      placeholder.filter(function (value, index) {
        return index !== id;
      })
    );
  }

  return (
    <div>
      <div className="form">
        <input type="text" onChange={inputItem} value={input} />
        <button type="button" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {placeholder.map(function (item, index) {
            return (
              <List
                key={index}
                id={index}
                item={item}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Form;
