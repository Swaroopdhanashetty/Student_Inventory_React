import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Switch, Route ,Link} from "react-router-dom";
import AddStudents from "./components/AddStudent";
import Students from "./components/StudentList"
import Student from "./components/Student"

function App() {
  return (
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
    <a href="/students" className="navbar-brand">
      Student Inventory
    </a>
    <div className="navbar-nav mr-auto">

    <li className="nav-item">
        <Link to={"/students"} className="nav-link">
           Students
        </Link>
      </li>
     
      <li className="nav-item">
        <Link to={"/add"} className="nav-link">
          Add students
        </Link>
      </li>

    </div>
  </nav>

  <div>
  
  <Switch>
   
    <Route exact path='/add' component={AddStudents}/>
    <Route exact path={["/","/students"]} component={Students}/>
    <Route exact path={'/students/:id'} component={Student}/>
  
  </Switch>
  
  </div>

  </div>
  );
}

export default App;
