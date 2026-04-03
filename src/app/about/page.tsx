import Sidebar from "../../components/Sidebar";
import FadeIn from "../../components/FadeIn";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
              alt="Restaurant Interior"
              fill
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn delay={100} direction="up">
              <span className="gold-text">Chatori Chowk</span>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <h1 className={styles.heroTitle}>Our Story</h1>
            </FadeIn>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className={styles.contentText}>
            <FadeIn>
              <span className="gold-text">Tradition & Taste</span>
              <h2>A Legacy of Flavors</h2>
              <p>Founded with a passion for authentic culinary experiences, Chatori Chowk has been serving extraordinary food that bridges tradition with modern flair. Our chefs bring together the finest ingredients, hand-picked spices, and time-honored techniques.</p>
              <p>Every dish tells a story, and every meal is an invitation to celebrate the rich tapestry of Indian and global cuisine. We believe in quality, warmth, and creating unforgettable memories for our guests.</p>
            </FadeIn>
          </div>
          <div className={styles.contentImage}>
            <FadeIn delay={200}>
              <Image 
                src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg" 
                alt="Cooking process" 
                fill 
              />
            </FadeIn>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.teamSection}>
          <FadeIn>
            <span className="gold-text">The Masters</span>
            <h2>Meet Our Chefs</h2>
          </FadeIn>
          <div className={styles.teamGrid}>
            <FadeIn delay={100} direction="up">
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" alt="Chef 1" fill />
                </div>
                <h3>Rajesh Kumar</h3>
                <p>Head Chef</p>
              </div>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <div className={styles.teamMember}>
                <div className={styles.memberImage}>
                  <Image src="https://images.pexels.com/photos/3298637/pexels-photo-3298637.jpeg" alt="Chef 2" fill />
                </div>
                <h3>Priya Sharma</h3>
                <p>Pastry Chef</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
