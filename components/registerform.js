import axios from 'axios';
import React, { useRef, useState } from 'react'
import Axios from '../Axios/Axios';
import { addData } from '../helpers/api-util';
import { smsApi } from '../helpers/otp';

export default function Registerform({ otp }) {
    const [gender, setgender] = useState("")
    const [passwordshow, setpasswordshow] = useState(false)
    const nameInputRef = useRef();
    const mobileInputRef = useRef();
    const passwordInputRef = useRef();

    const registerUser = async (e) => {
        e.preventDefault()
        const selectname = nameInputRef.current.value;
        const selectmobile = mobileInputRef.current.value;
        const selectPass = passwordInputRef.current.value;
        const data = await addData(selectname,selectmobile,gender,selectPass)
        if (data.status) {
            console.log('code '+ data.result.code);
            const message = `For flixshop, your otp is ${data.result.code}`
            const smsapirequest = await smsApi(data.result.result.phone,message,data.result.hash);
            if(smsapirequest){
                otp({otp:true,number:data.result.result.phone})
            }else{
                console.log("There are Something wrong")
            }
        } else if(!data.status) {
            alert( data.error )
            e.target.reset();
        }else{
            console.log("There are Something wrong")
        } 
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">Register Your Account</h2>
            <form action="" className="space-y-3 text-black" onSubmit={ e => registerUser(e)}>
                <div className="flex flex-col sm:flex-row">
                    <label className="mr-10 font-bold w-2/6" htmlFor="Name">Name</label>
                    <input
                        className="md:w-4/6 sm:w-full sm:flex-row border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                        type="text" name="name" ref={nameInputRef} />
                </div>
                <div className="flex flex-col sm:flex-row">
                    <label className="mr-10 font-bold w-2/6" htmlFor="">Mobile Number</label>
                    <div className='flex items-center md:w-4/6 sm:w-full'>
                        <p className='bg-gray-300 py-3.5 pr-2 pl-2'>+88</p>
                        <input
                            className="flex-1 border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                            type="text" maxLength={11} name="email" ref={mobileInputRef} />
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <label className="mr-10 font-bold w-2/6" htmlFor="Gender">Gender </label>
                    <div className='flex items-center md:w-4/6 sm:w-full space-x-2 border-2 p-3' onChange={e => setgender(e.target.value)}>
                        <input type="radio" id="html" name="gender" value="m"/>
                        <label htmlFor="gender" className='pr-3'>Male</label>
                        <input type="radio" id="html" name="gender" value="f"/>
                        <label htmlFor="gender">Female</label>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row">
                    <label className="mr-10 font-bold w-2/6" htmlFor="">Password</label>
                    <div className='flex items-center md:w-4/6 sm:w-full'>
                        <input
                            className="flex-1 border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                            type={passwordshow? 'text': 'password'} name="email" ref={passwordInputRef} />
                        <p 
                            className='bg-gray-300 py-3.5 pr-2 pl-2 cursor-pointer font-bold text-red-700 hover:bg-gray-500'
                            onClick={() =>setpasswordshow(!passwordshow)}
                        >{passwordshow? 'hide': 'show'}</p>
                    </div>
                </div>
                <button type="submit" className="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 transition duration-300">Log In</button>
            </form>
        </div>
  )
}
