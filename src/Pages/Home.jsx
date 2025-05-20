import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, NavLink } from "react-router-dom"; 
import banner2 from "../assets/banner2.png"; 
import banner3 from "../assets/banner3.png";
import banner1 from "../assets/banner1.png"; 

const Home = () => {
  return (
    <div className="bg-sky-50 min-h-screen font-sans mt-16">

      <div className="w-full">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          className="w-full"
        >
          {[
            {
              src: banner3,
              title: "Smart Tech, Smarter Living",
              subtitle: "Explore cutting-edge gadgets that enhance your life.",
            },
            {
              src: banner2,
              title: "Elevate Your Workspace",
              subtitle: "Everything you need for a productive home setup.",
            },
            {
              src: banner1,
              title: "Fast. Simple. Seamless.",
              subtitle: "Enjoy a reimagined shopping experience with Vzone.",
            },
          ].map((item, index) => (
            <div key={index} className="relative h-[400px]">
              <img 
                src={item.src}
                className="w-full h-full object-cover rounded-lg"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{item.title}</h2>
                <p className="text-md md:text-lg">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center text-[#861e2c] mb-8">
          Explore Vzone
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Beauty Products", icon: "💄" },
            { name: "Pet Foods", icon: "🐾" },
            { name: "Meat", icon: "🍖" },
            { name: "Fruits", icon: "🍉" },
            { name: "Home Products", icon: "🏡" },
            { name: "Milk Products", icon: "🍶" },
          ].map((item, index) => (
            <NavLink
              to="/products"
              key={index}
              className="bg-[whitesmoke] rounded-lg shadow p-4 text-center hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[black]">{item.name}</h3>
              <p className="text-sm text-[black] mt-1">Experience the best with Vzone!</p>
            </NavLink>
          ))}
        </div>
      </section>

      <section className="bg-[#417c3cab] text-[white] py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to Explore the Future?</h2>
        <p className="mb-6 text-sm md:text-base">Start your Vzone journey with just one click.</p>
        <Link
          to="/signup"
          className="bg-[white] text-[green] font-semibold px-6 py-2 rounded-full shadow hover:bg-[#acaccf] transition"
        >
          Join Now
        </Link>
      </section>
    </div>
  );
};

export default Home;
