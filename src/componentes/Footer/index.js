import "./Footer.css";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className='redes'>
            <a href='#'>
                <img className="logo_red" src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='#'>
                <img className="logo_red" src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='#'>
                <img className="logo_red" src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img class="logo_org" src='/img/Logo.png' alt='org' />
        <strong className="texto_footer">Desarrollado por Jonathan Saravia</strong>
    </footer>
}

export default Footer;