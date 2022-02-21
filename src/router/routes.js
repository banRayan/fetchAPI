import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import  Login  from "../pages/Login";
import Profile from "../pages/Profile/profile";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}

export default MainRoutes;