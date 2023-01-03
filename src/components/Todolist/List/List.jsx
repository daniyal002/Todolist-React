import React from "react";
import Button from "../../Button/Button";
import "./List.css";

const List = ({ listname, valueInput, setValueInput, index }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  const removeList = (arr) => {
    setValueInput([...arr.slice(0, index), ...arr.slice(index + 1)]);
  };

  return (
    <>
      {checked ? (
        <div className="listTrue">
          <p className="list__listName listName">{listname}</p>
          <label className="listName__listLabel listLabel">
            <span className="listLabel__listText listText  ">Выполнено</span>
            <input
              type="checkbox"
              id="checkboxList"
              className="listLabel__listcheckbox listcheckbox"
              checked={checked}
              onChange={handleChange}
            />
          </label>
          <Button value="Удалить" func={() => removeList(valueInput)} />
        </div>
      ) : (
        <div className="list">
          <p className="list__listName listName">{listname}</p>
          <label className="listName__listLabel listLabel">
            <span className="listLabel__listText listText listTextTrue ">
              Не выполнено
            </span>
            <input
              type="checkbox"
              id="checkboxList"
              className="listLabel__listcheckbox listcheckbox"
              checked={checked}
              onChange={handleChange}
            />
          </label>
          <Button value="Удалить" func={() => removeList(valueInput)} />
        </div>
      )}
    </>
  );
};

export default List;
