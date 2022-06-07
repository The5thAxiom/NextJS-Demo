export default function Navbar() {
    return (
        <nav
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
        >
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/recipes/'>Browse recipes</a>
        </nav>
    );
}
