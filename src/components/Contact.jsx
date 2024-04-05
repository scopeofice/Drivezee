import React from "react";

const Contact = () => {
  return (
    <div className="bg-bgc p-8 mt-20">
      <h2 className="text-3xl font-bold mb-6">
        <span className="text-6xl text-primaryBlue">Have a question?</span>
        <br />
        <span className="text-primaryYellow">We’re here to help!</span>
      </h2>
      <p className="mb-6">
        Assistance available by phone, chat, or email – reach out however works
        best for you!
      </p>

      <div className="flex justify-around">
        <div className="p-6 bg-white rounded-lg shadow-md m-5 border border-primaryBlue">
          <h3 className="text-xl font-semibold mb-3 text-primaryBlue">
            <strong>For general inquiries</strong>
          </h3>
          <p className="mb-3 text-secondaryRed">Send us an email</p>
          <p className="text-tertiaryDarkGreen font-bold mb-3">
            support@drivezee.com
          </p>
          <p className="text-black">
            We’ll get back to you within 24h! If we’re offline, emails will be
            returned the following business day.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md m-5 border border-primaryBlue">
          <h3 className="text-xl font-semibold mb-3 text-primaryBlue">
            <strong>For booking support</strong>
          </h3>
          <p className="mb-3 text-secondaryRed">Give us a call</p>
          <p className="text-tertiaryDarkGreen font-bold mb-3">
            +1 (866) 245-3103
          </p>
          <p className="text-black">Mon-Fri, 9AM-6PM</p>
          <p className="text-black">
            Calling outside of business hours? Leave us a message and our team
            will get back to you the next business day.
          </p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md m-5 border border-primaryBlue">
          <h3 className="text-xl font-semibold mb-3 text-primaryBlue">
            <strong>For live support</strong>
          </h3>
          <p className="mb-3 text-secondaryRed">Message a service agent</p>
          <p className="text-tertiaryDarkGreen font-bold mb-3">Chat with us</p>
          <p className="text-black">Mon-Fri, 9AM-6PM</p>
          <p className="text-black">
            Contact us through our chatbox and we will be in touch with you
            shortly!
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-bold text-primaryBlue mb-4">
          Join Drivezee Today!
        </h2>
        <p className="text-gray-600 mb-4">
          Embark on your journey to becoming a skilled and confident driver.
          With Kruzee, you'll receive expert instruction, convenient scheduling,
          and exclusive benefits that will help you succeed on the road.
        </p>
        <button className="bg-primaryBlue text-white py-2 px-4 rounded hover:bg-bgc hover:text-primaryBlue w-[60%] hover:border-primaryBlue border-2 border-transparent transition ease-in duration-300">
          Start Driving
        </button>
      </div>
    </div>
  );
};

export default Contact;
