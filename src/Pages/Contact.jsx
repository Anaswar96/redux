import React from "react";

const Contact = () => {
  return (
    <div className="bg-[whitesmoke] min-h-screen px-4 py-12 md:px-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center text-[green] mb-4 mt-10">Contact Us</h1>
        <p className="text-center text-[black] text-lg mb-10">
          Have a question, suggestion, or just want to say hello? We had love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-[#861e2c]">📍 Our Address</h2>
              <p className="text-[black]"> Vzone Avenue,Innovation Tech City,Cochin Kerala, 565601</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#861e2c]">📞 Phone</h2>
              <p className="text-[black]">+91 79942 27759</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#861e2c]">✉️ Email</h2>
              <p className="text-[black}">contactvzone@gmail.com</p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-[gray] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861e2c]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-[gray] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861e2c]"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 border border-[gray] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#861e2c]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[green] hover:bg-[#861e2c] text-[whitesmoke] py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center text-[black] mt-8">
          💬 Our team usually replies within 24 hours.
        </div>
      </div>
    </div>
  );
};

export default Contact;
