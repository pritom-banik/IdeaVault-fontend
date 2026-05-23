"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { RegisterButton, LoginButton, NormalButton } from "@/components/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#ff66a3] to-[#c489a1] min-h-[550px] flex items-center border-black border-2 border-b-10 border-r-10">
            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              {/* Left Side */}
              <div>
                <p className="inline-block px-4 py-1 mb-5 text-sm font-semibold tracking-wide text-black bg-white/60 rounded-full shadow-sm">
                  Innovation Starts Here
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0f0f14] mb-6">
                  Turn Your
                  <span className="bg-gradient-to-r from-sky-400 via-green-400 to-green-400 bg-clip-text text-transparent">
                    {" "}
                    Startup Idea{" "}
                  </span>
                  Into Reality
                </h1>

                <p className="max-w-xl text-lg text-black/80 mb-8 leading-relaxed">
                  Share innovative business concepts, receive valuable community
                  feedback, and refine your vision with entrepreneurs worldwide.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="">
                    <NormalButton>Share My Ideas</NormalButton>
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="relative flex justify-center">
                <div className="absolute w-72 h-72 bg-white/30 rounded-full blur-2xl"></div>

                <Image
                  src="/homeslide-1-1.png"
                  alt="Startup Illustration"
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#ff66a3] to-[#c489a1] min-h-[550px] flex items-center border-black border-2 border-b-10 border-r-10">
            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              {/* Left Side */}
              <div>
                <p className="inline-block px-4 py-1 mb-5 text-sm font-semibold tracking-wide text-black bg-white/60 rounded-full shadow-sm">
                  Discover Trending Ideas
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0f0f14] mb-6">
                  Explore The Next
                  <span className="bg-gradient-to-r from-sky-400  to-green-400 bg-clip-text text-transparent">
                    {" "}
                    Big Innovation
                  </span>
                </h1>

                <p className="max-w-xl text-lg text-black/80 mb-8 leading-relaxed">
                  Browse startup ideas across AI, technology, healthcare,
                  education, sustainability, and many more exciting categories.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="">
                    <NormalButton>See Other Ideas</NormalButton>
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="relative flex justify-center">
                <div className="absolute w-72 h-72 bg-white/30 rounded-full blur-2xl"></div>

                <Image
                  src="/homeslide-2-2.png"
                  alt="Innovation Illustration"
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative overflow-hidden bg-gradient-to-br from-[#ff66a3] to-[#c489a1] min-h-[550px] flex items-center border-black border-2 border-b-10 border-r-10">
            {/* Background Blur Effects */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
              {/* Left Side */}
              <div>
                <p className="inline-block px-4 py-1 mb-5 text-sm font-semibold tracking-wide text-black bg-white/60 rounded-full shadow-sm">
                  Collaborate & Grow
                </p>

                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0f0f14] mb-6">
                  Build Together,
                  <span className="bg-gradient-to-r from-sky-500  to-green-400 bg-clip-text text-transparent">
                    {" "}
                    Launch Faster
                  </span>
                </h1>

                <p className="max-w-xl text-lg text-black/80 mb-8 leading-relaxed">
                  Connect with innovators, exchange feedback, and transform
                  creative ideas into successful startup ventures.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="">
                    <LoginButton></LoginButton>
                  </Link>
                  <Link href="">
                    <RegisterButton></RegisterButton>
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="relative flex justify-center">
                <div className="absolute w-72 h-72 bg-white/30 rounded-full blur-2xl"></div>

                <Image
                  src="/homeslide-1-3.png"
                  alt="Collaboration Illustration"
                  width={500}
                  height={500}
                  className="relative z-10 drop-shadow-2xl animate-[float_4s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
