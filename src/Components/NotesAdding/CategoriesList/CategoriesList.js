import React from 'react';

import StyleSheet from './CategoriesList.module.css';

const categoriesList = (props) => (
    <React.Fragment>
        <option className={StyleSheet.Option} value={props.value}>{props.displayValue}</option>
    </React.Fragment>
);

export default categoriesList;