import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import MyDay from '../myday/MyDay'
import Important from '../important/Important';
import Planned from '../planned/Planned';
import AssignedToMe from '../assignedtome/AssignedToMe';
import CardDay from '../cardday/CardDay';
import ImportantCard from '../importantcard/ImportantCard';
import PlannedCard from '../plannedcard/PlannedCard';
import AssignedToMeCard from '../assignedtomecard/AssignedToMeCard';
import Header from '../header/Header';
import FlagEmailCard from '../flagemailcard/FlagEmailCard';
import FlagEmail from '../flagemail/FlagEmail';

import 'bootstrap/dist/css/bootstrap.min.css'

export default function Routing() {
    return (

        <BrowserRouter>
            <Header />


            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <Link to='/'><CardDay /></Link>
                        <Link to="/important"><ImportantCard /></Link>
                        <Link to='/planned'><PlannedCard /></Link>
                        <Link to='assignedtome'><AssignedToMeCard /></Link>
                        <Link to='flagemail'><FlagEmailCard/></Link>
                    </div>
                    <div className="col-lg-6">



                        <Routes>
                            <Route exact path='/' element={<MyDay />}>


                            </Route>
                            <Route path='/important' element={<Important />} >



                            </Route>
                            <Route path='/planned' element={<Planned />} >



                            </Route>
                            <Route path='/assignedtome' element={<AssignedToMe />} >



                            </Route>
                            <Route path='/flagemail' element={<FlagEmail/>}>

                            </Route>

                        </Routes>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </BrowserRouter>


    )
}
