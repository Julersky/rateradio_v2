import React, { useState } from 'react';
import './Gallery.scss';
import './VideoPlayer.scss';
import './Card.scss';
// import Player from '../Player/Player';
// Plus tard mettre des props pour le lien API et le nombre de videos a montrer et d'autres filtres si besoin


const Gallery2 = ({data, itemShown}) => {

  const [selectedCard, setSelectedCard] = useState(null);

  const openCard = (cardId) => {
    setSelectedCard(cardId);
  };

  const closeCard = () => {
    setSelectedCard(null);
  };

  const selectedTitle = data.find((item) => item.id.videoId === selectedCard)?.snippet.title;


  let videos = data.filter((video) => video.id.kind === "youtube#video");
  console.log(videos) 

  return (
    <div className='gallery'>
      <div className="content-section">
      {videos.slice(0, itemShown).map((item, i) => (
        <div key = {i} className="card"onClick={() => {openCard(item.id.videoId)}}>
          <section className='card-visual'>
            <img className="card-image"src={item.snippet.thumbnails.medium.url} alt={item.snippet.title}/>
          </section>
          <section className='card-text'>
            <h2 className='card-title'>{item.snippet.title}</h2>
            <p className='card-description'>{item.snippet.title}</p>
          </section>
        </div>
           
      ))}
      {selectedCard !== null && (
        <div className="foreground-card">
          <div className="foreground-content">
            <h4>{selectedTitle}</h4>
            <section>
              <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${selectedCard}?si=YCMDGsqvvV9_8a0G`} 
                title={selectedTitle} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>                
              </iframe>
            </section>
            <button onClick={closeCard}>Fermer</button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Gallery2;
