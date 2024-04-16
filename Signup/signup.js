import React, { useEffect, useState } from "react"
import './signup.css';
import axios from "axios"
import { NavLink, useNavigate, Link } from 'react-router-dom';
import { postCall,apiEndpoint } from "../utils/api";

function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')


    async function submit(e){
        e.preventDefault();

        // try{

        //     await axios.post("http://localhost:8000/signup",
        //     {
        //         email,password,firstname,lastname
        //     })
        //     .then(res=>{
        //         if(res.data=="exist"){
        //             alert("User already exists")
        //         }
        //         else if(res.data=="notexist"){
        //             history("/",{state:{id:email}})
        //         }
        //     })
        //     .catch(e=>{
        //         alert("wrong details")
        //         console.log(e);
        //     })

        // }
        try{
            let requestBody = { email,password,firstname,lastname
            }
    let res = await postCall("signup",requestBody)
    console.log(res)
              // await axios.post("http://localhost:8000/",{
              //     email,password
              // })
              // .then(res=>{
                  if(res.data=="user exists"){
                      history("/",{state:{id:email}})
                  }
                  else if(res.data=="notexist"){
                      alert("User have not sign up")
                  }
              
              // .catch(e=>{
              //     alert("wrong details")
              //     console.log(e);
              // })
    
          }
        catch(e){
            console.log(e);

        }
    }
    
  return (
    <div className="signup">
      <div class="container-4">
        <h2 class="web">WebSeeking<span>
            </span></h2>
        <div class="text">
            <h1>Sign up</h1>
            <p>Create your WebSeeking account</p>
        </div>
        <div class="your-input">
            <div class="input">
                <input type="text" name="firstName" id="firstName" onChange={(e) => { setFirstname(e.target.value) }} />
                <label for="firstName">First Name</label>
            </div>
            <div class="input">
                <input type="text" name="lastName" id="lastName" onChange={(e) => { setLastname(e.target.value) }} />
                <label for="lastName">Last Name</label>
            </div>
            <div class="input">
                <input type="text" name="emailOrPhone" id="emailOrPhone" onChange={(e) => { setEmail(e.target.value) }} />
                <label for="emailOrPhone">Email/Phone Number</label>
            </div>
            <div class="input">
                <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} />
                <label for="password">Password</label>

            </div>
           <br/>
           <br/>


           <br/>
           <NavLink to="/">

            <button id="btn" onClick={submit}>Sign up</button>
            </NavLink>

         <NavLink to="/Details">

            <button id="btn" >Testing</button>
            </NavLink> 

        </div>
        
       
    </div>
    </div>
  )
}

export default Login;
