import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="footer_section">
            <h4 className="footerTitle">Support</h4>
            <Link to="/faq">FAQ</Link>
            <Link to="/reportbugs">Report Bugs</Link>
            <Link to="/cookiespolicy">Cookies Policy</Link>
          </div>

          <div className="footer_section">
            <h4 className="footerTitle">About Us</h4>
            <Link to="/agb">AGB</Link>
            <Link to="/impressum">Impressum</Link>
            <Link to="/Terms">Terms and Privecy</Link>
          </div>

          <div className="footer_section">
            <div className="social_links">
            <h4 className="footerTitle">Social Media</h4>
            <a className="face" href="https://www.facebook.com/" target="_blank"><FacebookIcon/></a>
            <a className="twitter" href="https://www.twitter.com/" target="_blank"><TwitterIcon/></a>
            <a className="instagram" href="https://www.instagram.com/" target="_blank"><InstagramIcon/></a>
            </div>
          </div>

          <div className="footer_section reach">
            <h4 className="footerTitle">Reach to Us</h4>
            <Link to="/contactus">Contact US</Link>
            <Link to="/career">Career</Link>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright &copy; 2021 Don't Pay</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
