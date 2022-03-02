import React from "react";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Commande from "./components/Commande";
import Error from "./components/Error";
// import Fitures from "./components/Fitures";
import Caracteristiques from "./components/Caracteristiques";
import NewProduct from "./components/NewProduct";
import Users from "./components/Users";
import UserDetail from "./components/UserDetail";
import Profil from "./components/Profil";
import Login from "./components/Login";
import { AuthProvider } from "./components/Auth";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    // <React.Fragment>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="commande" element={<Commande />} />
        <Route path="products" element={<Products />}>
          {/* <Route path="fitures" element={<Fitures />} /> */}
          <Route index element={<Caracteristiques />} />
          <Route path="newproduct" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />}>
          {/* <Route path="users/1" element={<UserDetail />} />
        <Route path="users/2" element={<UserDetail />} /> */}
          <Route path=":id" element={<UserDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
        <Route path="profil" element={<RequireAuth><Profil/></RequireAuth>} />
        {/* <Route path="profil" element={<RequireAuth age="21"><Profil /></RequireAuth>} /> */}
        <Route path="login" element={<Login />} />
        
      </Routes>
    </AuthProvider>

    // </React.Fragment>
  );
}

export default App;
