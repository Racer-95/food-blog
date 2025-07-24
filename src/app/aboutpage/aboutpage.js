import styles from './aboutpage.module.css';

export default function AboutPage() {
    return (
        <div className={styles.main}>
            <h1>About Us</h1>
            <h2>Welcome to Tasty Trail - your delicious guide through the world of flavors!</h2>
            <p>
                At Tasty Trail, we believe food is more than just a meal - it's a journey. Whether it's a cozy homemade recipe, a street-side gem, or an exotic dish from across the globe, we're here to explore it all and share it with you.
            </p>
            <p>
                This blog started with a simple idea: to document the joy of discovering new tastes and sharing them with fellow food lovers. From traditional comfort food to exciting culinary experiments, we're on a mission to inspire your kitchen adventures and satisfy your foodie curiosity.
            </p>
            <h3 className={styles.subheading}>Our Mission</h3>
            <p>
                We aim to celebrate the love for food by bringing you honest reviews, thoughtful recipes, and inspiration for your next bite. Join us on this flavorful journey!
            </p>
            <h3 className={styles.subheading}>Join the Tasty Trail!</h3>
            <p>
                Follow us for mouthwatering updates, behind-the-scenes content, and more. Let's make every meal an experience to remember.
            </p>
        </div>
    );
}