import React, { useState } from "react";
import InfoCard from "../InfoCard";

export default function ContentsBox() {
  const [selected, setSelected] = useState<string | null>(null);
  const options = ["이미지 제작", "동영상 제작", "광고배너 제작", "API 활용"];
  const cards = [
    {
      title: "이미지 제작",
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/tech.jpg",
      description:
        "브랜드 아이덴티티를 강화하는 고해상도 이미지 콘텐츠를 제작합니다.",
    },
    {
      title: "동영상 제작",
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/made.jpg",
      description: "LED 디스플레이용 맞춤형 영상과 애니메이션을 제작합니다.",
    },
    {
      title: "광고배너 제작",
      imageUrl:
        "https://webfile.mempro.co.kr/vionix_website/features/carry.jpg",
      description: "시선을 사로잡는 디지털 배너 광고를 디자인하고 제작합니다.",
    },
    {
      title: "API 활용",
      imageUrl: "https://webfile.mempro.co.kr/vionix_website/features/work.jpg",
      description:
        "실시간 기상∙공기질 데이터를 연동해 정확한 날씨 및 미세먼지 정보를 제공합니다.",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`rounded-full text-body px-4 py-2 transition ${
              selected === opt ? "bg-[#009D89] text-white" : "btn-gray"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="mt-6">
        {selected ? (
          (() => {
            const card = cards.find((c) => c.title === selected);
            return card ? (
              <InfoCard
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ) : null;
          })()
        ) : (
          <p className="text-center text-gray-500">옵션을 선택해주세요.</p>
        )}
      </div>
    </>
  );
}
