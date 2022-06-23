const chat=[
    {
     id:0,
        name:'kanchan suwal',
        email:'kanchan@gmail.com',
        img:'/img/blank_img.png',
        chatmsg:[{
            id:1,
            msg:[
                {

                    send:['how are your ']
                },{

                    receive:['i am fine']
                }
                
                 ,{

                     send :['k gardai xas ']
                 },
                 {

                     receive:['bashi rako ho']
                 }
                
                
            ]
        },
        {
            id:2,
            msg:[{ 
                send:['khana khyes '],}
                ,{

                    receive:['khaya taila']
                }
                
        ,{
            send :['swimming garna jani ho'],}
            ,{ 
            receive:['pachi jaula']
        }]
        }
    ]
     },
     {
        id:1,
           name:'sabin suwal',
           email:'sabin@gmail.com',
           img:'/img/blank_img.png',
           chatmsg:[{
               id:0,
               msg:[
                   {
                       send:['bashi rako ho'],
                   },{ 
                       receive :['k gardai xas '],
                   }
                   ,{ 
                       send:['i am fine'],
                   },{ 
                   receive:['how are your '],
                   
           }
               ]
           }
       ]
        },
        {
            id:2,
               name:'rabin suwal',
               email:'rabin@gmail.com',
               img:'/img/blank_img.png',
               chatmsg:[
               {
                   id:0,
                   msg:[{ 
                       send:['khaya taila'],
                   }, { 
                       receive:['khana khyes '],
                       
               },{
                   send:['pachi jaula'],},
                   { 
                   receive :['swimming garna jani ho'],
               }]
               }
           ]
            }

   


]



export const chatdata={
    chat
}