import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHome, faNotEqual, faPeopleArrows, faPerson, faStopwatch, faSuitcaseRolling, faUserGraduate, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./homeStyle.css"
const Home = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-3 lg:m-12 shadow-2xl rounded-3xl">
                {/* Page content here  */}
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side shadow-2xl rounded-3xl">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                {/* Sidebar content here  */}
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content drawer-links">

                    <div className="form-control mt-4">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input border-b-4 border-indigo-500 focus:outline-none w-full " />
                            <button className="btn btn-square btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <li className='mt-4'>      
                        <Link to="/home/addEmployee"><FontAwesomeIcon icon={faUserGraduate}/> Add Employee</Link>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span> <FontAwesomeIcon icon={faUsersLine}/> PIM</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span><FontAwesomeIcon icon={faSuitcaseRolling}/> Leave</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span> <FontAwesomeIcon icon={faStopwatch}/> Time</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span> <FontAwesomeIcon icon={faPerson}/> My info</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span> <FontAwesomeIcon icon={faHome}/> Dashboard</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span> <FontAwesomeIcon icon={faNotEqual}/> Directory</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span><FontAwesomeIcon icon={faGear}/> Maintenance</span>
                    </li>
                    <li>
                        {/* <span></span> */}
                        <span><FontAwesomeIcon icon={faCommentDots}/> Buzz</span>
                    </li>
                    {/* <li><a>Sidebar Item 2</a></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Home;