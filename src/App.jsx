import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDonations } from "./redux/donation/Donation";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import Contact from "./pages/Contact";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser)
  const dispatch = useDispatch();

  const { donations, loading, error } = useSelector(state => state.donations);
  useEffect(() => {
    dispatch(fetchDonations());
  }, [dispatch]);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
