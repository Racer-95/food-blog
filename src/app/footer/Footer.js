import styles from './Footer.module.css';
import Link from 'next/link';


export default function foot () {
    return (
        <footer className={styles.foot}>
            <div>
                <h2>Tasty-Trail</h2>
                <p>At Tasty-Trail, we bring you delicious recipes, food stories, and culinary adventures from around the world. Cook with love, eat with joy!</p>
            </div>
            
            <div>
                <h3>Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Blogs</li>
                    <li>About Us</li>
                </ul>
            </div>

            <div>
                <h3>Contact US</h3>
                <p>Contact No.: +91 3345872362</p>
                <p>Email: xyz@gmail.com</p>
            </div>
      </footer>
    )
}