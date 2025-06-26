import Link from 'next/link';

export default function Header(props: { text: string }) {
    // export const HeaderLayout = (props: { text: string }) => {
    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <h1 style={logoStyle}>
                    <Link href="/" style={linkStyle}>{props.text.toUpperCase()}</Link>
                </h1>
                <nav>
                    <ul style={navListStyle}>
                        <li><Link href="/" style={linkStyle}>Home</Link></li>
                        <li><Link href="/about" style={linkStyle}>About</Link></li>
                        <li><Link href="/services" style={linkStyle}>Services</Link></li>
                        <li><Link href="/contact" style={linkStyle}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

// Inline CSS styles
const headerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px 0',
    width: '100%',
};

const containerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
};

const logoStyle = {
    margin: 0,
    fontSize: '24px',
};

const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
};
