import { ButtonProps } from "../../utils/types/components";

export default function Button({
  label,
  onClick,
  disabled,
  backgroundColor = "emerald-800",
  hoverBackgroundColor = "emerald-600",
  textColor = "cyan-50",
  icon,
}: ButtonProps) {
  return (
    <button
      className={`
      bg-${backgroundColor}
      text-${textColor}
      p-2 
      hover:bg-${hoverBackgroundColor}
      rounded-lg
      w-full
      `}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {icon}
    </button>
  );
}
