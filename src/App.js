import "./styles.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";


import Buttons from "./Buttons";
import IssueCardDemo from "./Issue-Card";
import CompareCardDemo from "./Compare-Card";


function Navigation() {
  return(
  <div id="navigation" class="py-4 px-2 flex items-center transition-colors text-base font-semibold fixed bottom-0 border border-t-1 w-full bg-white">
    <NavLink exact to='/' className="p-2 px-4 rounded-full ">Home</NavLink>
    <NavLink to='/buttons' className="p-2 px-4 rounded-full">Buttons</NavLink>
    <NavLink to='/issues' className="p-2 px-4 rounded-full">Issues</NavLink>
    <NavLink to='/compare' className="p-2 px-4 rounded-full">Compare</NavLink>
  </div>
)}

export default function App() {
  return (
    <div>
      <Navigation /> 
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="home" element={<div>Home</div>} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="issues" element={<IssueCardDemo />} />
        <Route path="compare" element={<CompareCardDemo />} />
      </Routes>
      
    </div>
  );
}
