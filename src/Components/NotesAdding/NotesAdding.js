import React from 'react';

import StyleSheet from './noteAdding.module.css';
import TaskKeeper from './TasksKeeper/TasksKeeper';
import CategoriesList from './CategoriesList/CategoriesList';

const noteAdding = (props) => {

    const onSetTitle = (event) => {
        props.onSetTitle(event.target.value);
    } 

    const onSetCatg = event => {
      props.onSetCatg(event.target.value);
      // event.target.value = 'دسته بندی'
    }; 

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (props.title !== "" && props.currentCat !== "" && props.tasks[0].detail !== "") {
          props.onPost();
          props.changeSubmitAlerm(
            <div className={StyleSheet.SuccessAlerm}>با موفقیت ذخیره شد</div>
          );
          setTimeout(() => props.changeSubmitAlerm(null), 2500);
        }else {
          // alert('invalid inputs');
          props.changeSubmitAlerm(
            <div className={StyleSheet.FailurAlerm}>
              مشکلی در فرآیند بوجود آمده است
            </div>
          );
          setTimeout(() => props.changeSubmitAlerm(null), 2500);
        }
        
        // document.getElementById("newTitleAdded").value = '';
        
    } 


    return (
      <div className={StyleSheet.Main}>
        <div className={StyleSheet.Header}>
          <h2>افزودن...</h2>
        </div>
        <div className={StyleSheet.AddingPart}>
          <form>
            <input
              onChange={onSetTitle}
              type="text"
              className={StyleSheet.Title}
              placeholder="عنوان..."
              value={props.title}
            />
            <br />
            <div className={StyleSheet.CatgControl}>
              <select
                className={StyleSheet.Categories}
                onChange={onSetCatg}
                value={props.currentCat}
              >
                <option value="" className={StyleSheet.Option}>
                  دسته بندی
                </option>
                {props.ctags.map((el, index) => {
                  return (
                    <CategoriesList key={index} value={el} displayValue={el} />
                  );
                })}
              </select>
              <p
                className={StyleSheet.AddCatg}
                onClick={() => {
                  props.onAddCatgMode();
                }}
              >
                ایجاد دسته بندی جدید
              </p>
            </div>
            <hr className={StyleSheet.Divider} />
            {props.taskR.map((_, index) => (
              <TaskKeeper
                key={index}
                onTask={props.onSetTask}
                addRow={() => props.addRow(index)}
                deleteRow={() => props.deleteRow(index)}
                index={index}
                valueInserted={
                  props.tasks[index] ? props.tasks[index].detail : ""
                }
              />
            ))}
            {/* <TaskKeeper onTask={props.onSetTask} addRow={props.addRow} /> */}
            <button className={StyleSheet.StoreIt} onClick={onSubmitHandler}>
              ذخیره
            </button>
          </form>
          {props.submitAlerm}
        </div>
      </div>
    );
}

export default noteAdding;