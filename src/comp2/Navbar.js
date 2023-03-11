import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useState(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
    <Button variant='contained' bordercolor='black' color='primary'><li><Link to="/">Home</Link></li></Button>
    <Button variant='contained' color='primary'><li><Link to="/create-recipe">Create Recipe</Link></li></Button>
    <Button variant='contained' color='primary'><li><Link to="/saved-recipes">Saved Recipes</Link></li></Button>  
    <Button variant='contained' bordercolor='black' color='secondary'><li>search</li></Button>
  
      {!cookies.access_token ? (
        <Link to="/auth">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
};