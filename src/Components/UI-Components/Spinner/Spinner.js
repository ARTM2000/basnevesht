import React from 'react';

import StyleSheet from './Spinner.module.css';

const spinner = () => (
  <div className={StyleSheet.SpinnerHolder}>
    <div className={StyleSheet.Spinner}></div>
  </div>
);

export default spinner;