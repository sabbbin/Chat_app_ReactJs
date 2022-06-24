import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [show, setShow]=useState(false)
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [users, setusers]=useState()

   const navigate= useNavigate()

    
        useEffect(()=>{

            let usersDb=JSON.parse( localStorage.getItem('user'))
            setusers(usersDb)
        },[])


 const submitUser=(e)=>{
    e.preventDefault()
    console.log(users)
    let status=users.find(user=>{
      
        if (user.email==email && user.password==password){
                return true
        }
    })
    console.log(status)
    if (status){
        localStorage.setItem('loginUser', JSON.stringify(status))
       
        console.log('helo')
        navigate('/chat')

    }else{
        window.alert('login fail')
    }

 }


  return (
    <>
      <div 
                className={'login active'}
                >

                <form className="form" onSubmit={submitUser}>
                    <div className="form_control"> 
                    <label>
                        Email Address
                    </label>
                    <input type='email'
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter your Email Address" />
                    </div>
                    <div className="form_control"> 
                    <label>
                        Password
                    </label>
                     <input 
                     required
                     type={show?'text':'password'}
                     onChange={(e)=>setPassword(e.target.value)}
                     placeholder="Enter password" />
                  
                        <button  className="btn btn_show"
                         type='button'
                        onClick={()=>setShow(!show)}
                        >
                            {show?'Hide':'Show'}
                        </button>
                  
                    </div>
                    <button className="btn btn_login" type='submit'>
                        Login
                    </button>
                   
                </form>
                <button className="btn btn_guest">
                        Get Guest User Credentials
                    </button>
                </div>
    </>
  )
}
