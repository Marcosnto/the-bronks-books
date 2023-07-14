import { ErrorMessageProps } from "../../../utils/types/components";

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return <span className="text-red-500 font-medium">{message}</span>;
}
