import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Insert from "./insertStudent";
import Update from "./updateStudent";
import Delete from "./deleteStudent";
import Find from "./findStudent";
import FindAll from "./findAllStudent";
import "./student.css";
export default class HomePage extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="header">
          <nav id="na"><Link class=" btn btn-info" to="/insert">Insert</Link>&nbsp;
            <Link class=" btn btn-info" to="/update">Update</Link>&nbsp;
            <Link class=" btn btn-info" to="/delete">Delete</Link>&nbsp;
            <Link class=" btn btn-info" to="/find">Find</Link>&nbsp;
            <Link class=" btn btn-info" to="/findall">Find All</Link></nav>&nbsp;
          </div>
          
          <Routes>
            <Route path="/insert" element={<Insert />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/find" element={<Find />} />
            <Route path="/findall" element={<FindAll />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
