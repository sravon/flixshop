
import { useRouter } from 'next/router';
import React,{useRef,useContext} from 'react';
import { loginData } from '../helpers/api-util';
import Seotag from '../components/Seotag';

export default function Login() {
    const router = useRouter()
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    async function switchAuthModeHandler(e) {
        e.preventDefault()
        const selectEmail = emailInputRef.current.value;
        const selectPass = passwordInputRef.current.value;
        console.log(selectEmail+ " " + selectPass)
        const result = await loginData(selectEmail,selectPass)
        if(result){
            if (result.status) {
            console.log(result.user + "    " + result.token)
            createUser.setUser(result.user)
            fetch("/api/login", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body:JSON.stringify({ token: result.token })
            })
            router.push("/")
            } else {
                alert(result.error)
            }
        }
    }


    return (
        <div >
            <Seotag title="Login" />
            <div className="flex items-center justify-center mb-16">
                <div className="bg-white p-16 rounded shadow-2xl md:w-1/2">
                        <div className="text-5xl flex items-center justify-center"></div>
                        <h2 className="text-3xl font-bold text-purple-800 mb-4 text-center">Login Your Account</h2>
                        <form action="" className="space-y-3 text-black" onSubmit={ e => switchAuthModeHandler(e)}>
                            <div className="flex flex-col sm:flex-row">
                                <label className="mr-10 font-bold w-1/5" htmlFor="">Email</label>
                                <input
                                    className="md:w-4/5 sm:w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400"
                                    type="email" name="email" ref={emailInputRef} />
                            </div>
                            <div className="flex flex-col sm:flex-row">
                            <label className="mr-2 font-bold w-1/4" htmlFor="">Password</label>
                            <input 
                                className="md:w-3/4 sm:w-full border-2 border-gray-400 p-3 outline-none focus:border-blue-400" 
                                type="password" name="password" ref={passwordInputRef} />
                            </div>
                            <button type="submit" className="block w-full bg-purple-400 hover:bg-purple-300 p-4 rounded text-purple-900 transition duration-300">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
