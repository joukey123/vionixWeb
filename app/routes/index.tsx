import AboutBox from "~/component/About/AboutBox";
import ContentsBox from "~/component/Content/ContentsBox";
import HeroSection from "~/component/HeroSection/HeroSection";
import ProjectBox from "~/component/Project/ProjectBox";
import SectionHeader from "~/component/SectionHeader";

export default function Index() {
  return (
    <>
      <HeroSection
        title="VIONIX"
        subtitle="LED Display Total Solution"
        backgroundImageUrl="https://webfile.mempro.co.kr/vionix_website/herosection/index.jpg"
      />
      <div className="max-w-[1024px] mx-auto mt-8 px-4 py-10 text-body">
        <div className="flex flex-col items-center justify-between">
          <SectionHeader title="About VIONIX" viewall={true} />
          <AboutBox />
        </div>
        <div className="mt-[100px] mb-[20px] w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center justify-between">
          <SectionHeader title="Project" viewall={true} />
          <ProjectBox />
        </div>
        <div className="mt-[100px] mb-[20px] w-full border-t border-gray-300"></div>
        <div className="flex flex-col items-center justify-between">
          <SectionHeader title="Contents" viewall={true} />
          <ContentsBox />
        </div>
      </div>
    </>
  );
}
