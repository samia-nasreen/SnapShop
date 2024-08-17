import RoundedInput from "../../UI/RoundedInput";

/* eslint-disable react/prop-types */
const PasswordChange = ({ register, errors }) => (
  <div className="mb-5">
    <label className="block font-medium text-gray-600 mt-8 mb-1">
      Password Changes
    </label>
    <div className="grid grid-cols-1 gap-4">
      <RoundedInput
        type="password"
        name="currentPassword"
        placeholder="Current Password"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        type="password"
        name="newPassword"
        placeholder="New Password"
        register={register}
        errors={errors}
        required
      />
      <RoundedInput
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
        register={register}
        errors={errors}
        required
      />
    </div>
  </div>
);

export default PasswordChange;
