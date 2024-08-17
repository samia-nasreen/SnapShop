/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import PasswordChange from "./PasswordChange";
import Button from "../../UI/Button";
import RoundedInput from "../../UI/RoundedInput";

const ProfileForm = ({ userData, onSubmit, capitalizeFirstLetter }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="bg-white py-10 px-20 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)]">
      <h2 className="text-2xl font-medium text-red-500 mb-5">
        Edit Your Profile
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-5">
          <RoundedInput
            label="First Name"
            name="firstName"
            defaultValue={capitalizeFirstLetter(userData.name.firstname)}
            register={register}
            readOnly
          />
          <RoundedInput
            label="Last Name"
            name="lastName"
            defaultValue={capitalizeFirstLetter(userData.name.lastname)}
            register={register}
            readOnly
          />
          <RoundedInput
            label="Email"
            name="email"
            type="email"
            defaultValue={userData.email}
            register={register}
            readOnly
          />
          <RoundedInput
            label="Address"
            name="address"
            defaultValue={`${userData.address.street}, ${userData.address.number}, ${userData.address.city}, ${userData.address.zipcode}`}
            register={register}
            readOnly
          />
        </div>
        <PasswordChange register={register} errors={errors} />
        <div className="flex justify-end space-x-4">
          <button type="button" className="px-4 py-2">
            Cancel
          </button>
          <Button
            text="Save Changes"
            fontSize="base"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
