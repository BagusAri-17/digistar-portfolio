import React, { useEffect } from "react";
import { BiSolidPhone, BiSolidMap } from "react-icons/bi";
import { AiFillMail } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const contact = () => {
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="contact" className="py-20 md:py-40 bg-primary">
      <div className="container">
        <div className="flex flex-col md:flex-row pt-8 md:gap-16 lg:gap-32 items-start lg:items-center">
          <div
            className="md:w-[50%] text-left mb-4 md:mb-0 order-1 md:order-2"
            data-AOS="fade-right"
            data-aos-duration="1200"
          >
            <h1 className="text-secondary text-lg font-medium md:text-lg">
              Contact
            </h1>
            <h3 className=" md:leading-[64px] leading-0 mt-2 md:mt-4 text-2xl md:text-4xl font-medium leading-[48px]">
                Feel free to reach out to me through this contact.
            </h3>
            <p className="max-w-lg pt-4 leading-6 text-secondary">
                If you have any issues or suggestions and comments, please contact me through this contact.
            </p>
            <div className="pt-6 space-y-4 text-sm">
              <div className="flex items-center gap-4 text-textColor">
                <BiSolidPhone className="" size={20} />
                081 339 585 537
              </div>
              <div className="flex items-center gap-4 text-textColor">
                <AiFillMail className="" size={20} />
                bagusari.widhi@gmail.com
              </div>
              <div className="flex items-center gap-4 text-textColor">
                <BiSolidMap className="" size={20} />
                Jalan Kampus Raya Unud, Jimbaran, Bali
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-[45%] lg:w-[40%] shadow-md bg-secondary p-8 mt-4 md:mt-0 rounded-xl order-2 md:order-1"
            data-AOS="fade-left"
            data-aos-duration="1200"
          >
            <form className="flex flex-col space-y-4">
              {/* Nama */}
              <div>
                <label className="text-sm font-semibold text-primary" for="">
                  Name
                </label>
                <input
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              {/* Alamat */}
              <div>
                <label className="text-sm font-semibold text-primary" for="">
                  Address
                </label>
                <input
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  placeholder="Your Address"
                />
              </div>
              {/* Pesan */}
              <div>
                <label className="text-sm font-semibold text-primary" for="">
                  Message
                </label>
                <textarea
                  className="text-sm mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#999aa4]"
                  type="text"
                  rows={4}
                  placeholder="Your Message"
                />
              </div>
              <button
                type=""
                className="hover:opacity-60 duration-200 transition inline-block self-end bg-primary text-secondary font-bold rounded-lg px-6 py-2 text-sm"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
