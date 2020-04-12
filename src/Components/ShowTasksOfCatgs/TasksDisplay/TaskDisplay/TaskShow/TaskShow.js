import React from 'react';

import StyleSheet from './TaskShow.module.css';

const taskShow = props => {

  const changePosOfTask = () => {
    props.onTaskPosChange(props.cardIndex, props.taskIndex, props.allTasks)
  }

  return props.task !== "" && props.task ? (
    <li
      className={
        props.isDone ? StyleSheet.TaskListItemIsDone : StyleSheet.TaskListItem
      }
      onClick={changePosOfTask}
    >
      {props.task}
    </li>
  ) : null;
}

export default taskShow;