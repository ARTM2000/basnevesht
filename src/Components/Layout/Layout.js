import React from 'react';

import StyleSheet from './Layout.module.css';

const Layout = (props) => {

    // const listIcon = [];

    return(
        <div className={StyleSheet.Layout}>
            <div className={StyleSheet.NavBar}></div>
            {props.children}
        </div>
    )
};

export default Layout;