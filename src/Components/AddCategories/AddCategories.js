import React from 'react';

import StyleSheet from './AddCategories.module.css';

const addCategories = (props) => {

    const onSetNewCatg = (event) => {
        props.NewCatg(event.target.value);
    } 

    const onSubmit = (event) => {
        event.preventDefault();
        props.Add()
    }

    const onSubmitForCancel = (event) => {
        event.preventDefault();
        props.Cancel();
    }

    return (
      <div className={StyleSheet.AddCatg}>
        <form>
          <input
            className={StyleSheet.InsertNewCatg}
            type="text"
            placeholder="نام دسته بندی جدید..."
            onChange={onSetNewCatg}
            value={props.NewCatgValue}
          />
          <button className={StyleSheet.Add} onClick={onSubmit}>
            افزودن
          </button>
          <button className={StyleSheet.Cancel} onClick={onSubmitForCancel}>
            لغو
          </button>
        </form>
      </div>
    );
};

export default addCategories;