import React, { useState } from 'react';
import './ChatPage.css'

export default function ChatPage() {

    let [flag, setFlag]= useState(false)
     let [newmsg, setNewmsg]=useState('')
    let [msg ,setMsg]=useState([
        'happy coding',
        'hello world!'
    ])

   const submitMsg=()=>{
        if (newmsg!=''){

            setMsg(pre=>[
                ...pre, newmsg
            ])
            console.log(newmsg)
            setNewmsg('')
        }
   }

  return (
  <>
  <nav className='navbar'>
       <div className='search_navbar'>
       <i className="fa-solid fa-magnifying-glass search"
        onClick={()=>setFlag(!flag)}
       ></i>
        <input 
        className={flag?'active':''}
         placeholder='Search'/>
       </div>
       <div className='chat_title'>
        <h4>

      Chat application
        </h4>
       </div>
       <div className='profile_navbar'>
       <img src='/img/blank_img.png' alt='/img/blank_img.png'/>
       <div className='notification'>

       <i className="fa-solid fa-bell"></i>
       <span>3</span>
       </div>
       </div>
  </nav>

      <div className='main_container'>
        <div className='sidebar'>
             <div className='sidebar_header'>
             <h6> My Chat</h6>
             <button>
                New chat group <span>
                <i class="fa-solid fa-plus"></i>  
                </span>
             </button>
             </div>
             <div className='sidebar_content'>
                 <div className='user_profile'>
                 <img src='/img/blank_img.png' alt='/img/blank_img.png'/>
                  <div className='user_info'>

                    <h6>Sabin suwal</h6>
                    <p>hello this is </p>
                  </div>
                 </div>
                 <div className='user_profile'>
                 <img src='/img/blank_img.png' alt='/img/blank_img.png'/>
                  <div className='user_info'>

                    <h6>Sabin suwal</h6>
                    <p>hello this is </p>
                  </div>
                 </div>
             </div>
        </div>
        <div className='main_content'>
                <div className='title'>
                <h5>Guest</h5>
                <i class="fa-solid fa-eye"></i>
                </div>
                <div className='msg'>

                    {
                        msg.map((sing,id)=>
                            <h5 key={id} className='msg_texts'>
                                {sing}
                            </h5>)
                    }
                   
                </div>
                <div className='footer'>
                  <input type='text' 
                  value={newmsg}
                  onChange={(e)=>setNewmsg(e.target.value)}
                  />
                  <button
                  onClick={submitMsg}
                  >Send
                    </button>
                  
                </div>
        </div>

      </div>



  </>
  )
}
