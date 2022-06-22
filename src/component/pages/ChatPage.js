import React, { useEffect, useState } from 'react';
import './ChatPage.css'

export default function ChatPage() {

    let [flag, setFlag]= useState(false)
    let [profileFlag, setProfileFlag]=useState(false)
     let [newmsg, setNewmsg]=useState('')
     let loginUser={
        name:'kanchan kc',
        email:'kanchan@gmail.com',
        img:'/img/blank_img.png'
     }
    let [msg ,setMsg]=useState([
        'happy coding',
        'hello world!'
    ])


    let [display, setDisplay]=useState(loginUser)

    let [chatlist , setChatList]=useState([
        {   id:0,
            name:'Rabin Suwal',
            msg:'hello this is rabin suwal',
            img:'/img/blank_img.png',
            email:'rabin23@gmail.com'
        },
        {   id:1,
            name:'Sabin Suwal',
            msg:'hello this is sabin suwal',
            img:'/img/blank_img.png',
            email:'sabin23@gmail.com'
        },
        {   id:2,
            name:'Ram Suwal',
            msg:'hello this is sabin suwal',
            img:'/img/blank_img.png',
            email:'Ram23@gmail.com'
        }

    ])

    useEffect(()=>{
        setCurrentChat(chatlist[0])
    },[])

    let [currentChat , setCurrentChat]=useState({})
   
    const openChat=(id)=>{
        const currentuser= chatlist.filter(cht=>cht.id==id)
        setCurrentChat(currentuser[0])
    }

   const submitMsg=()=>{
        if (newmsg!=''){

            setMsg(pre=>[
                ...pre, newmsg
            ])
            console.log(newmsg)
            setNewmsg('')
        }
   }
   const chatUserProfile=()=>{
     setDisplay(currentChat)
     console.log('current user profile')
     setProfileFlag(true)
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
       <img src='/img/blank_img.png' alt='/img/blank_img.png'
       onClick={(e)=>setProfileFlag(true)}
       />
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


                {
                    chatlist.map((chtlist ,id)=>

                 <div className='user_profile'
                   onClick={()=>openChat(id)}
                   key={id}
                 >
                 <img src={chtlist.img} alt='/img/blank_img.png'/>
                  <div className='user_info'
                
                  >

                    <h6>{chtlist.name}</h6>
                    <p>{chtlist.msg}</p>
                  </div>
                 </div>
                        )
                }
                
             </div>
        </div>
        <div className='main_content'>
                <div className='title'>
                <h5>{currentChat.name}</h5>
                <i class="fa-solid fa-eye"
                onClick={chatUserProfile}
                ></i>
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



  
      <div 
      className={profileFlag? 'profile_view active':'profile_view'}>
     
      <i class="fa-solid fa-xmark cross"
      onClick={()=>setProfileFlag(false)}
      ></i>
        <div className='img'>
           <img  src={display.img}/>
        </div>
        <div className='name'>
            <label htmlFor="">Name</label>
            <p>{display.name}</p>
        </div>
        <div name>
            <label htmlFor="">Email</label>
            <p>{display.email}</p>
        </div>

      </div>



  </>
  )
}
