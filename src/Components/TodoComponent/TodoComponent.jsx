import React from "react";
import classes from "./TodoComponent.module.css";

import SvgIcon from "../../assets/img/checkbox-unchecked";
import SvgIconActive from "../../assets/img//checkbox-checked";

const TodoComponent = ({ item, removeItem, statusTodo }) => {
  return (
    <div className={classes.todo__item}>
      <div onClick={() => statusTodo(item)} className={classes.todoContent}>
        <div
          className={classes.containterTextAndCheckbox}
        >
          {
            !item.status ?  <SvgIconActive/> :<SvgIcon />
          }
          
          <p className={item.status ? classes.todo__textActive : classes.todo__textUnActive}>{item.body}</p>
        </div>
      </div>
      <button onClick={() => removeItem(item)} className={classes.todo__btn}>
        <img src="assets/img/icon1.svg" alt="" />
      </button>
    </div>
  );
};

export default TodoComponent;
