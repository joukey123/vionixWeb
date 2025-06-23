type HeroSectionProps = {
  title: string;
  viewall: boolean;
};
export default function SectionHeader({
  title,
  viewall = true,
}: HeroSectionProps) {
  return (
    <div className="flex items-center justify-between w-full px-4 mb-10 text-body">
      <h5 className="font-bold">{title}</h5>
      {viewall && (
        <h4 className="underline decoration-gray-500 decoration-1">view all</h4>
      )}
    </div>
  );
}
