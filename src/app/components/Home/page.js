import Image from 'next/image'
import styles from './main.module.css';
export default function Mainpage () {
    return (
    <div>


      <header className={styles.head}>
        <div>Tasty-Trail</div>
        <div>Home</div>
        <div>Blogs</div>
        <div>Top Rated</div>
        <div>About Us</div>
      </header>

      <div className={styles.main}>
        <div>
            <h1>Welcome to Tasty-Trail one stop for all your Recipes</h1>
            <h1>Serving Stories on a Plate - Where Every Bite Tells a Tale.</h1>
        </div>
        <Image src="/food1.jpg" alt="food image" width={600} height={300} />
      </div>

      <div className={styles.slide}>
        <h2>You may like</h2>
        <button>See All</button>
      </div>

      <footer className={styles.foot}>
        <h2>Contact US</h2>
        <p>Contact No.: +91 3345872362</p>
        <p>Email: xyz@gmail.com</p>
      </footer>

    </div>
    );
}