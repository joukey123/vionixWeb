import OutlineButton from "../OutlineButton";

export default function SetupInfo() {
  const popup = () => {
    alert("hell");
  };
  return (
    <section
      className="relative w-full h-[200px] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center rounded-md"
      style={{
        backgroundImage: `url("https://webfile.mempro.co.kr/vionix_website/banner/setupInfo.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-black rounded-md bg-opacity-60"></div>
      <div className="z-10 flex flex-col items-center justify-center">
        <h1 className="mb-5 text-2xl text-center">
          맞춤 설계 시공으로 <br />
          <span className="text-3xl font-bold">LED Display 설치</span>
        </h1>
        <OutlineButton color="white" textColor="black" onClick={popup}>
          시공 안내
        </OutlineButton>
      </div>
    </section>
  );
}
