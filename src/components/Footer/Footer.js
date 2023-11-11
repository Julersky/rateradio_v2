import "./Footer.scss";
import { Link } from "react-router-dom";
import logo_footer from "../../assets/rate_radio_logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-items">
        <Link to="/">
          <div className="footer-kasa-logo">
            <img src={logo_footer} alt="Kasa" />
          </div>
        </Link>
        <p className="footer-paragraph">© 2023 Raté Radio. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
