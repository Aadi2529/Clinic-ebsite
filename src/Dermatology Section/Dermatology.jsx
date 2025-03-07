

import { BrowserRouter,Routes, Route } from "react-router-dom";


import DermatologySection from "./DermatologySection";
import DermatologyNav from "./DermatologyNav";
import DermatologyAbout from "./dermatologyPages/DermatologyAbout";
import Infection from "./dermatologyPages/Infection";
import Hair from "./dermatologyPages/FemailHairs";
import OtherConditions from "./dermatologyPages/OtherConditions";

const Dermatology = () => {
  return (
    <>
     

      <DermatologyNav />
        
      {/* <Routes>
        <Route path="/dermatology/about" element={<DermatologyAbout />} />
        <Route path="/infection/:type" element={<Infection />} />
        <Route path="/hair/:type" element={<Hair />}  />
        <Route path="/other/:type" element={<OtherConditions />} />       
      </Routes> */}
      <DermatologySection />
      
    </>
  );
};

export default Dermatology;