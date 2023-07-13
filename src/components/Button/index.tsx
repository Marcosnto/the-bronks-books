import { ButtonProps } from "../../utils/types/components";

export default function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button
      className="
      bg-emerald-800 
      text-cyan-50 p-2 
      hover:bg-emerald-600
      rounded-lg"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
