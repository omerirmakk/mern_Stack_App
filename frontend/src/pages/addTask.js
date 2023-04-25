import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const AddTask = (props) => {
  //state to track the task description
  //a user enters in the input field
  const [details, setDetails] = useState();
  //function to be triggered
  //when user clicks the 'submit task' button
  function handleClick() {
    console.log(props.tasks);
    var newarr = props.tasks;
    newarr.push(details);
    props.setTasks(newarr);
    var task = {
      id: props.tasks.length,
      details: details,
    };
    //submit details to the database
    axios
      .post("{{EDUCATIVE_LIVE_VM_URL}}:3000/Tasks/addTask", task)
      .then(function (res) {
        console.log(res.data);
        //alert pops when a task is added
        window.alert("Task added!");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div className="row">
      <div>
        <input
          id="addDetails"
          value={details}
          type="text"
          placeholder="Add Task Details"
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></input>
        <div className="row">
          <br />
          <br />
          <button
            onClick={function () {
              handleClick();
            }}
          >
            submit Task
          </button>
        </div>
        <br />
        <br />
      </div>
      <Link to="/toDoList">
        <button>View List</button>
      </Link>
    </div>
  );
};
export default AddTask;
