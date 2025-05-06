import Image from 'next/image'
import styles from './main.module.css';
import {data} from '../data.js'
export default function Mainpage () {
    console.log(data)
    return (
    <div>


      <header className={styles.head}>
        <div>Tasty-Trail</div>
        <div className={styles.nav}>
            <div>Home</div>
            <div>Blogs</div>
            <div>Top Rated</div>
            <div>About Us</div>
        </div>
      </header>

      <div className={styles.line}>
        <h1>Serving Stories on a Plate - Where Every Bite Tells a Tale.</h1>
      </div>

      <div className={styles.main}>
        <div>
            <h1>Welcome to Tasty-Trail one stop for all your Recipes</h1>
        </div>
        <Image src="/food1.jpg" alt="food image" width={600} height={300} />
      </div>

      <div className={styles.slide}>
        <h2>You may like</h2>
        <div className={styles.card}>
            <p>{data[0].name}</p>
            <img src={data[0].image} width={60} height={30}></img>
        </div>
        <button>See All</button>
      </div>

      
      <footer className={styles.foot}>
        <div>
            <h2>Tasty-Trail</h2>
            <p>At TastyBites, we bring you delicious recipes, food stories, and culinary adventures from around the world. Cook with love, eat with joy!</p>
        </div>
        
        <div>
            <h3>Links</h3>
            <ul>
                <li>Home</li>
                <li>Bolgs</li>
                <li>About Us</li>
            </ul>
        </div>

        <div>
            <h3>Contact US</h3>
            <p>Contact No.: +91 3345872362</p>
            <p>Email: xyz@gmail.com</p>
        </div>
      </footer>

    </div>
    );
}