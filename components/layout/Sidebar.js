import { SearchIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'

export default function Sidebar () {
    const [sidebartoggole, setsidebartoggole] = useState(false)
    return (
        <div className="md:w-60 md:hidden">
            {/* <!-- mobile menu bar --> */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                <a className="block p-4 text-white  font-bold">Better dev
                </a>

                {/* <!-- mobile menu button --> */}
                <button 
                    className="p-4 focus:outline-none hover:text-dark"
                    onClick={ () => setsidebartoggole(!sidebartoggole)}
                >
                    
                    <SearchIcon className="h-5 w-5"/>
                </button>
            </div>
            {/* <!-- mobile search --> */}
            <div className="w-full">
                <input type="text" className="w-5/6  mx-7 mt-5 h-10 md:hidden bg-yellow-500 focus:outline-none p-2" name="" placeholder="Search for products (e.geggs, milk, potato)" />
            </div>
            
            {/* <!-- sidebar --> */}
            <div className={( (sidebartoggole)? null : '-translate-x-full') +" bg-blue-800 text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:fixed md:translate-x-0 transition duration-200 ease-in-out z-50 overflow-hidden overflow-x-hidden"} >
                {/* <!-- logo --> */}
                <a className="text-white flex items-center space-x-2 px-4">
                    
                    <SearchIcon className="h-5 w-5"/>
                    <span className="text-2xl font-extrabold">MyPortHouse</span>
                </a>
                <div className="flex flex-col">
                    <img src="suma.jpg" alt="Third" className="h-20 w-20 rounded-full object-cover mx-auto" />
                    <h2 className="text-center text-xl text-yellow-400">Abdur Rahman Kazi</h2>
                    <h2 className="text-center text-gray-400">( Software Developer )</h2>
                </div>

                {/* <!-- nav --> */}
                <nav>
                    <a className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Home</a>
                    <li className="w-full">
                        <a className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">About</a>
                        <ul className="flex flex-col items-center w-full">
                            <a href="dsf" className="block ml-20 w-2/3 py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">fsdf</a>
                            <a href="dsf" className="block ml-20 w-2/3 py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">fsdf</a>
                        </ul>
                    </li>
                        
                    <a  className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Price</a>
                    <a className="block py-2.5 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-200 border-b-2">Features</a>

                </nav>
                
            </div>
        </div>
    ) 
}
