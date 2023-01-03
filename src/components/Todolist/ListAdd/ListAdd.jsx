import React from "react";
import Button from "../../Button/Button";
import "./ListAdd.css";

const ListAdd = ({ valueInput, setValueInput }) => {
  const addValue = (arr) => {
    let values = document.getElementById("inputlist").value;
    setValueInput([...arr, values]);
  };
  return (
    <div className="listadd">
      <input
        type="text"
        className="listadd__listaddinput listaddinput"
        id="inputlist"
        placeholder="Введите задачу"
      />
      {/* <button onClick={() => addValue(valueInput)}>Закрепить задачу</button> */}
      <Button value="Закрепить задачу" func={() => addValue(valueInput)} />
    </div>
  );
};

export default ListAdd;
