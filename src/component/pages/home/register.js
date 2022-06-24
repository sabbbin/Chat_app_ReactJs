import React, { useState } from 'react'


export default function Register() {
    const [show, setShow]=useState(false)
    const [name, setName]= useState()
    const[email, setEmail]=useState()
    const [password, setPassword]=useState()
    const[conpassword, setConpassword]=useState()
    const [img, setImg]=useState()

    const registerUser=(e)=>{
        e.preventDefault()
        if (password==conpassword){

            let userdb=JSON.parse(localStorage.getItem('user'))
            let id=userdb.length
            let data={
            id,
             name,
             email,
             password,
             img: URL.createObjectURL(img[0])
            }
            userdb.push(data)
            localStorage.setItem('user',JSON.stringify(userdb))

            window.alert('Go to login page')
            setName('')
            setConpassword('')
            setEmail('')
            setPassword('')
        }
        else{
            window.alert(' Please Check passwor')
        }
        

    }

    

  return (
   <>
   <div 
                      className={'register active'}
                    >

                <form className="form" onSubmit={registerUser}>
                    <div className="form_control">
                        <label>
                            Name
                        </label>
                        <input placeholder="Name"
                        value={name}
                         onChange={(e)=>setName(e.target.value)}
                        />

                    </div>
                    <div className="form_control">
                        <label>
                            Email
                        </label>
                        <input placeholder="Email"
                        value={email}
                        type='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />

                    </div>
                    <div className="form_control">
                        <label>
                            Password
                        </label>
                  
                       
                    
                        <input
                        required
                        value={password}
                        type={show?'text':'password'}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="Password" />
                        <button  className="btn btn_show"
                          type='button'
                          onClick={()=>setShow(!show)}
                        >
                             {show?'Hide':'Show'}
                        </button>
                      

                    </div>
                    <div className="form_control">
                        <label>
                            Con_Password
                        </label>
                        <input placeholder="com-Password"
                        type='password'
                        required
                        value={conpassword}
                        onChange={(e)=>setConpassword(e.target.value)}
                        />

                    </div>
                    <div className="form_control">
                        <label className="img_file">
                        <input type='file'
                        onChange={(e)=>setImg(e.target.files)}
                        />
                          Upload Image
                        </label>
                        

                    </div>
               
                    <button className="btn btn_login"
                    type='submit'
                    >
                        Register
                    </button>

                </form>
                    </div>
   </>
  )
}
