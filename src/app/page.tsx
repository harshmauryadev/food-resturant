import Sidebar from "../components/Sidebar";
import FadeIn from "../components/FadeIn";
import HeroSlider from "../components/HeroSlider";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main className={styles.mainContent}>
        <HeroSlider />

        {/* Info Split Section (Dark) */}
        <section className={styles.splitSectionDark}>
          <div className={styles.splitImage}>
            <Image
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
              alt="Plated Dish"
              fill
            />
          </div>
          <div className={styles.splitContent}>
            <FadeIn>
              <h2>We help your<br />business grow</h2>
            </FadeIn>

            <div className={styles.featuresList}>
              <FadeIn delay={200}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <Image src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="High Quality" fill />
                  </div>
                  <div className={styles.featureText}>
                    <h3>High Quality Standards</h3>
                    <p>High-quality content tailored for diverse platforms and audiences.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={400}>
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    <Image src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Attention To Detail" fill />
                  </div>
                  <div className={styles.featureText}>
                    <h3>Attention To Detail</h3>
                    <p>Strategic financial planning services to help grow sustainably.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Solutions Section (Light/Split) */}
        <section className={styles.splitSectionLight}>
          <div className={styles.splitImage}>
            <Image
              src="https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg"
              alt="Cocktail"
              fill
            />
          </div>
          <div className={styles.splitContent}>
            <FadeIn>
              <span className="gold-text">What we do</span>
              <h2>Solutions made<br />for your needs</h2>
              <p>Our team is committed to delivering high-quality services tailored to your needs. With years of experience and a passion for excellence, we focus on creating solutions that truly make a difference.</p>
              <p>We pride ourselves on offering personalized support that helps you reach your goals. Every project is approached with dedication.</p>
              <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                <button className="gold-button">Demos</button>
                <button className="gold-button" style={{ backgroundColor: '#111', color: '#fff' }}>Purchase</button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Gallery/Services Section */}
        <section className={styles.gallerySection}>
          <div className={styles.galleryItem}>
            <FadeIn delay={0}>
              <div className={styles.galleryItemImage}>
                <Image src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Support" fill />
              </div>
              <div style={{ padding: '0 30px', textAlign: 'center' }}>
                <h3>Support</h3>
                <p>Commitment To Excellence</p>
              </div>
            </FadeIn>
          </div>
          <div className={styles.galleryItem} style={{ backgroundColor: '#fff' }}>
            <FadeIn delay={200}>
              <div className={styles.galleryItemImage}>
                <Image src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" alt="Maintenance" fill />
              </div>
              <div style={{ padding: '0 30px', textAlign: 'center' }}>
                <h3>Maintenance</h3>
                <p>Tailored Quality Solutions</p>
              </div>
            </FadeIn>
          </div>
          <div className={styles.galleryItem}>
            <FadeIn delay={400}>
              <div className={styles.galleryItemImage}>
                <Image src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" alt="Marketing" fill />
              </div>
              <div style={{ padding: '0 30px', textAlign: 'center' }}>
                <h3>Marketing</h3>
                <p>Carefully Crafted Results</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Menu Section */}
        <section className={styles.menuSection}>
          <FadeIn>
            <div className={styles.menuHeader}>
              <span className="gold-text">Discover</span>
              <h2>Our Menu</h2>
            </div>
          </FadeIn>
          <div className={styles.menuGrid}>
            {/* Menu Column 1 */}
            <div className={styles.menuColumn}>
              <FadeIn delay={100} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg" alt="Avocado Toast" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Avocado Toast</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$12</span>
                    </div>
                    <p>Smashed avocado, cherry tomatoes, micro greens on sourdough.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={200} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg" alt="Truffle Fries" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Truffle Fries</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$9</span>
                    </div>
                    <p>Crispy fries tossed in truffle oil and parmesan cheese.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={300} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg" alt="Mushroom Risotto" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Mushroom Risotto</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$24</span>
                    </div>
                    <p>Wild mushrooms, arborio rice, white wine, garlic, cream.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            {/* Menu Column 2 */}
            <div className={styles.menuColumn}>
              <FadeIn delay={200} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg" alt="Grilled Salmon" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Grilled Salmon</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$32</span>
                    </div>
                    <p>Norwegian salmon with asparagus and lemon butter sauce.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={300} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg" alt="Wagyu Steak" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Wagyu Steak</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$65</span>
                    </div>
                    <p>A5 Wagyu beef, truffle mashed potatoes, red wine reduction.</p>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={400} direction="up">
                <div className={styles.menuItem}>
                  <div className={styles.menuItemImage}>
                    <Image src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg" alt="Crème Brûlée" fill />
                  </div>
                  <div className={styles.menuItemContent}>
                    <div className={styles.menuItemHeader}>
                      <h3>Crème Brûlée</h3>
                      <div className={styles.menuItemDots}></div>
                      <span className={styles.menuItemPrice}>$14</span>
                    </div>
                    <p>Classic vanilla bean custard with caramelized sugar crust.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button className="gold-button">View Full Menu</button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialBackground}>
            <Image
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg"
              alt="Restaurant background"
              fill
            />
          </div>
          <div className={styles.testimonialContent}>
            <FadeIn>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <h2>"An absolute masterpiece of culinary experience. The ambiance and attention to detail are spectacular."</h2>
              <span className="gold-text">John Doe, Food Critic</span>
            </FadeIn>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <FadeIn>
            <div className={styles.footerLogo}>CC</div>
            <div className={styles.footerLinks}>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/menu">Menu</a>
              <a href="/contact">Contact</a>
            </div>
            <p className={styles.footerCopy}>© 2026 Chatori Chowk. All rights reserved.</p>
          </FadeIn>
        </footer>
      </main>
    </>
  );
}
