import { ButtonProps } from "../../utils/types/components";

export default function Button({
  label,
  onClick,
  disabled,
  type = "button",
  backgroundColor = "bg-emerald-800",
  hoverBackgroundColor = "bg-emerald-600",
  textColor = "text-white",
  icon,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
      ${backgroundColor}
      ${textColor}
      p-2 
      hover:${hoverBackgroundColor}
      rounded-lg
      w-full
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {icon}
    </button>
  );
}
