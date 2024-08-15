/* eslint-disable react/prop-types */
const TextInput = ({
  label,
  type = "text",
  defaultValue,
  readOnly,
  register,
  ...rest
}) => (
  <div>
    <label className="block font-medium text-gray-700">{label}</label>
    <input
      type={type}
      className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
      defaultValue={defaultValue}
      readOnly={readOnly}
      {...(register && register(rest.name, rest))}
    />
  </div>
);

export default TextInput;
