import { faPerson, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useUserData from '../../Hooks/useUserData';

const UserProfile = () => {
    const { id } = useParams()
    const [selectedUser, setSelectedUser] = useState({})
    const [users, loading] = useUserData()
    useEffect(() => {
        if (users) {
            const x = users.find(u => u.id == id)
            console.log(x);
            setSelectedUser(x)
        }
    }, [users, id, loading])
    if (loading) {
        return <p>Loading ....</p>
    }
    // console.log(selectedUser, users);
    return (
        <div className='flex flex-col lg:flex-row shadow-2xl'>
            <div className='w-full lg:w-1/4 border-r p-2 '>
                <p className='text-3xl font-semibold'> {selectedUser?.name}</p>
                <FontAwesomeIcon className='text-5xl shadow-xl rounded-full border p-8 text-gray-300 block mx-auto my-6' icon={faUser} />
                <ul>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>
                    <li className='shadow-md hover:bg-pink-400 p-3 rounded-md'>Personal Details</li>

                </ul>
            </div>
            <div className='w-full lg:w-3/4 p-2'>
                <h1 className='text-2xl font-semibold'>Personal Details</h1>
                <div className="divider"></div> 
                <div>
                    <p>Employ full name</p>
                    <div className='flex items-center flex-col lg:flex-row'>
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    </div>
                </div>
                <div className="divider"></div> 
                <div>
                    <p>Employ full name</p>
                    <div className='flex items-center flex-col lg:flex-row'>
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    </div>
                </div>
                <div className="divider"></div> 
                <div>
                    <p>Employ full name</p>
                    <div className='flex items-center flex-col lg:flex-row'>
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    </div>
                </div>
                <div className="divider"></div> 
                <div>
                    <p>Employ full name</p>
                    <div className='flex items-center flex-col lg:flex-row'>
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    </div>
                </div>
                <div className="divider"></div> 
                <div>
                    <p>Employ full name</p>
                    <div className='flex items-center flex-col lg:flex-row'>
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    <input type="text" defaultValue={selectedUser?.name} placeholder="Type here" className="input w-full input-bordered ml-2 max-w-xs" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;