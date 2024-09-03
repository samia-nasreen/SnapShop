import React from "react";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import RoundedInput from "../../../components/UI/RoundedInput";

interface PasswordChangeProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<FieldValues>;
}

const PasswordChange: React.FC<PasswordChangeProps> = ({
  register,
  errors,
}) => (
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
      />
      <RoundedInput
        type="password"
        name="newPassword"
        placeholder="New Password"
        register={register}
        errors={errors}
      />
      <RoundedInput
        type="password"
        name="confirmNewPassword"
        placeholder="Confirm New Password"
        register={register}
        errors={errors}
      />
    </div>
  </div>
);

export default PasswordChange;
