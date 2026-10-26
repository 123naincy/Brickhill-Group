import { Link } from "react-router-dom";
import Seo from "../components/seo/Seo";
import { getNotFoundSeo } from "../seo/manifest";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const { pathname } = useLocation();
  const entry = getNotFoundSeo(pathname);

  return (
    <>
      <Seo entry={entry} />
      <main className="pt-24 lg:pt-32 min-h-[70vh] bg-[#f7fbff]">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-[#3d85c5] font-semibold tracking-wide">404</p>
          <h1 className="text-4xl font-bold text-[#073762] mt-3">Page not found</h1>
          <p className="text-neutral-600 mt-4 text-lg">
            The page you requested is not available. You can go back to the
            homepage or continue to a main section of Brickhill Group.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Link to="/" className="bg-gradient-to-r from-[#073762] to-[#3d85c5] text-white px-6 py-3 rounded-full font-semibold">
              Homepage
            </Link>
            <Link to="/projects" className="border border-[#9fc5e9] text-[#073762] px-6 py-3 rounded-full font-semibold bg-white">
              Projects
            </Link>
            <Link to="/contact" className="border border-[#9fc5e9] text-[#073762] px-6 py-3 rounded-full font-semibold bg-white">
              Contact
            </Link>
            <Link to="/blog" className="border border-[#9fc5e9] text-[#073762] px-6 py-3 rounded-full font-semibold bg-white">
              Blog
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
