/* eslint-disable react/prop-types */
const FormInput = ({
  label,
  name,
  register,
  errors,
  type = "text",
  required,
}) => (
  <div>
    <label className="block mb-2">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <input
      {...register(name)}
      type={type}
      className="w-full p-4 border-none bg-zinc-100 rounded"
    />
    {errors[name] && (
      <p className="text-red-500 text-sm">{errors[name]?.message}</p>
    )}
  </div>
);

export default FormInput;
