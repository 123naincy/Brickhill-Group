import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import GroupBuying from "./pages/GroupBuying";
import WebinarPage from "./pages/WebinarPage";
import GalleryPage from "./pages/Gallery";
import BlogDetail from "./pages/BlogDetail";
import NewsletterCard from "./pages/NewsletterCard";
import NewsletterDetail from "./pages/NewsletterDetail";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/group-buying" element={<GroupBuying />} />
          <Route path="/webinar" element={<WebinarPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/newsletter-card" element={<NewsletterCard />} />
          <Route path="/newsletter/:id" element={<NewsletterDetail />} />

        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
