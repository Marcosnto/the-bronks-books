import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import { CartItemProps } from "../../utils/types/components";
import Button from "../Button";

export default function CartItem({
  imageLink,
  title,
  price,
  quantity,
}: CartItemProps) {
  return (
    <div className="flex flex-row justify-between gap-7 rounded-lg bg-slate-100 border-solid border-2 shadow-sm w-full md:w-8/12 p-5 ">
      <div className="flex gap-8 justify-evenly">
        <img
          src={imageLink}
          alt={`Capa do livro ${title}`}
          className="w-24 h-24"
        />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className="text-md">Quantidade: {quantity}</span>
          <span className="text-lg font-semibold">R$: {price}</span>
        </div>
      </div>
      <div className="flex flex-col justify-evenly">
        <Button
          backgroundColor="gray-100"
          textColor="black"
          onClick={() => console.log("adicionar")}
          icon={<BiPlus className="text-xl" />}
        />
        <Button
          backgroundColor="gray-100"
          textColor="black"
          onClick={() => console.log("diminuir")}
          icon={<BiMinus className="text-xl" />}
        />
        <Button
          backgroundColor="gray-100"
          textColor="black"
          onClick={() => console.log("deletar")}
          icon={<BiTrash className="text-xl" />}
        />
      </div>
    </div>
  );
}
