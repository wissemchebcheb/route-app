import React from 'react'
import { useAuth } from './Auth'
import {Navigate, useLocation} from 'react-router-dom'


export default function RequireAuth({children,age}) {
    const location=useLocation()
    console.log(location, "location")
    const auth=useAuth()
    if(!auth.user) {
        return( 
        <Navigate to="/login" state={{path:location.pathname}} />
        // <p>{age}</p>
        )
    }else{
        return children
    }
}
