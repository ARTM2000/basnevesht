import React from 'react';
import { connect } from 'react-redux';

import StyleSheet from './CategoriesItems.module.css';
import CategoriesItem from './CategoriesItem/CategoriesItem';
import * as action from '../../../Store/actions/actionTypes';

const categoriesItems = props => {

  const onShowingTask = (element) => {
    props.onSearchingCatg(element);
    props.onFilteringTasks(props.allTasks);
  }

  return (
    <React.Fragment>
      <h3 className={StyleSheet.CategoriesListTitle}>دسته بندی ها :</h3>
      <div className={StyleSheet.ContainerCatg}>
        {props.ctagS.map((el, index) => {
          return (
            <CategoriesItem
              key={index}
              CatgName={el}
              showCatg={() => onShowingTask(el)}
            />
          );
        })}
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchingCatg: catg =>
      dispatch({ type: action.ON_SEARCH_TASKS, findCatg: catg }),
    onFilteringTasks: allTasks =>
      dispatch({ type: action.FIND_AND_STORE_CATG_TASK, allTasks: allTasks})
  };
}

export default connect(null, mapDispatchToProps)(categoriesItems);