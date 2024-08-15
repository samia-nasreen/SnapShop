/* eslint-disable react/prop-types */
const PasswordChange = ({ register, errors }) => (
  <div className="mb-5">
    <label className="block font-medium text-gray-700 mt-8">
      Password Changes
    </label>
    <div className="grid grid-cols-1 gap-4">
      <div>
        <input
          type="password"
          className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
          placeholder="Current Password"
          {...register("currentPassword", { required: true })}
        />
        {errors.currentPassword && (
          <span className="text-red-500 text-sm">
            Current password is required
          </span>
        )}
      </div>
      <div>
        <input
          type="password"
          className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
          placeholder="New Password"
          {...register("newPassword", { required: true })}
        />
        {errors.newPassword && (
          <span className="text-red-500 text-sm">New password is required</span>
        )}
      </div>
      <div>
        <input
          type="password"
          className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
          placeholder="Confirm New Password"
          {...register("confirmNewPassword", { required: true })}
        />
        {errors.confirmNewPassword && (
          <span className="text-red-500 text-sm">
            Confirming new password is required
          </span>
        )}
      </div>
    </div>
  </div>
);

export default PasswordChange;
