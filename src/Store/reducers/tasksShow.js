import * as actionTypes from "../actions/actionTypes";

const initialState = {
    findCatg: '',
    catgTasks: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
      case actionTypes.ON_SEARCH_TASKS:
        return {
          ...state,
          findCatg: action.findCatg
        };

      case actionTypes.ON_DELETE_FIND_ITEM_CATG:
        return {
          ...state,
          findCatg: ""
        };

      case actionTypes.FIND_AND_STORE_CATG_TASK:
        const tasks = action.allTasks;
        const myCatgTask = tasks.filter((task) => {
            return task.catg === state.findCatg
        })
        return {
            ...state,
            catgTasks: myCatgTask
        }

      default : 
        return state
    }

}

export default reducer;