import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import PasswordChange from "./PasswordChange";
import Button from "../../../components/UI/Button";
import RoundedInput from "../../../components/UI/RoundedInput";

interface UserData {
  name: {
    firstname: string;
    lastname: string;
  };
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    zipcode: string;
  };
}

interface ProfileFormProps {
  userData: UserData;
  onSubmit: SubmitHandler<FieldValues>;
  capitalizeFirstLetter: (text: string) => string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({
  userData,
  onSubmit,
  capitalizeFirstLetter,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  return (
    <div className="bg-white py-10 px-10 sm:px-20 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)]">
      <h2 className="text-2xl font-medium text-red-500 mb-5">
        Edit Your Profile
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-5">
          <RoundedInput
            label="First Name"
            name="firstName"
            errors={errors}
            defaultValue={capitalizeFirstLetter(userData.name.firstname)}
            register={register}
            required
          />
          <RoundedInput
            label="Last Name"
            name="lastName"
            errors={errors}
            defaultValue={capitalizeFirstLetter(userData.name.lastname)}
            register={register}
            required
          />
          <RoundedInput
            label="Email"
            name="email"
            type="email"
            errors={errors}
            defaultValue={userData.email}
            register={register}
            required
          />
          <RoundedInput
            label="Address"
            name="address"
            errors={errors}
            defaultValue={`${userData.address.street}, ${userData.address.number}, ${userData.address.city}, ${userData.address.zipcode}`}
            register={register}
            required
          />
        </div>
        <PasswordChange register={register} errors={errors} />
        <div className="flex justify-end space-x-4">
          <button type="button" className="md:px-4 py-2">
            Cancel
          </button>
          <Button text="Save Changes" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
