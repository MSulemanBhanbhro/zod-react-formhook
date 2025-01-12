
import { FormFieldProps } from "@/types";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 my-3"
    />
    {error && <span className="error-message text-red-600">{error.message}</span>}
  </>
);
export default FormField;