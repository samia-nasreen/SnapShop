/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import PasswordChangeSection from "./PasswordChange";
import Button from "../../UI/Button";

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
          <TextInput
            label="First Name"
            defaultValue={capitalizeFirstLetter(userData.name.firstname)}
            {...register("firstName", { required: true })}
            readOnly
          />
          <TextInput
            label="Last Name"
            defaultValue={capitalizeFirstLetter(userData.name.lastname)}
            {...register("lastName", { required: true })}
            readOnly
          />
          <TextInput
            label="Email"
            type="email"
            defaultValue={userData.email}
            {...register("email", { required: true })}
            readOnly
          />
          <TextInput
            label="Address"
            defaultValue={`${userData.address.street}, ${userData.address.number}, ${userData.address.city}, ${userData.address.zipcode}`}
            {...register("address", { required: true })}
            readOnly
          />
        </div>
        <PasswordChangeSection register={register} errors={errors} />
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
