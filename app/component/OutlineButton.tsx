type OutlineButtonProps = {
  children: React.ReactNode;
  color?: string; // CSS 변수로 넘길 색상
  textColor: string;
  onClick?: () => void;
};

export default function OutlineButton({
  children,
  color = "#00BFA6", // 디폴트 Primary color
  textColor = "#fff",
  onClick,
}: OutlineButtonProps) {
  return (
    <button
      className="rounded-full btn-outline"
      style={
        {
          "--btn-color": color,
          "--btn-text-color": textColor,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}
