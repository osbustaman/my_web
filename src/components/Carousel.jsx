import React, { useState, useEffect } from 'react';
import './Carousel.css';

export const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambio automático de imágenes cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval); // Limpieza al desmontar
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            {/* Imágenes */}
            <div className="carousel-inner">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${
                            currentIndex === index ? 'active' : ''
                        }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                ))}
            </div>

            {/* Flechas de navegación */}
            <button className="carousel-control prev" onClick={handlePrev}>
                &#8249;
            </button>
            <button className="carousel-control next" onClick={handleNext}>
                &#8250;
            </button>

            {/* Puntos de navegación */}
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};
