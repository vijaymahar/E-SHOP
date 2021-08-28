import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/main.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
// const logos = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon, TelegramIcon]

function Footer() {
  return (
    <BrowserRouter>
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#e1">Web design</a>
                  </li>
                  <li>
                    <a href="#e2">Development</a>
                  </li>
                  <li>
                    <a href="#e3">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#vc">Company</a>
                  </li>
                  <li>
                    <a href="#cb">Team</a>
                  </li>
                  <li>
                    <a href="#sfgs">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                  Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                  quis tristique lectus. Aliquam in arcu eget velit pulvinar
                  dictum vel in justo.
                </p>
              </div>
              <div className="col item social ">
                <a href="#gd">
                  <FacebookIcon />
                </a>
                <a href="#dhd">
                  <InstagramIcon />
                </a>
                <a href="#jft">
                  <TelegramIcon />
                </a>
                <a href="#sg">
                  <TwitterIcon />
                </a>
                <a href="#kyf">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
            <p className="copyright text-center mt-5">
              MeVik mart © 2021, all rights reserved to Mr. Vijay Mahar
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default Footer;
