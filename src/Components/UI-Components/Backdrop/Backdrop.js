import React from 'react';

import StyleSheet from './Backdrop.module.css';

const backDrop = (props) => (
    props.show ? <div className={StyleSheet.Backdrop} onClick={props.clicked}></div> : null
)

export default backDrop;