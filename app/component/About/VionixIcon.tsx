import React from "react";

export default function VionixIcon() {
  return (
    <div className="flex items-center gap-8 mt-10 ">
      {[
        {
          icon: "https://webfile.mempro.co.kr/vionix_website/icon/display.svg",
          label: "디스플레이 시공",
        },
        {
          icon: "https://webfile.mempro.co.kr/vionix_website/icon/contents.svg",
          label: "콘텐츠 제작",
        },
        {
          icon: "https://webfile.mempro.co.kr/vionix_website/icon/system.svg",
          label: "시스템 관리",
        },
      ].map((item, idx, arr) => (
        <React.Fragment key={idx}>
          <div className="w-[170px] h-[170px] bg-primary rounded-full flex flex-col justify-center items-center text-white text-center text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-inner ">
            <img src={item.icon} alt={item.label} className="w-12 h-12 mb-3" />
            <span className="font-semibold text-white text-[1.25rem] text-body">
              {item.label}
            </span>
          </div>
          {idx < arr.length - 1 && (
            <div className="text-5xl font-bold text-gray-400">+</div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
