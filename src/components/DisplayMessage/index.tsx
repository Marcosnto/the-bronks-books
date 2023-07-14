import { DisplayMessageProps } from "../../utils/types/components";

export default function DisplayMessage({ message }: DisplayMessageProps) {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h2 className="font-light text-xl">{message}</h2>
    </div>
  );
}
