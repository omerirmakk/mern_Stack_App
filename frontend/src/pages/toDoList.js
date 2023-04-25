import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//importing the task component that will
//be used to make the to-do list
import TaskComponent from "../component/TaskComponent";
const ToDoList = (props) => {
  //on page load request the database to
  //send all the tasks
  useEffect(() => {
    axios.get("{{EDUCATIVE_LIVE_VM_URL}}:3000/Tasks/getTasks").then((res) => {
      const list = res.data;
      props.setTasks(list);
    });
  }, []);
  return (
    <div className="row">
      <center>
        <h2>TO-DO LIST</h2>
      </center>
      {props.tasks.map((task, index) => {
        return <TaskComponent task={task.details} id={task.id} />;
      })}
      <Link to="/">
        <button>Add more tasks!</button>
      </Link>
    </div>
  );
};
export default ToDoList;
