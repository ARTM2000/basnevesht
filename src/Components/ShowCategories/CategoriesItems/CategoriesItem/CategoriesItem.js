import React from 'react';

import StyleSheet from './CategoriesItem.module.css';

const categoriesItem = props => (
  <div className={StyleSheet.CatgButton} onClick={props.showCatg}>
    <div className={StyleSheet.NameContainer}>
      <p className={StyleSheet.CatgName}>{props.CatgName}</p>
    </div>
  </div>
);

export default categoriesItem;