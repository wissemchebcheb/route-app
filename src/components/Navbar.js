import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { useAuth } from './Auth'



export default function Navbar() {
  const auth=useAuth()
  const navLinkStyle=({isActive})=>{
    return{
      fontWeight:isActive?"bold":"normal",
      textDecoration:isActive?"none":"underline"
    }
  }
  return (
    <nav className='primarynav'>
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/about" style={navLinkStyle}>About</NavLink>
        <NavLink to="/products" style={navLinkStyle}>Products</NavLink>
        <NavLink to="/profil" style={navLinkStyle}>Profil</NavLink>
        {
          !auth.user&&(
            <NavLink to="/login" style={navLinkStyle}>Se connecter</NavLink>
          ) 
        }
    </nav>
  )
}
