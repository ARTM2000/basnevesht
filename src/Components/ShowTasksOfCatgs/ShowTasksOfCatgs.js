import React from 'react';

import StyleSheet from './ShowTaskOfCatg.module.css';
import TasksDisplay from './TasksDisplay/TasksDisplay';
import Spinner from '../UI-Components/Spinner/Spinner';

const showTaskOfCatg = props => {

  return (
    <div className={StyleSheet.Main}>
      <div className={StyleSheet.Header}>
        <p className={StyleSheet.BackToCatgs} onClick={props.deleteFindCatg}>
          بازگشت به دسته بندی
        </p>
        <h2 className={StyleSheet.CatgName}>{props.CatgName}</h2>
      </div>
      <div className={StyleSheet.TasksContainers}>
        {props.loading && !props.CatgTask ? (
          <Spinner />
        ) : (
          <TasksDisplay
            tasksLists={props.CatgTask}
            onTaskPosChange={props.changeTaskPos}
            changeCardPos={props.changeCardPos}
            allTasks={props.allTasks}
            deleteCard={props.deleteCard}
          />
        )}
      </div>
    </div>
  );
};

export default showTaskOfCatg;

//{props.CatgName}