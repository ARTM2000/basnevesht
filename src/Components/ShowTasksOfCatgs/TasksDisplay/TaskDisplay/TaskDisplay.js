import React from 'react';

import StyleSheet from './TaskDisplay.module.css';
import TaskShow from './TaskShow/TaskShow';

const taskDisplay = (props) => {

    return (
      <div
        className={
          props.taskCardDone ? StyleSheet.TaskCardDone : StyleSheet.TaskCard
        }
      >
        <div className={StyleSheet.TitleContainer}>
          <h3 className={StyleSheet.Title}>{props.title}</h3>
        </div>
        <hr />
        <ol className={StyleSheet.TaskContainer}>
          {props.task.map((thisTask, index) => {
            return (
              <TaskShow
                key={index}
                task={thisTask.detail}
                isDone={thisTask.done}
                taskIndex={index}
                cardIndex={props.cardIndex}
                onTaskPosChange={props.onTaskPosChange}
                allTasks={props.allTasks}
              />
            );
          })}
        </ol>
        {props.taskCardDone ? (
          <button
            className={StyleSheet.DeleteTaskBtnAble}
            onClick={() => props.deleteCard(props.cardIndex)}
          >
            حذف
          </button>
        ) : null}
      </div>
    );
}

export default taskDisplay;

// {
//   props.TaskItems.map((el, index) => {
//     return <TaskShow key={index} task={el.task} />;
//   });
// }

// props.TaskItems.map((el, index) => {
//   return (
//     <div key={index} className={StyleSheet.TaskCard}>
//       <div className={StyleSheet.TitleContainer}>
//         <h3 className={StyleSheet.Title}>{el.title}</h3>
//       </div>
//       <ul className={StyleSheet.TaskContainer}>
//         {el.task.map((thisTask, index) => {
//           return <TaskShow key={index} task={thisTask} />;
//         })}
//       </ul>
//     </div>
//   );
// });