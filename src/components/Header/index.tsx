import { Link } from "react-router-dom";
import { HeaderProps } from "../../utils/types/components";
import { BiCart } from "react-icons/bi";
import useStore from "../../store";

export default function Header({ title }: HeaderProps) {
  const store = useStore();

  return (
    <div
      className="
      flex
      justify-between
      text-center 
      text-4xl  
      font-bold
      mb-4
      text-slate-50
      bg-emerald-600 
      p-5"
    >
      <Link to="/">
        <h1 className="hover:text-emerald-900">{title}</h1>
      </Link>
      <div className="flex">
        <Link to="/cart">
          <BiCart
            className="
              text-5xl 
             hover:text-emerald-900
            "
          />
        </Link>
        <span
          className="
          block
          leading-4
          text-xs 
          relative 
          right-3 
          rounded-lg
          shadow-md
          bg-emerald-400 
          text-black
          w-[1.1rem] h-[1.1rem]"
        >
          {store.quantityItems}
        </span>
      </div>
    </div>
  );
}
