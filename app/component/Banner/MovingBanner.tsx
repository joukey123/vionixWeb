"use client";
import React from "react";
import "./MovingBanner.css";

const banners = [
  "https://webfile.mempro.co.kr/vionix_website/banner/project_banner1.jpg",
  "https://webfile.mempro.co.kr/vionix_website/banner/project_banner2.jpg",
];
export default function MovingBanner() {
  return (
    <div className="w-full bg-white overflow-hidden max-w-[1024px] mx-auto space-y-4 my-10">
      {banners.map((src, index) => (
        <div key={index} className={`overflow-hidden`}>
          <div className={`flex animate-scroll-banner`}>
            <img src={src} alt={`Banner ${index + 1}`} className="min-w-full" />
            <img
              src={src}
              alt={`Banner ${index + 1} duplicate`}
              className="min-w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
