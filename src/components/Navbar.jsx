import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a 
          href="https://www.linkedin.com/in/wongyeowkang" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile">
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/ykwong2002" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile">
          <FaGithub />
        </a>
        <a 
          href="https://www.instagram.com/kang.eroo" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram Profile">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
