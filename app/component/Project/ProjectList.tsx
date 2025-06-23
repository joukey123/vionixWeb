import React, { useState } from "react";
import InfoCard from "../InfoCard";

export default function ProjectList() {
  const [startIdx, setStartIdx] = useState(0);
  const cards = [
    {
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/tech.jpg",
      title: "최신 기술",
      description:
        "SMPS, 리시빙 카드, LED 모듈 최고 품질 하드웨어 설계 *발열 솔루션 기술 적용",
    },
    {
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/made.jpg",
      title: "자체 생산",
      description:
        "SMPS, 리시빙 카드, LED 모듈 최고 품질 하드웨어 설계 *발열 솔루션 기술 적용",
    },
    {
      imageUrl:
        "https://webfile.mempro.co.kr/vionix_website/features/carry.jpg",
      title: "합리적인 유통",
      description:
        "SMPS, 리시빙 카드, LED 모듈 최고 품질 하드웨어 설계 *발열 솔루션 기술 적용",
    },
    {
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/work.jpg",
      title: "지속적인 관리",
      description:
        "SMPS, 리시빙 카드, LED 모듈 최고 품질 하드웨어 설계 *발열 솔루션 기술 적용",
    },
    {
      imageUrl:
        "https://webfile.mempro.co.kr/vionix_website/features/solution.jpg",
      title: "맞춤 소루션",
      description:
        "SMPS, 리시빙 카드, LED 모듈 최고 품질 하드웨어 설계 *발열 솔루션 기술 적용",
    },
  ];

  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + 2 < cards.length;

  return (
    <div className="mt-10 mb-10">
      {/* 332px = 300px card width + 20px gap */}
      <div className="w-full overflow-hidden max-w-[1024px] mx-auto p-0 h-[610px]">
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIdx * 520}px)` }}
        >
          {cards.map((item, idx) => (
            <div key={idx}>
              <InfoCard
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                size="wide"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center px-4 mt-4 float-end">
        <button
          onClick={() => setStartIdx((prev) => Math.max(prev - 1, 0))}
          disabled={!canGoLeft}
          className="flex items-center justify-center w-6 h-6 mx-2 font-thin bg-gray-200 rounded-full shadow-sm disabled:opacity-30 disabled:shadow-none shadow-slate-400"
        >
          &lt;
        </button>
        <button
          onClick={() =>
            setStartIdx((prev) => Math.min(prev + 1, cards.length - 2))
          }
          disabled={!canGoRight}
          className="flex items-center justify-center w-6 h-6 font-thin bg-gray-200 rounded-full disabled:opacity-30 disabled:shadow-none shadow-slate-400"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
