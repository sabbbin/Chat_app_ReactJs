import React, { useEffect, useState } from "react";
import './home_page.css'
import Login from "./Login";
import Register from "./register";


import {userdata} from '../../../login'
import {chatdata } from '../../../chat'


export default function Home_page() {

    let [flag, setFlag]= useState(true)

    const handleChange=()=>{
      
        setFlag(!flag)
    }
   

    useEffect(()=>{
      let test=localStorage.getItem('user')
      
  
      console.log(test!=null)
        if (test==null){
          localStorage.setItem('user' ,JSON.stringify(userdata.user))
          localStorage.setItem('chat', JSON.stringify(chatdata.chat))
        }       
         
    },[])



  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="home_header">Talk-A-Tive</div>

          <div className="home_content">
                <div className="home_content_header">
                  <button 
                  className={flag?'active':''}
                  onClick={handleChange}
                  >Login</button>
                  <button
                   className={flag?'':'active'}
                   onClick={handleChange}
                  >Sign Up</button>
                </div>
               
               {flag?
              

            <Login />
               :
               
           
                <Register />
               }
                    
                 
          </div>
        </div>
      </div>
    </>
  );
}
