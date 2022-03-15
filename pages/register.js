
import { useRouter } from 'next/router';
import React,{ useState, useEffect} from 'react';
import { getData, loginData } from '../helpers/api-util';
import Seotag from '../components/Seotag';
import Cookies from 'js-cookie'
import Registerform from '../components/registerform';
import Otprform from '../components/otprform';

export default function Register() {
    const [otpbox, setotpbox] = useState({otp:false,number:null})


    const regData = () => {
        fetch("/api/otp", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body:JSON.stringify({ token: "this is resting cookies",name: 'otp' })
        })
        
    }

    useEffect(() => {
        if(Cookies.get('number')){
            setotpbox({otp:true,number:Cookies.get('number')})
        }
      }, [])

    

    return (
        <div >
            <Seotag title="Register" />
            
                <div className="bg-white p-16 rounded shadow-2xl md:w-1/2 mx-auto mt-20">
                        <h2>{Cookies.get('token')} 000</h2>
                        <button onClick={regData}>onC</button>
                        { otpbox.otp?<Otprform number={otpbox.number}/>: <Registerform otp={setotpbox}/>}
                </div>
                
           
            
        </div>
    );
}
