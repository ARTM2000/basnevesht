import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as action from '../../Store/actions/actionTypes';
import * as actionFunc from '../../Store/actions/index';
import NoteAdding from '../../Components/NotesAdding/NotesAdding';
import ShowCategories from '../../Components/ShowCategories/ShowCategories';
import ShowTaskOfCatg from '../../Components/ShowTasksOfCatgs/ShowTasksOfCatgs';
import AddCategories from '../../Components/AddCategories/AddCategories';
import Modal from '../../Components/UI-Components/Modal/Modal';

class Dashboard extends Component {
  state = {
    newTask: {
      category: "",
      title: "",
      task: [{ detail: "" }]
    },
    taskRows: [""],
    addCatg: false,
    newCatg: "",
    espesifiedTask: null,
    loading: true,
    submitAlerm: null,
  };

  componentDidMount() {
    // console.log(this.props.requestedCatgName);
    let count = 0;
    this.taskUpdate = setInterval(() => {
      if (this.props.catgRequested && this.state.loading) {
        this.setState({ loading: false });
        this.props.updateCatgTasks(this.props.allTasks);
      }
      if (
        this.state.espesifiedTask !== this.props.CatgTask &&
        !this.state.loading &&
        count > 0
      ) {
        // this.setState({ espesifiedTask: this.props.CatgTask });
        this.setState({ loading: true });
      }
      console.log("checked!");
      count++;
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.taskUpdate);
  }

  onSetCatg = catg => {
    let newWork = { ...this.state.newTask };
    newWork.category = catg;

    this.setState({ newTask: newWork });
  };
  onSetNewTitle = title => {
    let newWork = { ...this.state.newTask };
    newWork.title = title;

    this.setState({ newTask: newWork });
  };
  onSetNewTask = (task, index) => {
    let newWork = { ...this.state.newTask };
    let worksSample = [...newWork.task];
    worksSample[index] = { detail: task, done: false };
    newWork.task = worksSample;

    this.setState({ newTask: newWork });
  };

  onAddnewTag = () => {
    this.setState(prevState => {
      return {
        addCatg: !prevState.addCatg
      };
    });
  };

  addRow = index => {
    let taskRowsSample = [...this.state.taskRows];
    taskRowsSample.splice(index + 1, 0, "");
    this.setState({ taskRows: taskRowsSample });
  };

  deleteRow = index => {
    if (index > 0) {
      let taskCardSample = [ ...this.state.newTask.task ]
      let taskRowsSample = [...this.state.taskRows];
      taskCardSample.splice(index, 1);
      console.log(taskCardSample);
      taskRowsSample.splice(index, 1);
      this.setState({ newTask:{
        ...this.state.newTask,
        task: taskCardSample
      } ,taskRows: taskRowsSample });

    }
  };

  onPostTask = () => {
    this.props.setTask(
      this.state.newTask.category,
      this.state.newTask.title,
      this.state.newTask.task
    );
    console.log(this.state.newTask.title);
    console.log(this.state.newTask.category);
    console.log(this.state.newTask.task);
    let newTaskCleaning = { ...this.state.newTask };
    newTaskCleaning.task = [{ detail: "" }];
    newTaskCleaning.title = "";
    newTaskCleaning.category = "";

    this.setState({ taskRows: [""] });
    this.setState({ newTask: newTaskCleaning });
  };

  onSaveNewCatg = newCatg => {
    this.setState({ newCatg: newCatg });
  };

  onPublishNewCategories = () => {
    if (this.state.newCatg !== "") {
      this.props.newCategory(this.state.newCatg);
    } else {
      alert("مشکلی برای ایجاد دسته بندی بوجود آمده است");
    }
    this.setState({ newCatg: "" });
    this.onAddnewTag();
    console.log(this.props.ctagS);
  };

  render() {
    return (
      <React.Fragment>
        <Modal showP={this.state.addCatg} modalClosed={this.onAddnewTag}>
          <AddCategories
            NewCatg={this.onSaveNewCatg}
            Add={this.onPublishNewCategories}
            Cancel={this.onAddnewTag}
            NewCatgValue={this.state.newCatg}
          />
        </Modal>
        <NoteAdding
          onSetTask={this.onSetNewTask}
          onSetTitle={this.onSetNewTitle}
          title={this.state.newTask.title}
          onSetCatg={this.onSetCatg}
          newCatg={this.props.newCategory}
          ctags={this.props.ctagS}
          onPost={this.onPostTask}
          addRow={this.addRow}
          deleteRow={this.deleteRow}
          tasks={this.state.newTask.task}
          taskR={this.state.taskRows}
          currentCat={this.state.newTask.category}
          onAddCatgMode={this.onAddnewTag}
          findCatgFilled={this.props.catgRequested}
          submitAlerm={this.state.submitAlerm}
          changeSubmitAlerm={(alerm) => this.setState({submitAlerm : alerm})}
        />
        {this.props.catgRequested ? (
          <ShowTaskOfCatg
            CatgName={this.props.CatgName}
            CatgTask={this.props.CatgTask}
            deleteFindCatg={this.props.deleteFindCatg}
            loading={this.state.loading}
            changeTaskPos={this.props.onChangeTaskItemPos}
            changeCardPos={this.props.onChangeCardPos}
            allTasks={this.props.allTasks}
            deleteCard={this.props.onDeleteCard}
          />
        ) : (
          <ShowCategories
            allTasks={this.props.allTasks}
            ctagS={this.props.ctagS}
            onSearchingCatg={this.props.onSearchingCatg}
            onFilteringTasks={this.props.onFilteringTasks}
          />
        )}
        {/* ShowNotesPart */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
      ctagS: state.task.taskCategories,
      catgRequested: state.tasksShow.findCatg !== "",
      requestedCatgName: state.tasksShow.findCatg,
      CatgName: state.tasksShow.findCatg,
      CatgTask: state.tasksShow.catgTasks,
      allTasks: state.task.tasks
    };
}

const mapDispatchToProps = dispatch => {
    return {
      newCategory: newCatg =>
        dispatch({ type: action.CREATE_CATEGORY, catg: newCatg }),
      setTask: (ctag, title, task) =>
        dispatch({
          type: action.CREATE_TASK,
          catg: ctag,
          title: title,
          task: task
        }),
      updateCatgTasks: allTasks =>
        dispatch({ type: action.FIND_AND_STORE_CATG_TASK, allTasks: allTasks }),
      deleteFindCatg: () => dispatch({ type: action.ON_DELETE_FIND_ITEM_CATG }),
      onSearchingCatg: catg =>
        dispatch({ type: action.ON_SEARCH_TASKS, findCatg: catg }),
      onFilteringTasks: allTasks =>
        dispatch(actionFunc.onFilteringTasks(allTasks)),
      onChangeTaskItemPos: (cardIndex, taskIndex, allTasks) =>
        dispatch(
          actionFunc.onManagingEspecifiedTask(
            cardIndex,
            taskIndex,
            allTasks
          )
        ),
      onDeleteCard: cardIndex => dispatch(actionFunc.onDeleteTask(cardIndex))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);