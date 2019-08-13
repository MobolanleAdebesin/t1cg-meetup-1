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
  console.log(`
                --------------------------------------------------------
                NO SOCIAL MEDIA:${!socialMedia} THEN YOU HAVE NOFACEBOOK: ${!Facebook}
                The result is: ${!Facebook && !socialMedia}
                --------------------------------------------------------
                NO SOCIAL MEDIA:${!socialMedia}  BUT YES FACEBOOK: ${Facebook}
                The result is: ${!socialMedia && Facebook}
                --------------------------------------------------------
                IF YOU HAVE SOCIAL MEDIA:${socialMedia} BUT NO FACEBOOK: ${!Facebook}
                The result is: ${socialMedia && !Facebook}
                --------------------------------------------------------
                IF YOU HAVE SOCIAL MEDIA: ${socialMedia}  THEN YOU HAVE FACEBOOK: ${Facebook}
                The result is: ${socialMedia && Facebook}
                --------------------------------------------------------
                 `);

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
            <strong>Name:</strong> {Name ? Name : 'Meetup Member'}
          </li>
          <li>
            <strong>Occupation:</strong>{' '}
            {Occupation.length < 1 ? 'Meetup Member' : Occupation}
          </li>
          <li>
            <strong>Bio:</strong> {Bio.length < 1 ? 'Hello!' : Bio}
          </li>

          {(socialMedia && Twitter) ||
          (socialMedia && !Twitter) ||
          (!socialMedia && Twitter) ||
          (!Twitter && !socialMedia && Twitter !== Twitter) ? (
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
          ) : (
            ''
          )}
          {Facebook && socialMedia ? (
            <li>
              <strong>Facebook:</strong>{' '}
              <a href={Facebook} target="_blank" rel="noopener noreferrer">
                {Facebook}
              </a>
            </li>
          ) : (
            ''
          )}
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
        </ul>
      </div>
    </div>
  );
}
