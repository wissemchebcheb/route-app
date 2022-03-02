import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Commande() {
  const retour=useNavigate();
  return (
    <>
    <div>commande</div>
    <button onClick={()=>retour(-1)}>Retour</button>
    </>
  )
}
