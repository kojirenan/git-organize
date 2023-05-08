import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
             <ul className='list'>
                <li><a href="#"><img src="/images/fb.png" alt="facebook" /></a></li>
                <li><a href="#"><img src="/images/tw.png" alt="twitter" /></a></li>
                <li><a href="#"><img src="/images/ig.png" alt="instagram" /></a></li>
             </ul>
             <div className='logo'>
                <img src="/images/logo.png" alt="logo" />
             </div>
             <div className='content'>
                <p> 2023 - Renan Koji Hanashiro</p>
             </div>
        </footer>
    )
}

export default Footer;