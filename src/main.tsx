import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Pedagogie from "./pages/Pedagogie";
import Formations from "./pages/Formations";
import NoCode from "./pages/formations/NoCode";
import DevWeb from "./pages/formations/DevWeb";
import DevMobile from "./pages/formations/DevMobile";
import DevOps from "./pages/formations/DevOps";
import Fullstack from "./pages/formations/Fullstack";
import WebMobile from "./pages/formations/WebMobile";
import Rockstar from "./pages/formations/Rockstar";
import Blog from "./pages/Blog";
import DecouverteWeb from "./pages/formations/DecouverteWeb";
import JePostule from "./pages/JePostule";
import BlogArticle from "./pages/BlogArticle";
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pedagogie" element={<Pedagogie />} />
        <Route path="/formations" element={<Formations />} />
        <Route path="/formations/no-code" element={<NoCode />} />
        <Route path="/formations/dev-web" element={<DevWeb />} />
        <Route path="/formations/dev-mobile" element={<DevMobile />} />
        <Route path="/formations/devops" element={<DevOps />} />
        <Route path="/formations/fullstack" element={<Fullstack />} />
        <Route path="/formations/web-mobile" element={<WebMobile />} />
        <Route path="/formations/rockstar" element={<Rockstar />} />
        <Route path="/formations/decouverte-web" element={<DecouverteWeb />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="/je-postule" element={<JePostule />} />
      </Routes>
    </Router>
  </StrictMode>
);