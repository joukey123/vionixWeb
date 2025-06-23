import Logo from "../Navbar/Logo";
import Features from "./Features";
import VionixIcon from "./VionixIcon";

export default function AboutBox() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-5">
        <Logo width={250} />
      </div>
      <p className="text-body max-w-[400px] text-center mt-5">
        VIONIX는 LED 디스플레이 시공, 모듈 관리 및 콘텐츠 제작 등 LED
        디스플레이의 모든 부분을 책임지는 서비스입니다.
      </p>
      <VionixIcon />
      <Features />
    </div>
  );
}
