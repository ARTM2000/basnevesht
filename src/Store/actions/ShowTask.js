import * as actionType from './actionTypes';

const rearangeTaskCards = (dispatch, cardIndex, taskIndex) => {
    return new Promise((resolve, reject) => {
        dispatch(onChangeTaskItemPos(cardIndex, taskIndex));
        setTimeout(resolve(true), 1000);
  });
};

const onChangeTaskItemPos = (cardIndex, taskIndex) => {
    return {
          type: actionType.CHANGE_TASK_LOOK,
          taskIndex: taskIndex,
          cardIndex: cardIndex
    }
}

const onArrangingCard = (cardIndex) => {
    return {
        type: actionType.REARRANGE_CARDS_INDEX,
        cardIndex: cardIndex
    }
}

export const onManagingEspecifiedTask = (cardIndex, taskIndex, allTask) => {
         return dispatch => rearangeTaskCards(dispatch, cardIndex, taskIndex)
         .then((res) => {
             if (allTask[cardIndex].taskCardDone && res) {
               dispatch(onArrangingCard(cardIndex));
               console.log("rearanged!");
             }
         }).then(() => {
             dispatch(onFilteringTasks(allTask));
             console.log("refiltered!");
         })
       };

export const onFilteringTasks = (allTask) => {
    return { 
        type: actionType.FIND_AND_STORE_CATG_TASK,
        allTasks: allTask
    };
}

export const onDeleteTask = cardIndex => {
    return {
        type: actionType.DELETE_TASK,
        cardIndex: cardIndex
    }
}