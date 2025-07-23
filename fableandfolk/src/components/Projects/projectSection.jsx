"use client";
import "./project.css";
import { Link } from "react-router-dom";
import ProjectsData from "../../Data/projectData"; // Adjust if needed

export default function ProjectSection() {
  return (
    <section className="Latest-projects">
      <div className="section-Heading">
        <h2>Latest Projects</h2>
      </div>

      {ProjectsData.map((project, index) => (
        <div className="projectArray" key={project.id}>
          <div className="p-1">
            {/* Alternate image + content sides */}
            {index % 2 === 0 ? (
              <>
                <div className="image-1">
                  {/* Replace with <img src={project.image} /> when real images exist */}
                  <h1>{project.imageAlt || "Here comes image"}</h1>
                </div>
                <div className="p1-content">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <Link to={`/work/${project.id}`}>
                      <button id={`p-${index + 1}`}>view</button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p1-content">
                  <div>
                    <h2>{project.title}</h2>
                  </div>
                  <div>
                    <p>{project.description}</p>
                  </div>
                  <div>
                    <Link to={`/work/${project.id}`}>
                      <button id={`p-${index + 1}`}>view</button>
                    </Link>
                  </div>
                </div>
                <div className="image-1">
                  <h1>{project.imageAlt || "Here comes image"}</h1>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
