import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "../pages/Home";
import AppointmentPage from "../pages/AppointmentPage";
import Dentis from "../Dentis Section/Dentis";
import Dibeties from "../Dibeties Section/Dibeties";
import Dermatology from "../Dermatology Section/Dermatology"; 
import Dental_Service from "../Dentis Section/Dental_Service";
import Infection from "../Dermatology Section/dermatologyPages/Infection";
import OtherConditions from "../Dermatology Section/dermatologyPages/OtherConditions";
import DermatologyAbout from "../Dermatology Section/dermatologyPages/DermatologyAbout";
import DermatologyEvents from "../Dermatology Section/dermatologyPages/DermatologyEvents";
import DermatologyBlog from "../Dermatology Section/dermatologyPages/DermatologyBlog";
import DermatologyGallary from "../Dermatology Section/dermatologyPages/DermatologyGallary";
import Bactira from "../Dermatology Section/dermatologyPages/Bactira";
import Viral from "../Dermatology Section/dermatologyPages/Viral";
import FemailHairs from "../Dermatology Section/dermatologyPages/FemailHairs";
import MaleHairs from "../Dermatology Section/dermatologyPages/MaleHairs";
import Rosacea from "../Dermatology Section/dermatologyPages/Rosacea";
import Psoriasis from "../Dermatology Section/dermatologyPages/Psoriasis";
import Vitiligio from "../Dermatology Section/dermatologyPages/Vitiligio";
import Melasma from "../Dermatology Section/dermatologyPages/Melasma";
import Eczema from "../Dermatology Section/dermatologyPages/Eczema";
import SkinNail from "../Dermatology Section/SkinCareDesies/SkinNail";
import ACNE from "../Dermatology Section/SkinCareDesies/ACNE";
import Ringworm from "../Dermatology Section/SkinCareDesies/Ringworm";
import PsoriasisTreat from "../Dermatology Section/SkinCareDesies/PsoriasisTreat";
import Peels from "../Dermatology Section/SkinCareDesies/Peels";
import Glutathione from "../Dermatology Section/SkinCareDesies/Glutathione";
import CavitationPeel from "../Dermatology Section/SkinCareDesies/CavitationPeel";
import Batox from "../Dermatology Section/Anti Ageing/Batox";
import Radiofrequency from "../Dermatology Section/Anti Ageing/Radiofrequency";
import LeaserSkin from "../Dermatology Section/Anti Ageing/LeaserSkin";
import HandRejuvenation from "../Dermatology Section/Anti Ageing/HandRejuvenation";
import NeckRejuvenation from "../Dermatology Section/Anti Ageing/NeckRejuvenation";
import ChemicalPeels from "../Dermatology Section/Anti Ageing/ChemicalPeels";
import HairTransplant from "../Dermatology Section/Hair Section/HairTransplant";
import PlasmaTherapy from "../Dermatology Section/Hair Section/PlasmaTherapy";
import StemTherapy from "../Dermatology Section/Hair Section/StemTherapy";
import HairReduction from "../Dermatology Section/Leaser Section/HairReduction";
import TattoRemovel from "../Dermatology Section/Leaser Section/TattoRemovel";
import AcneCars from "../Dermatology Section/Leaser Section/AcneCars";
import { Suspense } from "react";
import AlopeciaAreata from "../Dermatology Section/dermatologyPages/AlopeciaAreata";
// import DermatologySection from "./Dermatology Section/DermatologySection";
// import { Suspense, lazy } from "react";


// const Dermatology = lazy(() => import("../Dermatology Section/Dermatology"));
// const Dental_Service = lazy(() => import("../Dentis Section/Dentis"));
// const Dibeties = lazy (() => import("../Dibeties Section/Dibeties"))
const HomePage = () => {

  return (
    
    <>
    
    <Helmet>
        <title>Kalyankar Clinic | Best Clinic in Sambhaji Nagar</title>
        <meta name="description" content="Kalyankar Clinic - Expert Dermatology, Dentist & Diabetes Treatment in Sambhaji Nagar." />
        <meta name="keywords" content="Clinic in Sambhaji Nagar, Dermatology, Dentist, Diabetes, Kalyankar Clinic" />
        <meta name="author" content="Kalyankar Clinic" />
        <meta property="og:title" content="Kalyankar Clinic | Best Clinic in Sambhaji Nagar" />
        <meta property="og:description" content="Expert Dermatology, Dentist & Diabetes Treatment at Kalyankar Clinic." />
        <meta property="og:image" content="/clinic-preview.jpg" />
        <meta property="og:url" content="https://www.kalyankarclinic.com" />
      </Helmet> 

      <Suspense fallback ={<div>Loading..</div>}>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/dibeties" element={<Dibeties />} />
        <Route path="/dentis" element={<Dentis />} />
        <Route path="/dermatology/*"  element={<Dermatology />} />
        <Route path="/dental_service" element={<Dental_Service />} />
      
        
         {/*  DERMATOLOGY  */}

        {/* <Route path="/dermatology/about" element={<DermatologyAbout />} /> */}
        <Route path="/dermatology/events" element={<DermatologyEvents />}/>
        <Route path="/dermatology/galary" element={<DermatologyGallary />}/>
        <Route path="/dermatology/blog" element={<DermatologyBlog />}/>
        <Route path="/infection" element={<Infection />} />
        <Route path="/bacteria" element ={<Bactira />} />
        <Route path="/viral" element={<Viral />} />
        <Route path="/hair/female" element={<FemailHairs />}  />
        <Route path="/hair/male" element={<MaleHairs />}  />
        <Route path="/hair/areata" element={<AlopeciaAreata />}  />
        
        <Route path="/other" element={<OtherConditions />} /> 
        <Route path= "/other/Rosacea" element={<Rosacea />} />
        <Route path="/other/psoriasis" element={<Psoriasis />}></Route>
        <Route path ="/other/vitiligo" element={<Vitiligio />} />
        <Route path="/other/eczema" element={<Eczema />} />
        <Route path="/other/melasma" element={<Melasma />} />

        <Route path= "/skincare/skinnail" element={<SkinNail />} />
        <Route path= "/skin/acne" element={<ACNE />} />
        <Route path= "/skin/fungal-infection" element={<Ringworm />} />
        <Route path= "/skin/psoriasis" element={<PsoriasisTreat/>} />
        <Route path= "/lightening/peels" element={<Peels/>} />
        <Route path= "/lightening/glutathione" element={<Glutathione/>} />
        <Route path= "/lightening/CavitationPeel" element={<CavitationPeel/>} />


        <Route path= "/antiagein/botoxfillers" element={<Batox/>} />
        <Route path= "/antiagein/vampirefacial" element={<CavitationPeel/>} />
        <Route path= "/antiagein/radiofrequency" element={<Radiofrequency/>} />
        <Route path= "/skin/leaserskin" element={<LeaserSkin/>} />
        <Route path= "/skin/hand-rejuvenation" element={<HandRejuvenation/>} />
        <Route path= "/skin/neck-rejuvenation" element={<NeckRejuvenation/>} />
        <Route path= "/skin/chemical-peels" element={<ChemicalPeels/>} />


        <Route path= "/hair/hair-transplant" element={<HairTransplant />} />
        <Route path= "/hair/plasma-therapy" element={<PlasmaTherapy/>} />
        <Route path= "/hair/stem-cell-therapy" element={<StemTherapy/>} />


        <Route path= "/leaser/hair-reduction" element={<HairReduction />} />
          {/* <Route path= "/leaser/pigmentation" element={<Pigmentation />} /> */}
         <Route path= "/leaser/tatto-removel" element={<TattoRemovel/>} />
         <Route path= "/leaser/ance-scars" element={<AcneCars/>} /> 
        
      
      
        
        
      </Routes>
      </Suspense>
    {/* </Router> */}
    
   </>
  );
};

export default HomePage;

 



