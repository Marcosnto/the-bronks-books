import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

import { GoBackButtonProps } from "../../utils/types/components";

export default function GoBackButton({ to }: GoBackButtonProps) {
  return (
    <div className="flex items-start w-full mb-3">
      <Link className="ml-2 font-light flex items-center text-xl" to={to}>
        <BiChevronLeft className="text-2xl" />
        Voltar
      </Link>
    </div>
  );
}
