import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./containers/accueil/Accueil";
import Apropos from "./containers/appropos/Apropos";
import Competences from "./containers/competences/Competences";
import Projets from "./containers/projects/projects";
import Contact from "./containers/contact/contact";

const RoutesPath = () => (
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/competences" element={<Competences />} />
    <Route path="/projets" element={<Projets />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default RoutesPath;
