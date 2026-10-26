import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/seo/Analytics";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GroupBuying from "./pages/GroupBuying";
import WebinarPage from "./pages/WebinarPage";
import GalleryPage from "./pages/Gallery";
import BlogDetail from "./pages/BlogDetail";
import FloatingIcons from "./components/home/FloatingIcons";
import Newsletter from "./pages/Newsletter";
import AaranyaPage from "./pages/Aaranya";
import NotFound from "./pages/NotFound";

const NewsletterViewer = lazy(() => import("./pages/NewsletterViewer"));

function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return <Navigate to={pathname.slice(0, -1)} replace />;
  }

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <Analytics />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/group-buying" element={<GroupBuying />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/aaranya" element={<AaranyaPage />} />
          <Route path="/Aaranya" element={<Navigate to="/aaranya" replace />} />
          <Route
            path="/newsletter/:id"
            element={
              <Suspense fallback={<main className="viewer-page" aria-busy="true" />}>
                <NewsletterViewer />
              </Suspense>
            }
          />
          <Route path="/newsletter-card" element={<Navigate to="/newsletter" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <FloatingIcons />
      </div>
    </BrowserRouter>
  );
}
