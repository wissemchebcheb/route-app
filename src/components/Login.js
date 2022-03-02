import React,{useState}  from 'react';
import {useAuth} from "./Auth";
import { useNavigate, useLocation } from 'react-router-dom';


export default function Login() {
    const [user,setUser]=useState("")
    const auth=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const redirectPath=location.state?.path || "/"

    const handellogin=()=>{
      auth.login(user)
      navigate(redirectPath, {replace:true})
    }
      return (
    <div>
        <label>
            Pseudo: <input type="text" onChange={e=>setUser(e.target.value)}   />
        </label>
        <button onClick={handellogin}>Se connecter</button>
    </div>
  )
}
