import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { faGear, faHome, faNotEqual, faPeopleArrows, faPerson, faStopwatch, faSuitcaseRolling, faUserGraduate, faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./homeStyle.css"
const Home = () => {
    return (
        <div class="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* Page content here  */}
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side shadow-2xl rounded-3xl">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                {/* Sidebar content here  */}
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content drawer-links">

                    <div class="form-control mt-4">
                        <div class="input-group">
                            <input type="text" placeholder="Search…" class="input border-b-4 border-indigo-500 focus:outline-none w-full " />
                            <button class="btn btn-square btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <li className='mt-4'>
                        
                        <span><FontAwesomeIcon icon={faUserGraduate}/> Admin</span>
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