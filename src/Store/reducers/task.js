import * as actionTypes from '../actions/actionTypes';

const intialState = {
  taskCategories: ["دانشگاه", "متفرقه"],
  tasks: [
    {
      catg: "دانشگاه",
      title: "درس اقتصاد مهندسی",
      taskCardDone: false,
      task: [
        { detail: "جمع آوری اطاعات", done: false },
        { detail: "صحبت کردن با استاد درباره پروژه", done: false },
        { detail: "مطرح کردن جزئیات با هم گروهی ها", done: false }
      ]
    }
  ]
};

const reducer = (state = intialState, action) => {
    switch (action.type){
        case actionTypes.CREATE_TASK: 
            const task = {
                catg: action.catg,
                title: action.title,
                task: action.task
            };
            const tasks = [ ...state.tasks ];
            tasks.unshift(task);
            return {
                ...state,
                tasks: tasks
            }

        case actionTypes.CREATE_CATEGORY:
            const catgs = [ ...state.taskCategories ];
            catgs.unshift(action.catg);
            return {
                ...state,
                taskCategories: catgs
            }

        case actionTypes.CHANGE_TASK_LOOK :
            const allTasksSample = [...state.tasks];
            const tasksSample = {...allTasksSample[action.cardIndex]};
            const taskSample = {...tasksSample.task[action.taskIndex]};
            taskSample.done = !taskSample.done;
            tasksSample.task[action.taskIndex] = taskSample;

            let isDone = true;
            tasksSample.task.map(el => {
              isDone = isDone && el.done;
              return null;
            })

            if (isDone) {
              tasksSample.taskCardDone = true;
              //---------------Change the index of doneCard----------------
              // let tool = tasksSample.task[action.taskIndex];
              console.log('taskDone!')
            }else {
              tasksSample.taskCardDone = false;
            }
            allTasksSample[action.cardIndex] = tasksSample;

            return {
              ...state,
              tasks: allTasksSample
            }

        case actionTypes.REARRANGE_CARDS_INDEX: 
            const rearrengedTaskedList = [...state.tasks];
            if (rearrengedTaskedList[action.cardIndex].taskCardDone) {
              for (
                let i = action.cardIndex;
                i <= rearrengedTaskedList.length - 2;
                i++
              ) {
                let tool = rearrengedTaskedList[i];
                rearrengedTaskedList[i] = rearrengedTaskedList[i + 1];
                rearrengedTaskedList[i + 1] = tool;
              }
            }

            return {
              ...state,
              tasks: rearrengedTaskedList
            }
        case actionTypes.DELETE_TASK: 
            const lastTaskSample = [...state.tasks];
            lastTaskSample.splice(action.cardIndex, 1);

            return {
              ...state,
              tasks: lastTaskSample
            }

        default:
            return state;

    }
}

export default reducer;