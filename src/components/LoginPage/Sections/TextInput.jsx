/* eslint-disable react/prop-types */
const TextInput = ({ label, register, errors, ...rest }) => (
  <div className="mb-4">
    <input {...register(label)} {...rest} className="form-input w-full" />
    {errors[label] && (
      <p className="error text-red-500 mb-2">{errors[label].message}</p>
    )}
  </div>
);

export default TextInput;
