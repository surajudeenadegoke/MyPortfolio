import React from "react";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import LinkedIn from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/surajudeen-adegoke-3a224aa0/"
          className="youtube social"
        >
          <LinkedIn />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100004866885625"
          className="youtube social"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/surajudeenadegoke/"
          className="youtube social"
        >
          <Instagram />
        </a>

        <a href="https://twitter.com/adeg4_a" className="youtube social">
          <Twitter />
        </a>
      </div>
      <p className="footer-para">&copy; 2023 surajcodes</p>
    </div>
  );
};

export default Footer;
