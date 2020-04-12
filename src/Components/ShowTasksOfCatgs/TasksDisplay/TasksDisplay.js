import React from 'react';
import TaskDisplay from './TaskDisplay/TaskDisplay';

const TasksDisplay = props => props.tasksLists.map((el, index) => {
    return (
      <TaskDisplay
        key={index}
        cardIndex={index}
        taskCardDone={el.taskCardDone}
        task={el.task}
        title={el.title}
        onTaskPosChange={props.onTaskPosChange}
        changeCardPos={props.changeCardPos}
        allTasks={props.allTasks}
        deleteCard={props.deleteCard}
      />
    );
})

export default TasksDisplay;

//<TaskDisplay TaskItems={props.tasksLists} />