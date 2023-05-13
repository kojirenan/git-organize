import "./Footer.css";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <div className="link-git">
        <div className="content">
          <a
            href="https://github.com/kojirenan"
            target="_blank"
            rel="noreferrer"
          >
            <p>Renan Koji Hanashiro</p>
          </a>
        </div>
        <FaGithubSquare size={42} color="rgba(244, 19, 100, 1)" />
      </div>
    </footer>
  );
};

export default Footer;
