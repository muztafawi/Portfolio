import React from 'react';
import Image from '../Assets/Images/perfil.png';
import CV from '../Assets/Docs/CV.pdf';
import './Style.css';

function Profile() {
  return (
    <div className="profile container">
      <div className="profile__container grid">
        <div className="profile__data">
          <div className="profile__border">
            <div className="profile__perfil">{/* <img /> */}</div>
          </div>

          <h2 className="profile__name">Amin Mustafa</h2>
          <h3 className="profile__profession"> Web Developer</h3>

          <ul className="profile__social">
            <a
              href="https://www.dribble.com/muztafawi"
              target="_blank "
              className="profile__social-link"
            >
              <i className="ri-dribbble-line"></i>
            </a>

            <a
              href="https://www.github.com/muztafawi"
              target="_blank"
              className="profile__social-link"
            >
              <i className="ri-github-fill"></i>
            </a>

            <a
              href="https://www.linkedin.com/muztafawi"
              target="_blank"
              className="profile__social-link"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
          </ul>
        </div>

        <div className="profile__info grid">
          <div className="profile__info-group">
            <h3 className="profile__info-number">+2</h3>
            <p className="profile__info-description">
              Years of <br /> work
            </p>
          </div>

          <div className="profile__info-group">
            <h3 className="profile__info-number">+6</h3>
            <p className="profile__info-description">
              Completed <br /> projects
            </p>
          </div>

          <div className="profile__info-group">
            <h3 className="profile__info-number">96</h3>
            <p className="profile__info-description">
              Satisfied <br /> customers
            </p>
          </div>
        </div>

        <div className="profile__buttons">
          {/*  Insert your CV */}

          <a download="" href="../Assets/Docs/CV.pdf" className="button">
            Download CV <i className="ri-download-line"></i>
          </a>

          <div className="profile__buttons-small">
            <a
              href=""
              target="_blank"
              className="button button__small button__gray"
            >
              <i className="ri-telegram-line"></i>
            </a>
            <a
              href=""
              target="_blank"
              className="button button__small button__gray"
            >
              <i className="ri-messenger-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
