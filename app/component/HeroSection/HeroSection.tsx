type HeroSectionProps = {
  title: string;
  subtitle?: string;
  backgroundImageUrl: string;
};

export default function HeroSection({
  title,
  subtitle,
  backgroundImageUrl,
}: HeroSectionProps) {
  return (
    <section
      className="relative h-[650px] bg-cover bg-center bg-no-repeat text-white flex justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="font-bold text-8xl">{title}</h1>
        {subtitle && <p className="mt-5 text-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
