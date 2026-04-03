import Sidebar from "../../components/Sidebar";
import FadeIn from "../../components/FadeIn";
import styles from "./contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
              alt="Restaurant Table"
              fill
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn delay={100} direction="up">
              <span className="gold-text">Get in touch</span>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <h1 className={styles.heroTitle}>Contact Us</h1>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <FadeIn>
              <h2>Reservation</h2>
              
              <div className={styles.infoItem}>
                <h3>Address</h3>
                <p>123 Culinary Avenue, Flavor District<br />New Delhi, India 110001</p>
              </div>
              
              <div className={styles.infoItem}>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 11:00 AM - 11:00 PM<br />Saturday - Sunday: 10:00 AM - 12:00 AM</p>
              </div>
              
              <div className={styles.infoItem}>
                <h3>Contact</h3>
                <p>Phone: +91 98765 43210<br />Email: hello@chatorichowk.com</p>
              </div>
            </FadeIn>
          </div>
          
          <div className={styles.contactFormContainer}>
            <FadeIn delay={200}>
              <h2>Book a Table</h2>
              <form>
                <div className={styles.formGroup}>
                  <input type="text" placeholder="Your Name" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" placeholder="Email Address" className={styles.formInput} required />
                </div>
                <div className={styles.formGroup}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <input type="text" placeholder="Date (DD/MM)" className={styles.formInput} required />
                    <input type="text" placeholder="Time" className={styles.formInput} required />
                    <input type="number" placeholder="Guests" min="1" className={styles.formInput} required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <textarea placeholder="Special Requests" className={styles.formTextarea}></textarea>
                </div>
                <button type="submit" className={`gold-button ${styles.submitBtn}`}>Confirm Booking</button>
              </form>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
