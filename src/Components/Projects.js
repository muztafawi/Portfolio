import React from 'react';
import P1 from '../Assets/Images/project1.jpg';
import P2 from '../Assets/Images/project3.jpg';

function Projects() {
  return (
    <div className="main">
      <div className="filters container">
        <div className="filters__sections">
          <div className="projects__content grid" data-content id="projects">
            <div className="projects__card">
              <img src={P1} alt="Thumnail Images" className="projects__img" />

              <div className="projects__model">
                <div>
                  <span className="projects__subtitle">Web</span>
                  <h3 className="projects__title">Payment Site</h3>
                  <a href="#" className="projects__button button button__small">
                    <i class="ri-link"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="projects__card">
              <img src={P2} alt="Thumnail Images" className="projects__img" />

              <div className="projects__model">
                <div>
                  <span className="projects__subtitle">Mobile</span>
                  <h3 className="projects__title">Fast food app</h3>
                  <a href="#" className="projects__button button button__small">
                    <i class="ri-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
