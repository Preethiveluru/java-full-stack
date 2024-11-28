import { Component } from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Insert from "./insertEmployee";
import Delete from "./deleteEmployee";
import Update from "./updateEmployee";
import Find from "./findEmployee";
import Findall from "./findAllEmployee";
import FindByName from "./findByEmployeeName";
import DeleteByName from "./deleteByEmployeeName";
import FindBySalary from "./findByEmployeeSalary";
import DeleteBySalary from "./deleteByEmployeeSalary";

import './emp.css';


 export default class HomePage extends Component{
     render(){
       return(
       <BrowserRouter>
       <div>
        <ul class ="link">
            <li class="btn "><Link to="/insert">Insert</Link></li><br></br>
            <li class="btn "><Link to="/update">update</Link></li><br></br>
            <li class="btn "><Link to="/delete">delete</Link></li><br></br>
            <li class="btn "><Link to="/find">find</Link></li><br></br>
            <li class="btn "><Link to="/findall">findall</Link></li><br></br>
            <li class="btn "><Link to="/findbyname">FindByName</Link></li><br></br>
            <li class="btn "><Link to="/deletebyname">DeleteByName</Link></li><br></br>
            <li class="btn "><Link to="/findbysalary">FindBySalary</Link></li><br></br>
            <li class="btn "><Link to="/deletebysalary">DeleteBySalary</Link></li><br></br>


        </ul>
        <hr/>

        <Routes>
            <Route  path="/insert" element={<Insert></Insert>}></Route>
            <Route path="/delete" element={<Delete></Delete>}></Route>
            <Route path="/update" element={<Update></Update>}></Route>
            <Route path="/find" element={<Find></Find>}></Route>
            <Route path="/findall" element={<Findall></Findall>}></Route>
            <Route path="/findbyname" element={<FindByName></FindByName>}></Route>
            <Route path="/deletebyname" element={<DeleteByName></DeleteByName>}></Route>
            <Route path="/findbysalary" element={<FindBySalary></FindBySalary>}></Route>
            <Route path="/deletebysalary" element={<DeleteBySalary></DeleteBySalary>}></Route>

        </Routes>

       </div>
       </BrowserRouter>
     )
    }
   
   }
   
   
