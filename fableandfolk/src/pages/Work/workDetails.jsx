"use client";
import "./work.css";
import { useParams } from "react-router-dom";

import workData from "../../Data/workData"; // adjust path as needed
import Footer from "../../components/Footer/footer" 
import Navbar from "../../components/Navbar/navbar";
import TickerBand from "../../components/Ticker Band/tickerband";


export default function WorkDetailsSection() {
  const { id } = useParams();
  const work = workData.find((w) => w.id === parseInt(id));

  if (!work) return <div>Work not found</div>;

  return (
    <>
      <Navbar />
      <section className="Our-work">
        <div className="header-container">
          <h1 className="project-title">{work.title}</h1>
          <p className="project-description">{work.description}</p>
        </div>

        <div className="work-image">
          <h3>Image Placeholder</h3>
          {/* <img src={work.mainImage} alt="main" /> */}
        </div>

        <div className="fable-container">
          <div className="our-name">
            <h1>The Fable</h1>
            <p>{work.fable}</p>
          </div>
          <div className="our-story">
            <h1>The Folk</h1>
            <p>{work.folk}</p>
          </div>
        </div>

        <TickerBand  text='The Craft'/>
        
        <div className="Gallery-container">
          <div className="row-1">
            <p>{work.gallery[0]}</p>
            <p>{work.gallery[1]}</p>
          </div>
          <div className="row-2">
            <p>{work.gallery[2]}</p>
          </div>
          <div className="row-3">
            <p>{work.gallery[3]}</p>
          </div>
        </div>

        <div className="quote-section">
          <div>
            <h1>{work.quote}</h1>
            <p>{work.quoteAuthor}</p>
          </div>
          <div>
            <button>
              Work
              <br />
              With
              <br />
              Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
