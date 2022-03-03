import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

export default function Profil() {

  const auth=useAuth()
  const navigate=useNavigate()
  const deconnexion=()=>{
    auth.logout()
    navigate("/")
  }

  return (
    <>
      <h1 style={{textAlign:"center"}}>Bonjour {auth.user} </h1>
      <button onClick={deconnexion}>Se déconnecter</button>
      {/* {auth.user&&(
        <button onClick={deconnexion}>Se déconnecter</button>
      )} */}
    </>
  )
}
