import React from 'react';
import Fade from "react-reveal/Fade";
export default function Footer() {
  return (
    <>
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.825278846486!2d88.97596481431805!3d24.76717905509097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc64f8f60f80c7%3A0xc56ac1b182989c81!2z4Kab4Ka-4Kak4Kao4KeAIOCmouCnh-CmleCmoeCmvOCmviDgpqzgpr7gppzgpr7gprA!5e0!3m2!1sbn!2sbd!4v1557931804758!5m2!1sbn!2sbd" width="100%" height="450" frameBorder="0"  allowFullScreen></iframe>
      <div className="location_tag">
        <div>LOCATION</div>
      </div>
    </div>
    <footer className="bck_red">
      <Fade delay={500}>
          <div className="font_righteous footer_logo_venu">
            The Venue
          </div>
          <div className="footer_copyright">
            rubel2585@gmail.com &copy; 2019 All Right Reserved.
          </div>
      </Fade>
    </footer>
    </>
  )
}
