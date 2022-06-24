import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatPage.css'

export default function ChatPage() {

    let [flag, setFlag]= useState(false)
    let [profileFlag, setProfileFlag]=useState(false)
     let [send, setNewmsg]=useState('')
     let [loginuser, setLoginUser]= useState()
    
    let [flagquick ,setflagquick]=useState(false)

    let [currentChat , setCurrentChat]=useState([])


    let [display, setDisplay]=useState()


    let [chatlist , setChatList]=useState([])
    let [searchuser, setSearchUser]=useState([])

    let navigate= useNavigate()
    useEffect(()=>{
      let chatdb= JSON.parse(localStorage.getItem('chat'))
      let logindb= JSON.parse(localStorage.getItem('loginUser'))
      let usersdb= JSON.parse(localStorage.getItem('user'))

      console.log(chatdb, logindb)
      let getchatlist=chatdb.filter(ch=>ch.id==logindb.id)
      console.log(getchatlist)
      let tempusers=[]
      getchatlist[0].chatmsg.map(chtmsg=>{
         let usr=usersdb.find(usrs=>usrs.id==chtmsg.id)
         if (usr){

           chtmsg.name=usr.name
           chtmsg.img=usr.img
           chtmsg.email=usr.email
           tempusers.push(chtmsg)
         }
      })

      console.log(getchatlist,tempusers)
      setChatList(tempusers)

      setLoginUser(logindb)
      setDisplay(logindb)
      setCurrentChat(tempusers[0])
     

    },[flagquick])

    useEffect(()=>{
      if (flagquick){

        let ongoinchat=JSON.parse(localStorage.getItem('ongoingchat'))
         setCurrentChat(ongoinchat)
       
      }
      setflagquick(false)
      },[flagquick])


   

    const searchUser=(e)=>{
      let searchUser =users.filter(user=>user.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
         console.log(searchUser)
      setSearchUser(searchUser)
      
     }

     const openChat=(id)=>{
      const currentuser= chatlist.filter(cht=>cht.id==id)
      setCurrentChat(currentuser[0])
  }
  const chatUserProfile=()=>{
    setDisplay(currentChat)
    console.log('current user profile')
    setProfileFlag(true)
  }
  
const handleCurrentProfile=()=>{
   setDisplay(loginuser)
   setProfileFlag(true)
}

const submitMsg=(e)=>{
 
  e.preventDefault()
  
  let curr= JSON.parse(localStorage.getItem('chat'))
  let send1={
    send:[send]
  }
  let receive={
    receive:[send]
  }
  let temp=[]
  curr.map(cur=>{
    if (cur.id==loginuser.id){
      
       cur.chatmsg.map((a)=>{
        console.log(a.id, loginuser.id)
         if (a.id==currentChat.id){
          console.log('a')
          a.msg.push(send1)
         }
       })
    }else if (cur.id==currentChat.id){
  
      cur.chatmsg.map((a)=>{
        if (a.id==loginuser.id){
          a.msg.push(receive)
        }
     })
    }
    temp.push(cur)
  })
  
  localStorage.setItem('chat',JSON.stringify (temp))
setflagquick(true)
setNewmsg('')

}

const logout=()=>{

  localStorage.removeItem('loginUser');
  navigate('/')
  
}


  return (
  <>
  <nav className='navbar'>
       <div className='search_navbar'>
       <i className="fa-solid fa-magnifying-glass search"
        onClick={()=>setFlag(!flag)}
       ></i>
        <input 
        onChange={(e)=>searchUser(e)}
        className={flag?'active':''}
         placeholder='Search'/>
       </div>
       <div className='chat_title'>
        <h4>

      Chat application
        </h4>
       </div>
       <div className='profile_navbar'>
       <img src={loginuser?.img} alt='/img/blank_img.png'
       onClick={handleCurrentProfile}
       />
       <div className='notification'>

       <i className="fa-solid fa-bell"></i>
       <span>3</span>
       </div>
       <button className='btn btn_logout'
       onClick={logout}
       >Logout</button>
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
                   chatlist?.map((chtlist ,id)=>

                 <div 
                   className= {(chtlist?.id==currentChat?.id)?'user_profile active':'user_profile'
                }
                   onClick={()=>openChat(chtlist.id)}
                   key={id}
                 >
                 <img src={chtlist.img} alt='/img/blank_img.png'/>
                  <div className='user_info'
                
                  >

                    <h6>{chtlist.name}</h6>
                    {chtlist.msg[0].receive?
                    <p >{chtlist.msg[0].receive}</p>
                    :
                    <p>You: {chtlist.msg[0].send}</p>}
                    
                  </div>
                 </div>
                        )
                }
                
             </div>
        </div>
        <div className='main_content'>
                <div className='title'>
                <h5>{currentChat?.name}</h5>
                <i class="fa-solid fa-eye"
                onClick={chatUserProfile}
                ></i>
                </div>
                <div className='msg'>

                    {
                        currentChat?.msg?.map((sing,id)=>
                        <>
                            {
                            sing.receive&&

                            <h5 key={id} className='msg_texts lf'>
                                {sing?.receive}
                            </h5>
                           }
                           {sing.send&&
                           
                            <h5 key={id} style={{background:'lightblue'}} className='msg_texts'>
                                {sing.send}
                            </h5>
                           }
                          
                            
                        </>
                            )
                            
                    }
                   
                </div>
                <div className='footer'>
                  <form className='form' onSubmit={submitMsg}>

                  <input type='text' 
                  required
                  value={send}
                  onChange={(e)=>setNewmsg(e.target.value)}
                  />
                  <button
                   type='submit'
                  >Send
                    </button>
                  </form>
                  
                </div>
        </div>

      </div>



  
      <div 
      className={profileFlag? 'profile_view active':'profile_view'}>
     
      <i class="fa-solid fa-xmark cross"
      onClick={()=>setProfileFlag(false)}
      ></i>
        <div className='img'>
           <img  src={display?.img}/>
        </div>
        <div className='name'>
            <label htmlFor="">Name</label>
            <p>{display?.name}</p>
        </div>
        <div name>
            <label htmlFor="">Email</label>
            <p>{display?.email}</p>
        </div>

      </div>



  </>
  )
}
