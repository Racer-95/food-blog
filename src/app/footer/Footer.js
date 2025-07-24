import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.footContent}>
        <div className={styles.column}>
          <h2 className={styles.logo}>TastyTrail</h2>
          <p>
            At TastyTrail, we bring you delicious recipes, food stories, and culinary
            adventures from around the world. Cook with love, eat with joy!
          </p>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/boxpage">Blogs</Link></li>
            <li><Link href="/aboutpage">About Us</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p><strong>Phone:</strong> +91 32304 96965</p>
          <p><strong>Email:</strong> adityashankar0001@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}