import React from 'react';

import StyleSheet from './ShowCategories.module.css';
import CategoriesItems from './CategoriesItems/CategoriesItems';

const showCategories = (props) => {

    return (
      <div className={StyleSheet.Main}>
        <div className={StyleSheet.NotificationsPart}>اعلانات</div>
        <CategoriesItems
          allTasks={props.allTasks}
          ctagS={props.ctagS}
          onFilteringTasks={props.onFilteringTasks}
          onSearchingCatg={props.onSearchingCatg}
        />
      </div>
    );
};

export default showCategories;