import React, { useState, useEffect } from 'react';
import './Recommendations.css';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/recommendations')
      .then(response => response.json())
      .then(data => setRecommendations(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const itemsToShow = 3;
  const totalItems = recommendations.length;
  const maxIndex = totalItems - itemsToShow;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : maxIndex));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const totalDots = 5;
  const activeDotIndex = Math.floor(currentIndex / (totalItems / totalDots)) % totalDots;

  return (
    <section id="recommendations">
      <div>
        <h2 className='rec-heading'>Recommendations</h2>
        <p className='rec-para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor<br/>
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
      </div>
      <div className="carousel-container">
        <button onClick={prevSlide} className="carousel-button prev">‹</button>
        <div className="carousel">
          <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
            {recommendations.map(rec => (
              <div key={rec.id} className="carousel-item">
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p className="recommendation">{rec.recommendation}</p>
                  <p className="description">{rec.description}</p>
                  <div className="name">{rec.name}</div>
                </div>
                <img src={rec.image} alt={rec.name} />
              </div>
            ))}
          </div>
        </div>
        <button onClick={nextSlide} className="carousel-button next">›</button>
      </div>
      <div className="carousel-indicators">
        {Array.from({ length: totalDots }).map((_, index) => (
          <div
            key={index}
            className={`dot ${index === activeDotIndex ? 'active' : ''}`}
            onClick={() => goToSlide(Math.floor(index * (totalItems / totalDots)))}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
