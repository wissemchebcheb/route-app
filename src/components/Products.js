import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <>
    <div>Products</div>
    <nav>
     <Link to="caracteristique">Caracteristiques</Link>
     <Link to="newproduct">New Products</Link>
    </nav>
    <Outlet/>
    </>
  )
}
