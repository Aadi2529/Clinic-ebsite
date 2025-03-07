// // import React from 'react'

// // import ApproachSection from './ApporachSection'
// // import Treatments from './Treatments'
// // import AnimatedSection from './AnimatedSection'

// // import Feacturs from './Feacturs'
// // import BlogSection from './BlogSection'
// // import AboutSection from './AboutSection'

// // import DermatologyHero from './DermatoloyHero'
// // import DermatologyNav from './DermatologyNav'




// // const Dermatology = () => {
// //   return (
// //     <div>
// //       <DermatologyNav/>
// //      <DermatologyHero />
// //       <ApproachSection />
// //       <Treatments />
// //       <AnimatedSection />
// //       <AboutSection />
// //       <Feacturs />
// //       <BlogSection />
// //     </div>
// //   )
// // }

// // export default Dermatology;






















// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import DermatologyAbout from "../pages/DermatologyAbout";
// import DermatologyEvents from "../pages/DermatologyEvents";
// import DermatologyBlog from "../pages/DermatologyBlog";
// import DermatologyGallery from "../pages/DermatologGallery";
// import DermatologySection from "../pages/DermatologySection";
// import DermatologyNav from "./DermatologyNav";
// import DermatologGallery from "../pages/DermatologGallery";

// const Dermatology = () => {
//   return (
//     <>
//     <Router>
//       <DermatologyNav />
//       <Routes>
//         <Route path="/dermatology" element={<DermatologySection />} />
//         <Route path="/about" element={<DermatologyAbout />} />
//         <Route path="/events" element={<DermatologyEvents />} />
//         <Route path="/blog" element={<DermatologyBlog />} />
//         <Route path="/gallery" element={<DermatologyGallery />} />
//       </Routes>
//       </Router>
//       <DermatologySection />
//     </>
//   );
// };

// export default Dermatology;





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