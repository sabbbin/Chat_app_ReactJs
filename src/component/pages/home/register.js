import React from 'react'

export default function Register() {
  return (
   <>
   <div 
                      className={'register active'}
                    >

                <form className="form">
                    <div className="form_control">
                        <label>
                            Name
                        </label>
                        <input placeholder="Name" />

                    </div>
                    <div className="form_control">
                        <label>
                            Email
                        </label>
                        <input placeholder="Email" />

                    </div>
                    <div className="form_control">
                        <label>
                            Password
                        </label>
                  
                       
                    
                        <input placeholder="Password" />
                        <button  className="btn btn_show">
                            Show
                        </button>
                      

                    </div>
                    <div className="form_control">
                        <label>
                            Con_Password
                        </label>
                        <input placeholder="Password" />

                    </div>
                    <div className="form_control">
                        <label className="img_file">
                        <input type='file' />
                          Upload Image
                        </label>
                        

                    </div>
                    <button className="btn btn_login">
                        Register
                    </button>

                </form>
                    </div>
   </>
  )
}
