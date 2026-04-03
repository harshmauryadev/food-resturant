"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    subtitle: "Premium Quality",
    title: <><span className={styles.titleLine}>The Authentic</span><br /><span className={styles.titleLine}>Restaurant Experiences</span></>
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    subtitle: "Unforgettable Taste",
    title: <><span className={styles.titleLine}>A Journey of</span><br /><span className={styles.titleLine}>Exquisite Flavors</span></>
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSlider}>
      {slides.map((slide, index) => (
        <div 
          key={slide.id} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={slide.image}
              alt="Restaurant Background"
              fill
              priority={index === 0}
            />
          </div>
          <div className={styles.slideContent}>
            <span className="gold-text">{slide.subtitle}</span>
            <h1 className={styles.title}>
              {slide.title}
            </h1>
            <Link href="/contact" className="gold-button" style={{ display: 'inline-block' }}>
              Book a Table
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
