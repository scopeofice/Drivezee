import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Review = () => {
  // Sample Google Reviews
  const googleReviews = [
    {
      rating: 5,
      review:
        "Great driving school! Excellent instructors, highly recommended!",
      author: "John Doe",
    },
    {
      rating: 5,
      review:
        "The best driving school in town! Very professional and patient instructors.",
      author: "Jane Smith",
    },
    {
      rating: 5,
      review:
        "Amazing experience! I passed my driving test on the first attempt!",
      author: "David Johnson",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Change this value to adjust the number of slides per view
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-lg shadow-md p-3">
            <h2 className="text-3xl font-bold text-primaryBlue mb-4">
              They Succeeded with Drivezee!
            </h2>
            <Slider {...settings}>
              {googleReviews.map((review, index) => (
                <div key={index} className="m-3">
                  <div className="m-2 p-5 shadow-md border rounded-lg border-primaryBlue">
                    <p className="text-gray-600 font-semibold">
                      {review.author}
                    </p>
                    <p className="text-yellow-400 text-2xl font-bold mb-2">
                      {Array(review.rating)
                        .fill()
                        .map((_, i) => (
                          <span key={i}>⭐</span>
                        ))}
                    </p>
                    <p className="text-gray-600 text-lg mb-4">
                      {review.review}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
