import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navbar.module.css';

const links = [
    { title: 'Home', to: '/' },
    { title: 'About', to: '/about' },
    { title: 'Recipes', to: '/recipes' }
];

export default function Navbar() {
    const router = useRouter();
    const activeLinks = links.map(l => {
        return { ...l, isActive: router.pathname === l.to };
    });
    console.log(activeLinks);
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Demo</div>
            {activeLinks.map((l, i) => (
                <div
                    key={i}
                    // className='link'
                    className={
                        styles.link +
                        ' ' +
                        (l.isActive ? styles.active : styles.inactive)
                    }
                >
                    <Link href={l.to}>{l.title}</Link>
                </div>
            ))}
        </nav>
    );
}
