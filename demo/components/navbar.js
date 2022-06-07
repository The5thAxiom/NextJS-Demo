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
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Demo</div>
            {activeLinks.map((l, i) => (
                <Link key={i} href={l.to}>
                    <div
                        className={
                            styles.link +
                            ' ' +
                            (l.isActive ? styles.active : styles.inactive)
                        }
                    >
                        {l.title}
                    </div>
                </Link>
            ))}
        </nav>
    );
}
