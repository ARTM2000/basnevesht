import React from "react";

import StyleSheet from "./TaskKeeper.module.css";
import plusIcon from "../../../assets/images/plus.png";
import deleteIcon from "../../../assets/images/delete.png";

const taskKeeper = (props) => {
  return (
    <div className={StyleSheet.RowInput}>
      <div className={StyleSheet.TaskKeeper}>
        {props.index === 0 ? (
          <input
            className={StyleSheet.FirstTask}
            placeholder="توضیح کار..."
            onChange={(event) => {
              props.onTask(event.target.value, props.index);
              // console.log(props.valueInserted);
            }}
            value={props.valueInserted}
          />
        ) : (
          <input
            className={StyleSheet.Task}
            placeholder="توضیح کار..."
            onChange={(event) => {
              props.onTask(event.target.value, props.index);
              // console.log(props.valueInserted);
            }}
          />
        )}
        <div className={StyleSheet.TaskController}>
          {props.index > 0 ? (
            <div className={StyleSheet.IconContainer} onClick={props.deleteRow}>
              <img
                src={deleteIcon}
                alt="deleteTask"
                className={StyleSheet.Icon}
                onClick={props.deleteRow}
              />
            </div>
          ) : null}
          <div className={StyleSheet.IconContainer} onClick={props.addRow}>
            <img
              src={plusIcon}
              alt="addMore"
              className={StyleSheet.Icon}
              onClick={props.addRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default taskKeeper;
