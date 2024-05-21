import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
  state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group">
        <li className="list-group-item">
          <input value={module.name} className="form-control textbox"
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
          }/>
          <br></br>
          <textarea value={module.description} className="form-control textbox"
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }/>
          <span className="float-end">
          <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button className="btn btn-primary" onClick={() => dispatch(updateModule(module))}>
                Update
        </button>
          </span>
        </li>

        {moduleList
          .filter((module) => module.course === courseId).map((module, index) =>
          (<li key={index}
            className="list-group-item module">
            <div>
              <FaEllipsisV className="me-2" />{module.name}
              <br></br>
            {module.description}
              <span className="float-end">

                <button className="btn btn-success"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
              </span>
            </div>
          </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;

