import React from "react";
import List from "./List/List";
import ListAdd from "./ListAdd/ListAdd";
import "./Todolist.css";

const Todolist = () => {
  const [valueInput, setValueInput] = React.useState([]);

  return (
    <div className="todolist">
      <div className="container">
        <div className="todolist__box">
          <ListAdd valueInput={valueInput} setValueInput={setValueInput} />
          {valueInput.map((el, index) => (
            <List
              key={index}
              index={index}
              listname={el}
              valueInput={valueInput}
              setValueInput={setValueInput}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todolist;
