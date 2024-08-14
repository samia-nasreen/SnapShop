/* eslint-disable react/prop-types */
const TextInput = ({ label, register, errors, ...rest }) => (
  <div className="mb-4">
    <input {...register(label)} {...rest} className="form-input" />
    {errors[label] && <p className="error">{errors[label].message}</p>}
  </div>
);

export default TextInput;
