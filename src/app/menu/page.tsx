import Sidebar from "../../components/Sidebar";
import FadeIn from "../../components/FadeIn";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <Sidebar />
      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg"
              alt="Plated Food"
              fill
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <FadeIn delay={100} direction="up">
              <span className="gold-text">Discover</span>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <h1 className={styles.heroTitle}>Our Menu</h1>
            </FadeIn>
          </div>
        </section>

        {/* Menu Section */}
        <section className={styles.menuPageSection}>
          <FadeIn>
            <h2 className={styles.categoryTitle}>Starters</h2>
          </FadeIn>
          <div className={styles.menuGrid}>
            <FadeIn delay={100} direction="up">
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
            <FadeIn delay={200} direction="up">
              <div className={styles.menuItem}>
                <div className={styles.menuItemImage}>
                  <Image src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg" alt="Spici Crispy Prawns" fill />
                </div>
                <div className={styles.menuItemContent}>
                  <div className={styles.menuItemHeader}>
                    <h3>Spici Crispy Prawns</h3>
                    <div className={styles.menuItemDots}></div>
                    <span className={styles.menuItemPrice}>$14</span>
                  </div>
                  <p>Golden fried prawns with a spicy mayo dip.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300} direction="up">
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
            <FadeIn delay={400} direction="up">
              <div className={styles.menuItem}>
                <div className={styles.menuItemImage}>
                  <Image src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg" alt="Bruschetta" fill />
                </div>
                <div className={styles.menuItemContent}>
                  <div className={styles.menuItemHeader}>
                    <h3>Bruschetta</h3>
                    <div className={styles.menuItemDots}></div>
                    <span className={styles.menuItemPrice}>$10</span>
                  </div>
                  <p>Toasted bread topped with tomatoes, garlic, and fresh basil.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h2 className={styles.categoryTitle}>Main Course</h2>
          </FadeIn>
          <div className={styles.menuGrid}>
            <FadeIn delay={100} direction="up">
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
            <FadeIn delay={200} direction="up">
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
            <FadeIn delay={400} direction="up">
              <div className={styles.menuItem}>
                <div className={styles.menuItemImage}>
                  <Image src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg" alt="Chicken Tikka Masala" fill />
                </div>
                <div className={styles.menuItemContent}>
                  <div className={styles.menuItemHeader}>
                    <h3>Chicken Tikka Masala</h3>
                    <div className={styles.menuItemDots}></div>
                    <span className={styles.menuItemPrice}>$22</span>
                  </div>
                  <p>Tender chicken in a rich, creamy tomato gravy with naan.</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <h2 className={styles.categoryTitle}>Desserts</h2>
          </FadeIn>
          <div className={styles.menuGrid} style={{ marginBottom: 0 }}>
            <FadeIn delay={100} direction="up">
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
            <FadeIn delay={200} direction="up">
              <div className={styles.menuItem}>
                <div className={styles.menuItemImage}>
                  <Image src="https://images.pexels.com/photos/1346045/pexels-photo-1346045.jpeg" alt="Chocolate Lava Cake" fill />
                </div>
                <div className={styles.menuItemContent}>
                  <div className={styles.menuItemHeader}>
                    <h3>Chocolate Lava Cake</h3>
                    <div className={styles.menuItemDots}></div>
                    <span className={styles.menuItemPrice}>$16</span>
                  </div>
                  <p>Warm chocolate cake with a molten center and vanilla ice cream.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </>
  );
}
