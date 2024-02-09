import React from 'react'
import "../../components/Login/Login.css"


const Login = () => {
  return (
   <div className="box">
    <form action="">
      <h1>Login</h1>
      <div className="inputbox">
        <label htmlFor="">User Name</label>
        <input type="text"  required="required"/>
      </div>
      <div className="inputbox">
        <label htmlFor="">Password</label>
        <input type="password"  required="required"/>
      </div>
      <button type='submit' value="login" >Submit</button>
    </form>
   </div>
  )
}

export default Login
