import Experience from "./Sections/Experience";

import Testimonials from "./Sections/Testimonials";
import Navbar from "./Components/Navbar";
import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import Contact from "./Sections/Contact";

import Project from "./Sections/Project";
import Footers from "./Sections/Footers";
import ParticlesBackgrounds from "./Components/ParticlesBackgrounds";
import CustomCursor from "./Components/CustomCursor"




  export default function App(){
  return( 
 <div className="relative min-h-screen bg-gradient-to-br from-[#302b63] via-[#00bf8f] to-[#1cd8d2] text-white">
<ParticlesBackgrounds></ParticlesBackgrounds>
<CustomCursor></CustomCursor>
    <Navbar></Navbar>
    <Home></Home>
    <Skills></Skills>
    <Project></Project>
    <Experience></Experience>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footers></Footers>
  </div>)
}
