import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

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
    const t = activeLinks.filter(l => l.isActive)[0];
    const title = t ? t.title : '';
    return (
        <nav className={styles.navbar}>
            <Head>
                <title>{title}</title>
            </Head>
            <Image src='/bolt.svg' height='48px' width='48px' />
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
