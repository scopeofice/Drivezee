import React from "react";
import step1 from "../../public/1.png";
import step2 from "../../public/2.png";
import step3 from "../../public/3.png";
import Faq from "./Faq";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section
        className="section hero has-bg-image"
        id="home"
        aria-label="home"
        style={{ backgroundImage: `url('../../public/hero-bg.svg')` }}
      >
        <div className="container">
          <div className="hero-content">
            <h1 className="h1 section-title">
              Driving Made Easy With <span className="span">Drivezee</span>
            </h1>
            <p className="hero-text">
              <ul class="about-list">
                <li class="about-item">
                  <ion-icon
                    name="checkmark-done-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <span class="span">Online Virtual and In-car Lessons.</span>
                </li>
                <li class="about-item">
                  <ion-icon
                    name="checkmark-done-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <span class="span">
                    Hand Picked Best instructors to serve near you.
                  </span>
                </li>
                <li class="about-item">
                  <ion-icon
                    name="checkmark-done-outline"
                    aria-hidden="true"
                  ></ion-icon>
                  <span class="span">
                    Sign-up for our BDE Course & start saving on your
                    Auto-insurance.
                  </span>
                </li>
              </ul>
            </p>
            <Link to="/postalcode" className="btn has-before">
              <ion-icon name="time" aria-hidden="true"></ion-icon>
              <span className="span">Schedule Now</span>
            </Link>
          </div>
          <figure className="hero-banner">
            <img
              src="../../public/car.png"
              alt="hero banner"
              style={{ width: "100%" }}
            />
          </figure>
        </div>
      </section>

      {/*Steps*/}
      <section
        className="section category"
        aria-label="category"
        style={{ paddingBottom: 0 }}
      >
        <div className="container">
          <p className="section-subtitle"> Book lessons in </p>
          <h2 className="h1 section-title">
            Just <span className="span">Three</span> Steps
          </h2>
          <p className="section-text">
            Find out why you should choose our driver's education.
          </p>
        </div>
      </section>

      <section
        className="section about"
        id="about"
        aria-label="about"
        style={{ marginBottom: "0px", paddingBottom: "0px" }}
      >
        <div className="container">
          <figure className="about-banner">
            <div
              className="img-holder"
              style={{ "--width": 520, "--height": 370 }}
            >
              <img
                src="../../public/1.png"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>

            <img
              src="../../public/about-shape-3.png"
              width="722"
              height="528"
              loading="lazy"
              alt=""
              className="shape about-shape-3"
            />
          </figure>
          <div className="about-content">
            <p className="section-subtitle">Step 01</p>
            <h2 className="h1 section-title">
              <span className="span">Sign up</span> to select your preferred
              location and instructor.
            </h2>
            <p className="section-text">
              {/* Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim ad minim. */}
            </p>

            <img
              src="../../public/about-shape-4.svg"
              width="100"
              height="100"
              loading="lazy"
              alt=""
              className="shape about-shape-4"
            />
          </div>
        </div>
        <div className="container-2">
          <div className="about-content">
            <p className="section-subtitle">Step 02</p>
            <h2 className="h1 section-title">
              <span className="span">Start booking</span> lessons instantly with
              on-demand scheduling.
            </h2>
            <p className="section-text">
              {/* Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim ad minim. */}
            </p>
          </div>
          <figure className="about-banner">
            <div
              className="img-holder"
              style={{ "--width": 520, "--height": 370 }}
            >
              <img
                src="../../public/2.png"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>

            <img
              src="../../public/about-shape-3.png"
              width="722"
              height="528"
              loading="lazy"
              alt=""
              className="shape about-shape-3"
            />
          </figure>
        </div>
        <div className="container">
          <figure className="about-banner">
            <div
              className="img-holder"
              style={{ "--width": 520, "--height": 370 }}
            >
              <img
                src="../../public/3.png"
                loading="lazy"
                alt="about banner"
                className="img-cover"
              />
            </div>

            <img
              src="../../public/about-shape-3.png"
              width="722"
              height="528"
              loading="lazy"
              alt=""
              className="shape about-shape-3"
            />
          </figure>
          <div className="about-content">
            <p className="section-subtitle">Step 03</p>
            <h2 className="h1 section-title">
              <span className="span">Get behind</span> the wheel with ease and
              convenience.
            </h2>
            <p className="section-text">
              {/* Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod
              ex tempor incididunt labore dolore magna aliquaenim ad minim. */}
            </p>

            <img
              src="../../public/about-shape-4.svg"
              width="100"
              height="100"
              loading="lazy"
              alt=""
              className="shape about-shape-4"
            />
          </div>
        </div>
      </section>

      {/*Courses*/}
      <section
        className="section category"
        aria-label="category"
        style={{ marginTop: "0px" }}
      >
        <div className="container">
          <p className="section-subtitle"> Have a look at</p>

          <h2 className="h1 section-title">
            Our <span className="span">Courses</span>
          </h2>

          <p className="section-text">Book your course online now</p>

          <ul className="grid-list">
            <li>
              <div
                className="category-card"
                style={{ "--color": "170, 75%, 41%" }}
              >
                <span className="price2">$65+HST</span>
                <div className="card-icon">
                  <img
                    src="../../public/car-1.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Online Degree Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Individual Lessons
                  </a>
                </h3>
                <p className="card-text">
                  Looking to take refresher lessons to boost confidence, clarity
                  of road/traffic rules or preparing for road test, our team of
                  expert instructors are here to help you achieve your goal.
                </p>
                <Link to="/postalcode" className="btn has-before">
                  {/* <ion-icon name="time" aria-hidden="true"></ion-icon> */}
                  <span className="span">Book Now</span>
                </Link>
              </div>
            </li>

            <li>
              <div
                className="category-card"
                style={{ "--color": "42, 94%, 55%" }}
              >
                <span className="price2">$650+HST</span>
                <span className="absolute top-5 right-5 mt-1 mr-1 bg-yellow-400 text-white py-1 px-3 rounded-full uppercase text-xl font-semibold">
                  Best Seller
                </span>
                <div className="card-icon">
                  <img
                    src="../../public/car-2.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Hybrid Distance Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <Link to="/postalcode" className="card-title">
                    Beginner Driver Education (BDE)
                  </Link>
                </h3>
                <p className="card-text">
                  Best package for new drivers with or without prior driving
                  experience.
                  <br />
                  Includes:
                  <br />
                  <ul class="about-list">
                    <li class="about-item">
                      {/* <ion-icon
                        name="checkmark-done-outline"
                        aria-hidden="true"
                      ></ion-icon> */}
                      <span class="span">
                        &#8226; 10 hours of In-Car driving lessons with a top
                        rated instructor.
                      </span>
                    </li>
                    <li class="about-item">
                      {/* <ion-icon
                        name="checkmark-done-outline"
                        aria-hidden="true"
                      ></ion-icon> */}
                      <span class="span">
                        &#8226; 30 hours of online, self paced learning platform
                        (online Theory, Quizzes and homework)
                      </span>
                    </li>
                    <li class="about-item">
                      {/* <ion-icon
                        name="checkmark-done-outline"
                        aria-hidden="true"
                      ></ion-icon> */}
                      <span class="span">
                        &#8226; Ministry Certification which helps new drivers
                        with discounts on Auto Insurances (upto 20%),faster
                        eligibility for road test to 8 months.
                      </span>
                    </li>
                  </ul>
                </p>
                <Link to="/postalcode" className="btn has-before">
                  {/* <ion-icon name="time" aria-hidden="true"></ion-icon> */}
                  <span className="span">Book Now</span>
                </Link>
              </div>
            </li>

            <li>
              <div
                className="category-card"
                style={{ "--color": "229, 75%, 58%" }}
              >
                <span className="price2">$235+HST</span>
                <div className="card-icon">
                  <img
                    src="../../public/car-3.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Off-Campus Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Car for Road Test
                  </a>
                </h3>
                <p className="card-text">
                  Includes a 90 minutes session before your scheduled road test,
                  assisted by our best instructor’s and use of car (local test
                  centre).
                </p>
                <a href="#" className="btn has-before">
                  {/* <ion-icon name="time" aria-hidden="true"></ion-icon> */}
                  <span className="span">Book Now</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/*Courses*/}
      <section className="section course" id="courses" aria-label="course">
        <div className="container" style={{ marginBottom: "50px" }}>
          <h2 className="h2 section-title">Frequenty Asked Questions</h2>
          <p className="section-subtitle">Answers to common questions</p>
          <Faq />
        </div>
      </section>

      {/*Video*/}
      <section
        className="video has-bg-image"
        aria-label="video"
        style={{ backgroundImage: `url('../../public/video-bg.png')` }}
      >
        <div className="container">
          <div className="video-card">
            <div
              className="video-banner img-holder has-after"
              style={{ "--width": "", "--height": "" }}
            >
              <img
                src="../../public/video-pic.jpg"
                width="970"
                height="550"
                loading="lazy"
                alt="video banner"
                className="img-cover"
              />
              <button className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </button>
            </div>
            <img
              src="../../public/video-shape-1.png"
              width="1089"
              height="605"
              loading="lazy"
              alt=""
              className="shape video-shape-1"
            />
            <img
              src="../../public/video-shape-2.png"
              width="158"
              height="174"
              loading="lazy"
              alt=""
              className="shape video-shape-2"
            />
          </div>
        </div>
      </section>

      {/*Step2*/}
      <section
        className="section category"
        aria-label="category"
        style={{ marginTop: "0px" }}
      >
        <div className="container">
          <p className="section-subtitle"> Why are we Better</p>

          <h2 className="h1 section-title">
            Our <span className="span">Instructors</span>
          </h2>

          <p className="section-text">
            Master Driving with Canada's Finest Instructors
          </p>
          <ul className="grid-list">
            <li>
              <div
                className="category-card"
                style={{ "--color": "170, 75%, 41%" }}
              >
                <div className="card-icon">
                  <img
                    src="../../public/feature-1.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Online Degree Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Top-rated professionals ready for any scenario
                  </a>
                </h3>
                <p className="card-text">
                  Our instructors are among the best in Canada, equipped to
                  handle any driving situation with professionalism and
                  expertise.
                </p>
              </div>
            </li>

            <li>
              <div
                className="category-card"
                style={{ "--color": "42, 94%, 55%" }}
              >
                <div className="card-icon">
                  <img
                    src="../../public/feature-2.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Hybrid Distance Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Government-certified and comprehensively insured
                  </a>
                </h3>
                <p className="card-text">
                  Rest assured, our instructors are fully certified by the
                  government and comprehensively insured for your safety and
                  peace of mind.
                </p>
              </div>
            </li>

            <li>
              <div
                className="category-card"
                style={{ "--color": "229, 75%, 58%" }}
              >
                <div className="card-icon">
                  <img
                    src="../../public/feature-3.svg"
                    width="40"
                    height="40"
                    loading="lazy"
                    alt="Off-Campus Programs"
                    className="img"
                  />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Carefully selected for their patience and integrity
                  </a>
                </h3>
                <p className="card-text">
                  We handpick instructors who not only excel in teaching but
                  also demonstrate the utmost patience and integrity in every
                  interaction.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/*Reviews*/}
      <section
        className="section blog has-bg-image"
        id="blog"
        aria-label="blog"
        style={{ backgroundImage: `url('../../public/blog-bg.svg')` }}
      >
        <div className="container">
          <p className="section-subtitle">Latest Reviews</p>
          <h2 className="h2 section-title"> They Succeeded with Drivezee!</h2>
          <p className="section-subtitle">What they have to say about us</p>
          <ul className="grid-list" style={{ marginTop: "70px" }}>
            <li>
              <div className="blog-card">
                <div className="card-content">
                  <a href="#" className="card-subtitle">
                    <span>⭐⭐⭐⭐⭐</span>
                  </a>
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      "Great driving school! Excellent instructors, highly
                      recommended!"{" "}
                    </a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">Joe Doe</span>
                    </li>
                  </ul>
                  <p className="card-text"></p>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <div className="card-content">
                  <a href="#" className="card-subtitle">
                    <span>⭐⭐⭐⭐⭐</span>
                  </a>
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      "The best driving school in town! Very professional and
                      patient instructors."{" "}
                    </a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">Jane Smith</span>
                    </li>
                  </ul>
                  <p className="card-text"></p>
                </div>
              </div>
            </li>

            <li>
              <div className="blog-card">
                <div className="card-content">
                  <a href="#" className="card-subtitle">
                    <span>⭐⭐⭐⭐⭐</span>
                  </a>
                  <h3 className="h3">
                    <a href="#" className="card-title">
                      "Amazing experience! I passed my driving test on the first
                      attempt!"{" "}
                    </a>
                  </h3>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline" aria-hidden="true" />
                      <span className="span">David Johnson</span>
                    </li>
                  </ul>
                  <p className="card-text"></p>
                </div>
              </div>
            </li>
          </ul>
          <img
            src="../../public/blog-shape.png"
            width="186"
            height="186"
            loading="lazy"
            alt=""
            className="shape blog-shape"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
