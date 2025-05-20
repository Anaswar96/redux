import React from "react";
import poster1 from "../assets/poster1.png";

const About = () => {
  return (
    <div className="bg-[whitesmoke] min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-extrabold text-[green] mb-4 mt-8">Discover Vzone</h1>
        <p className="text-[black] text-lg max-w-3xl mx-auto">
          Revolutionizing the way you connect with technology and lifestyle.
          At Vzone, we bridge innovation with everyday life.
        </p>
        <img
          src={poster1}
          alt="Vzone team collaboration"
          className="rounded-2xl shadow-lg mt-10 w-full max-w-3xl mx-auto"
        />
      </div>

      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-[#861e2c] mb-4">Our Story</h2>
        <p className="text-[black] text-md leading-relaxed">
          Founded with a passion for simplicity and speed, Vzone started as a small initiative with a big dream — to create a platform that puts people first. From humble beginnings in a shared workspace, we’ve grown into a trusted name, delivering smart solutions, handpicked products, and cutting-edge services to thousands.
        </p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-[green] mb-3">Our Vision</h3>
          <p className="text-[black]">
            To become a global leader in digital retail and lifestyle innovation — where every user interaction is seamless, intuitive, and impactful.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-2xl font-bold text-[green] mb-3">Our Mission</h3>
          <p className="text-[black]">
            To empower people through thoughtfully curated products, unmatched user experiences, and a commitment to growth, trust, and creativity.
          </p>
        </div>
      </section>
      <section className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-semibold text-[#861e2c] mb-6">What We Stand For</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Integrity", "Innovation", "Customer First", "Sustainability"].map((value, index) => (
            <div key={index} className="bg-[whitesmoke] p-5 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-[green]">{value}</h4>
            </div>
          ))}
        </div>
      </section>
      <div className="text-center text-[black] mt-10 text-sm">
        © {new Date().getFullYear()} Vzone. Empowering choices, shaping the future.
      </div>
    </div>
  );
};

export default About;
