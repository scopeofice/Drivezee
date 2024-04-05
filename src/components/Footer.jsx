import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url('../public/footer-bg.png')` }}
    >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="../../public/logo.png" alt=" logo" />
            </a>

            <p className="footer-brand-text">
              Discover DriveZee, your premier destination for driving education.
              With expert instructors, flexible scheduling, and convenient
              online access, we're committed to your success on the road. Join
              us and embark on your driving journey today.
            </p>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title"> Contact</p>
            </li>

            <li class="footer-list-item">
              <div class="icon">
                <ion-icon name="call" aria-hidden="true"></ion-icon>
              </div>

              <div>
                <a href="tel:123456789" class="footer-link">
                  123456789
                </a>
              </div>
            </li>
            <li class="footer-list-item">
              <div class="icon">
                <ion-icon name="mail" aria-hidden="true"></ion-icon>
              </div>

              <div>
                <a href="mailto:info@fitlife.com" class="footer-link">
                  info@example.com
                </a>
              </div>
            </li>
            <li class="footer-list-item">
              <div class="icon">
                <ion-icon name="location" aria-hidden="true"></ion-icon>
              </div>

              <div class="address footer-link">
                104 Crockford Blvd Scarborough, Ontario
              </div>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Services</p>
            </li>
            <li>
              <a href="#" class="footer-link">
                Beginner Drivers Education (BDE)
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Individual Lessons
              </a>
            </li>
            <li>
              <a href="#" class="footer-link">
                Car for Road Test
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Locat Us</p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.3952144112864!2d-79.29346122482721!3d43.74388914656206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cdffe658cb2d%3A0x1dc0deef0048fe34!2s104%20Crockford%20Blvd%2C%20Scarborough%2C%20ON%20M1R%203C3%2C%20Canada!5e0!3m2!1sen!2sin!4v1712081348938!5m2!1sen!2sin"
              width="100%"
              style={{ border: 0, borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <ul className="social-list">
              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" class="social-link">
                  <ion-icon name="logo-apple"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; 2024 All Rights Reserved By Drivezee.ca | This website is
            designed & developed by{" "}
            <a href="https://www.infokrat.in" className="copyright-link">
              Infokrat
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
