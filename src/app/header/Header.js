import styles from './Header.module.css';
import Link from 'next/link';


export default function head () {
    return (
        <header className={styles.head}>

            <div>Tasty-Trail</div>
            
            <div className={styles.nav}>

                <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>Home</div>
                </Link>

                <div>Blogs</div>
                <div>Top Rated</div>

                <Link href='/aboutpage' style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>About Us</div>
                </Link>
            </div>
        </header>
    );
}