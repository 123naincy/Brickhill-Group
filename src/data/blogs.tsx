import EstateTrendsImg1 from "../assets/blog/estate-trends.jpg";
import EstateTrendsImg2 from "../assets/blog/estate-trends-two.jpg";
import EstateTrendsImg3 from "../assets/blog/estate-trends-three.jpg";
import EstateTrendsImg4 from "../assets/blog/estate-trends-four.jpg";
import EstateTrendsImg5 from "../assets/blog/estate-trends-five.jpg";

export const blogs = [
  {
    id: 1,
    title: "Real Estate Trends Shaping the Future of Property Investment",
    date: "March 27, 2026",
    author: "Admin",
    category: "Real Estate",
    image: EstateTrendsImg1,

    content: (
      <>
        <h2>Real Estate Trends Shaping the Future of Property Investment</h2>

        <p>
          The <a href="https://www.brickhillandbase.com">real estate</a> market is constantly evolving...
        </p>

        {/* 👇 Image after intro */}
        <img src={EstateTrendsImg2} alt="Real Estate Trends" className="img-fluid my-3 rounded" />

        <p>
          One of the biggest changes in real estate today is the rising demand for sustainable and smart homes...
        </p>

        {/* 👇 Image in middle */}
        <img src={EstateTrendsImg3} alt="Smart Homes" className="img-fluid my-3 rounded" />

        <p>
          Another key trend shaping the real estate sector is the rapid development of suburban and emerging areas...
        </p>

        {/* 👇 Image */}
        <img src={EstateTrendsImg4} alt="Suburban Growth" className="img-fluid my-3 rounded" />

        <p>
          Technology has also transformed how people interact with the real estate market...
        </p>

        {/* 👇 Final Image */}
        <img src={EstateTrendsImg5} alt="Real Estate Technology" className="img-fluid my-3 rounded" />

        <p>
          In conclusion, the real estate industry offers strong potential for growth and stability...
        </p>
      </>
    )
  }
];