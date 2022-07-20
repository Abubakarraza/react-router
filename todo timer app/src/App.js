
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routing from './components/routing/Routing';

import { Outlet,Link } from 'react-router-dom';
import { BsFillGrid3X3GapFill, BsFillQuestionCircleFill, BsCardList, BsSnow2, BsStarFill, BsReceiptCutoff, BsPerson, BsFlag, BsTextarea, BsPlusLg } from "react-icons/bs";

import { AiOutlineSetting } from 'react-icons/ai';

import React, { useState } from 'react';
import Header from './components/header/Header';
import Task from './components/task/Task';
import CardDay from './components/cardday/CardDay';
import ImportantCard from './components/importantcard/ImportantCard';
import PlannedCard from './components/plannedcard/PlannedCard';
import AssignedToMeCard from './components/assignedtomecard/AssignedToMeCard';
import FlagEmail from "./components/flagemailcard/FlagEmailCard"
// import { useState } from 'react/cjs/react.production.min';

function App() {


  return (
    <>

        <Routing/>
        
       







<div style={{textAlign:"center"}}>
<h2>Name:M Abubakar Raza</h2>
<h2>Roll No:5345</h2>
</div>


    </>




  );
}

export default App;
