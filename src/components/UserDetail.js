import React from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {
//   const param=useParams()
//   const id=param.id
const {id}=useParams()
  return (
      
    
    <div>UserDetail {id}</div>
  
  )
}
