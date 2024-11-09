import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects/projects";
import ProjectView from "./pages/projects/project-view";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Projects />} path="projects" />
        <Route element={<ProjectView />} path="/projects/project-view/:id" />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
