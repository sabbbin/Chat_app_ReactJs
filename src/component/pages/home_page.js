import React from "react";
import './home_page.css'


export default function Home_page() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="home_header">Talk-A-Tive</div>

          <div className="home_content">
                <div className="home_content_header">
                  <button className="active">Login</button>
                  <button>Sign Up</button>
                </div>
                <div className="login active">

                <form className="form">
                    <div className="form_control"> 
                    <label>
                        Email Address
                    </label>
                    <input type='email' placeholder="Enter your Email Address" />
                    </div>
                    <div className="form_control"> 
                    <label>
                        Password
                    </label>
                     <input placeholder="Enter password" />
                  
                        <button  className="btn btn_show">
                            Show
                        </button>
                  
                    </div>
                    <button className="btn btn_login">
                        Login
                    </button>
                   
                </form>
                <button className="btn btn_guest">
                        Get Guest User Credentials
                    </button>
                </div>
                    <div className="register">

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
                 
          </div>
        </div>
      </div>
    </>
  );
}
