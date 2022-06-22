import React, { useEffect, useState } from 'react';
import './ChatPage.css'

export default function ChatPage() {

    let [flag, setFlag]= useState(false)
    let [profileFlag, setProfileFlag]=useState(false)
     let [newmsg, setNewmsg]=useState('')
     let loginUser={
        id:2,
        name:'kanchan kc',
        email:'kanchan@gmail.com',
        img:'/img/blank_img.png',
        chatmsg:[{
            id:1,
            msg:[
                {
                    send :['k gardai xas '],
                    receive:['bashi rako ho']
                }
                ,{ 
                send:['how are your '],
                receive:['i am fine']
                
        }
            ]
        },
        {
            id:2,
            msg:[{ 
                send:['khana khyes '],
                receive:['khaya taila']
                
        },{
            send :['swimming garna jani ho'],
            receive:['pachi jaula']
        }]
        }
    ]
     }
    let [msg ,setMsg]=useState([])

    let [currentChat , setCurrentChat]=useState([])


    let [display, setDisplay]=useState(loginUser)

    let users=[
        {   id:1,
            name:'Rabin Suwal',
            msg:'hello this is rabin suwal',
            img:'/img/blank_img.png',
            email:'rabin23@gmail.com'
        },
        {   id:2,
            name:'Sabin Suwal',
            msg:'hello this is sabin suwal',
            img:'/img/blank_img.png',
            email:'sabin23@gmail.com'
        }
    ]

    let [chatlist , setChatList]=useState([])
    let [searchuser, setSearchUser]=useState([])

    const searchUser=(e)=>{
     let searchUser =users.filter(user=>user.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        console.log(searchUser)
     setSearchUser(searchUser)
     
    }


    useEffect(()=>{
        var findUser;
         var flag=true;
        console.log(searchuser)
      if (searchuser.length>0){
         findUser=searchuser
         flag=false
         
      }
      else{
         findUser=users
      }
      
      console.log(loginUser.chatmsg)
      let temp=[]
       let tchatlist_id= loginUser.chatmsg.filter(msgUser=>{
          let t= findUser.find(user=>user.id==msgUser.id)
           if (t) {

           
                    
                    if (msgUser.msg[0].receive ){
                        t.receive1=msgUser.msg[0].receive[0]
                        temp.push(t)
                    } else if (msgUser.msg[0].send ){
                        t.send1 = msgUser.msg[0].send[0]
                        temp.push(t)
                    }
              
                
            }
       })
        console.log(temp)
     
        setChatList(temp)
        setCurrentChat(temp[0])
        
       
    },[searchuser])
    
    
    useEffect(()=>{
               console.log(Object.keys(currentChat).length)
                if (Object.keys(currentChat).length>0){

            let msgd= loginUser.chatmsg.filter(cur => {
          
                console.log(cur.id, currentChat.id)
                if (cur.id==currentChat.id){
                   
                   return cur
                }
               } )
               console.log(msgd[0].msg)
               setMsg(msgd[0].msg)
             
               
        }
       }, [currentChat])

  
   
    const openChat=(id)=>{
        const currentuser= chatlist.filter(cht=>cht.id==id)
        setCurrentChat(currentuser[0])
    }
    console.log(currentChat)
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
   
 const handleCurrentProfile=()=>{
    setDisplay(loginUser)
    setProfileFlag(true)
 }

  
 console.log(chatlist)
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
       <img src='/img/blank_img.png' alt='/img/blank_img.png'
       onClick={handleCurrentProfile}
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
                   chatlist.length>0 && chatlist.map((chtlist ,id)=>

                 <div 
                   className= {(chtlist.id==currentChat.id)?'user_profile active':'user_profile'
                }
                   onClick={()=>openChat(chtlist.id)}
                   key={id}
                 >
                 <img src={chtlist.img} alt='/img/blank_img.png'/>
                  <div className='user_info'
                
                  >

                    <h6>{chtlist.name}</h6>
                    {chtlist.receive1?
                    <p>{chtlist.receive1}</p>
                    :
                    <p>You: {chtlist.receive1}</p>}
                    
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
                        <>
                           
                            <h5 key={id} className='msg_texts lf'>
                                {sing.receive}
                            </h5>
                            <h5 key={id} className='msg_texts'>
                                {sing.send}
                            </h5>
                            
                        </>
                            )
                            
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
