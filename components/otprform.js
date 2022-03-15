import React, { useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { otpverify } from '../helpers/otp';


export default function Otprform({number}) {
    const otpInputRef = useRef();

    const checkOtp = async (e) => {
        e.preventDefault()
        const selectOtp = otpInputRef.current.value;
        const hash = Cookies.get('otp')
        const check = await otpverify(selectOtp,hash)
    }

    return (
        <div className='w-2/4 mx-auto'>
            <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">OTP Verification</h2>
            <p className='p-5 bg-green-200 text-red-700 font-semibold'>We've send a verification  code to your mobile number - { number }</p>
            <form action="" className="space-y-3 mt-10 text-black" onSubmit={ e => checkOtp(e)}>
                <div className="flex flex-col items-center sm:flex-row">
                    <label className="mr-10 font-bold w-2/6" htmlFor="">Code</label>
                    <input
                        className="md:w-4/6 sm:w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                        type="text" name="email" ref={otpInputRef}
                        placeholder="Enter Code" 
                    />
                </div>
                <button type="submit" className="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-white transition duration-300">Submit</button>
            </form>
        </div>
  )
}
