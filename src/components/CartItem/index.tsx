import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";
import { CartItemProps } from "../../utils/types/components";
import Button from "../Button";
import useStore from "../../store";

export default function CartItem({
  id,
  imageLink,
  title,
  price,
  quantity,
}: CartItemProps) {
  const store = useStore();
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
          backgroundColor="bg-gray-100"
          textColor="text-black"
          onClick={() => store.addItem(id!)}
          icon={<BiPlus className="text-xl" />}
        />
        <Button
          backgroundColor="bg-gray-100"
          textColor="text-black"
          onClick={() => store.removeItem(id!)}
          icon={<BiMinus className="text-xl" />}
        />
        <Button
          backgroundColor="bg-gray-100"
          textColor="text-black"
          onClick={() => store.deleteItem(id!)}
          icon={<BiTrash className="text-xl" />}
        />
      </div>
    </div>
  );
}
