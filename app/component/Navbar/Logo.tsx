type LogoProps = {
  width?: number;
};

export default function Logo({ width = 100 }: LogoProps) {
  return (
    <>
      <img
        width={width}
        src="https://webfile.mempro.co.kr/vionix_website/vionixLogo.png"
      />
    </>
  );
}
