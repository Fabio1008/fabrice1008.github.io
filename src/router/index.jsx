import React from "react";
import { Routes, Route } from "react-router-dom";

// --- Pages principales ---
import Accueil from "../containers/accueil/Accueil";
import Apropos from "../containers/appropos/Apropos";
import Competences from "../containers/competences/Competences";
import Contact from "../containers/contact/contact";

// --- Pages projets ---
import ProjectsPage from "../containers/projects/projects"; // Grille des projets
import Project from "../pages/project/index"; // Page de détail

// --- Page d’erreur ---
import Error from "../pages/error/index";

const RoutesPath = () => (
  <Routes>
    <Route path="/" element={<Accueil />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/competences" element={<Competences />} />
    <Route path="/projets" element={<ProjectsPage />} />
    <Route path="/projet/:id" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export default RoutesPath;
