import React from 'react';

const ServiceIntroduce = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-8">
        <h2 className="text-3xl font-bold mb-4">Welcome to the world of seamless connectivity</h2>
        <p className="text-lg mb-6">
          Say goodbye to communication barriers and embrace a new era of freedom and convenience. Our SIM cards are designed
          to unlock the true potential of your mobile device, ensuring uninterrupted network coverage wherever you go. Whether
          you're a globetrotter exploring distant lands or a busy professional juggling multiple responsibilities, our SIM
          card service guarantees crystal-clear calls, lightning-fast data speeds, and reliable messaging capabilities.
        </p>
        <p className="text-lg mb-6">
          Experience the thrill of borderless communication as our SIM card effortlessly connects you to a vast network of partners worldwide.
          With extensive coverage in over [number] countries, you can stay connected with loved ones, colleagues, and clients without skipping a beat.
          No matter if you're in the heart of a bustling metropolis or nestled in a remote corner of the globe, our SIM card service ensures you're never out of touch.
        </p>
        <p className="text-lg">
          Join the ranks of satisfied customers who have unlocked a world of possibilities with our SIM card service.
          Discover the freedom of borderless communication and explore new horizons like never before. Don't let anything hold you back – choose
          our SIM card service and embark on an extraordinary journey of connectivity today!
        </p>
      </div>
      <div className="lg:w-1/2">
        <img src="https://cdn.pixabay.com/photo/2016/03/27/22/18/smartphone-1284501_1280.jpg" alt="Smartphone" className="w-full" />
      </div>
    </div>
  );
};

export default ServiceIntroduce;