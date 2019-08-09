import React from 'react';
// import './style.css';

export default function MemberCard({
  id, //not being using, but probably will need in the future
  Name,
  imgURL,
  Occupation,
  Bio,
  socialMedia,
  Twitter,
  Facebook,
  LinkedIn,
  Github
}) {
  return (
    <div className="card memberCard">
      <div className="img-container">
        <img
          alt={Name}
          src={
            imgURL.length < 2 ? 'https://via.placeholder.com/350x150' : imgURL
          }
        />
      </div>
      <div className="memberCardContent">
        <ul>
          <li>
            <strong>Name:</strong> {Name}
          </li>
          <li>
            <strong>Occupation:</strong>{' '}
            {Occupation.length < 1 ? 'Team Member' : Occupation}
          </li>
          <li>
            <strong>Bio:</strong> {Bio.length < 1 ? 'Hello!' : Bio}
          </li>
          {socialMedia ? (
            <>
              <li>
                <strong>Twitter:</strong>{' '}
                <a
                  href={'https://www.twitter.com/' + Twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {Twitter}
                </a>
              </li>
              <li>
                <strong>Facebook:</strong>{' '}
                <a href={Facebook} target="_blank" rel="noopener noreferrer">
                  {Facebook}
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                  {LinkedIn}
                </a>
              </li>
              <li>
                <strong>Github:</strong>{' '}
                <a href={Github} target="_blank" rel="noopener noreferrer">
                  {Github}
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <strong>LinkedIn:</strong>{' '}
                <a href={LinkedIn} target="_blank" rel="noopener noreferrer">
                  {LinkedIn}
                </a>
              </li>
              <li>
                <strong>Github:</strong>{' '}
                <a href={Github} target="_blank" rel="noopener noreferrer">
                  {Github}
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
