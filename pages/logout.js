import { useRouter } from 'next/router';
import React,{ useEffect, useContext } from 'react';
import Axios from '../Axios/Axios';
import { AContext } from '../context/AdminContext';

export default function logout() {
    const createUser = useContext(AContext)
    const router = useRouter()

    const logout = async () =>{
        const res = await fetch('/api/checktoken');
        if(res.status === 403){
          alert("this is 403 error")
        }else if(res.status === 200){
          const data = await res.json()
          const token = data.token
          console.log("check token")
          const headers = {
              Authorization: "Bearer " + token,
          }
          
          Axios.get('/users/logout', {headers}).then(response =>{
              if (response.status == 200) {
                
              }else{
                  alert("Error Found")
                  return 
              }
          })
          const tokenemove = await fetch("/api/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({})
          })
          if(tokenemove.ok){
            createUser.logoutUser()
            router.push("/")
          }
        }
    
    }

    useEffect(() => {
        logout()
    }, []);
    

    return <div className="text-center"> loading.........</div>;
}
