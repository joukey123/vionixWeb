type InfoCardProps = {
  imageUrl: string;
  title: string;
  description?: string;
  size?: "default" | "wide" | "narrow";
};

export default function InfoCard({
  imageUrl,
  title,
  description,
  size = "default",
}: InfoCardProps) {
  const sizeClass = {
    default: "w-[300px] h-[380px]",
    wide: "w-[500px] h-[580px]",
    narrow: "w-[240px] h-[330px]",
  }[size];

  const heightClass = {
    default: "h-[250px]",
    wide: "h-[450px]",
    narrow: "h-[180px]",
  }[size];

  return (
    <div
      className={`rounded-md bg-gray-50 p-0 ${sizeClass} shadow-sm shadow-slate-300 overflow-hidden`}
    >
      <div
        className={`${heightClass} bg-cover bg-center bg-no-repeat rounded-t-md mb-2`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="p-3">
        <h4 className="mb-2 text-lg font-bold text-body">{title}</h4>
        {description && <p className="text-body">{description}</p>}
      </div>
    </div>
  );
}
