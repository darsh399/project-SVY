import React from "react";
import { Routes, Route } from 'react-router-dom';
import ContactStyled from "../PageComponents/Contact/Contact.Styled";
import HomeStyled from "../PageComponents/Home.Styled";
import AboutStyled from "../PageComponents/About/About.Styled";
const Body = () => {
  return (
    <div>
      <Routes>
        <Route path='/about' element={<AboutStyled/>}></Route>
        <Route path="/" element={<HomeStyled />}> </Route>
        <Route path="/contact" element={<ContactStyled />}></Route>
      </Routes>
    </div>
  )
}

export default Body;