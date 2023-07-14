import { FormLabelProps } from "../../../utils/types/components";

export default function FormLabel({ label, htmlFor }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className="text-xl font-light">
      {label}
    </label>
  );
}
