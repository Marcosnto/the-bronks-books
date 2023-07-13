import { HeaderProps } from "../../utils/types/components";

export default function Header({ title }: HeaderProps) {
  return (
    <div
      className="
        text-center 
        text-4xl  
        font-bold
        mb-4
        text-slate-50
        bg-emerald-600 
        p-5"
    >
      {title}
    </div>
  );
}
