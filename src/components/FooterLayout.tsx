export default function FooterLayout(props: { text: string }) {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <p style={textStyle}>
                    &copy; {new Date().getFullYear()} {props.text.toUpperCase()}. All rights reserved.
                </p>
                <ul style={navListStyle}>
                    <li><a href="/privacy" style={linkStyle}>Privacy</a></li>
                    <li><a href="/terms" style={linkStyle}>Terms</a></li>
                    <li><a href="/contact" style={linkStyle}>Contact</a></li>
                </ul>
            </div>
        </footer>
    );
}

// Inline styles
const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px 0',
    borderTop: '1px solid #ddd',
};

const containerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap' as const,
};

const textStyle = {
    margin: 0,
    fontSize: '14px',
    color: '#666',
};

const navListStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '15px',
    margin: 0,
    padding: 0,
};

const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '14px',
};
