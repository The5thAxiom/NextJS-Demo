import Link from 'next/link';
import { useRouter } from 'next/router';

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
        <nav>
            <div className='logo'>Demo</div>
            {activeLinks.map((l, i) => (
                <div
                    key={i}
                    // className='link'
                    className={'link' + (l.isActive ? ' active' : ' inactive')}
                >
                    <Link href={l.to}>{l.title}</Link>
                </div>
            ))}
        </nav>
    );
}
