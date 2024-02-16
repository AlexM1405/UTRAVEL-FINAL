import React, { useEffect, useRef } from 'react'
import './App.css'
import Navbar from './Componets/NavBar'
import { Routes, Route, useNavigate  } from "react-router-dom";
import Home from './Componets/Pages/Home'
import Services from './Componets/Pages/Services';
import Customers from './Componets/Pages/Customers';
import  Products from './Componets/Pages/Products'
import  SIGNUP from './Componets/Pages/SIGNUP';
import TourDetails from './Componets/TourDetails';
import UserPage from './Componets/Pages/UserPage'
import { auth } from './Config/Firebase';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Costumers" element={<Customers />} />
        <Route path='/SIGNUP' element={<SIGNUP/>} />
        <Route path="/UserPage" element={<ProtectedRoute><UserPage/></ProtectedRoute> }/>
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
const ProtectedRoute = ({ redirectPath = "/UserPage", children }) => {
  const navigate = useNavigate();
  const isMounted = useRef(true); // Ref to track if the component is mounted

  useEffect(() => {
    const token = localStorage.getItem("firebaseToken");
    let unsubscribe;

    if (token) {
      unsubscribe = auth.onAuthStateChanged((user) => {
        if (isMounted.current && !user) {
          navigate(redirectPath);
        }
      });
    } else {
      navigate(redirectPath);
    }

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
      isMounted.current = false; // Set ref to false when the component unmounts
    };
  }, [navigate, redirectPath]); // Added navigate and redirectPath to dependencies

  return children;
};





export default App
