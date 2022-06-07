import Link from 'next/link';

export default function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
        >
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/recipes/'>Browse recipes</Link>
        </nav>
    );
}
