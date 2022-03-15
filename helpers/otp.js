import Axios from "../Axios/Axios";




export async function smsApi(phone,message, hash){
    
    const smsApiData = { 
        username: process.env.NEXT_PUBLIC_SMSAPI_USERNAME,
        password: process.env.NEXT_PUBLIC_SMSAPI_PASSWORD,
        phone: phone,
        message:  message
    }
    const smsapirequest = await Axios.post(`users/sendotp`,smsApiData);
    if (smsapirequest.status === 200) {
        const smsapidata = smsapirequest.data.toString().split('|');
        if(smsapidata[0] === "1000" || smsapidata[0] === "1003" || smsapidata[0] === "1009" || smsapidata[0] === "1006"){
            console.log('User & pass error & invalid sms & balance require & Inactive Account');
            return false;
        }else if(smsapidata[0] === "1101"){
            setCookie(phone,hash);
            return true;
        }
    }else{
        console.log('Api Error');
        return false;
    }
    
    
}

const setCookie = (phone, hash) =>{
    fetch("/api/otp", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body:JSON.stringify({ value: hash, name: 'otp' })
    })
    fetch("/api/otp", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body:JSON.stringify({ value: phone, name: 'number' })
    })
}

export async function otpverify(code,hash){
    try {
        const res = await Axios.post('users/otp', {
            code, hash
          });
          if(res.status === 200){
                console.log(res); 
                //return {'status': true,result : res.data};
          }else if(res.status === 201){
            console.log(res.data);
            //return {error: res.data ,status: false}
          }
    } catch (error) {
        return error;
    }
    return false; 
}