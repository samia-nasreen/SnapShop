import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    if (userId) {
      fetch(`https://fakestoreapi.com/users/${userId}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [userId]);

  const onSubmit = (data) => {
    console.log(data);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto mt-8 mb-32 p-5">
        <div className="flex justify-between">
          <div className="text-xs text-gray-500 mb-12 mt-2 ml-2">
            <span className="mr-2">Home</span> /{" "}
            <span className="ml-2 text-black">My Account</span>
          </div>
          <div className="text-sm text-gray-500 mb-12 mt-2">
            <span className="mr-1">Welcome!</span>
            <span className="text-red-500">
              {capitalizeFirstLetter(userData.name.firstname)}{" "}
              {capitalizeFirstLetter(userData.name.lastname)}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <div className="w-1/4">
            <div className="bg-white px-2">
              <ul className="space-y-4">
                <li className="text-lg font-medium">Manage My Account</li>
                <li className="text-red-500 ml-8">My Profile</li>
                <li className="text-gray-500 ml-8">Address Book</li>
                <li className="text-gray-500 ml-8">My Payment Options</li>
              </ul>
              <ul className="mt-10 space-y-4">
                <li className="text-lg font-medium">My Orders</li>
                <li className="text-gray-500 ml-8">My Returns</li>
                <li className="text-gray-500 ml-8">My Cancellations</li>
              </ul>
              <ul className="mt-10 space-y-4">
                <li className="text-lg font-medium">My WishList</li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 pl-5">
            <div className="bg-white py-10 px-20 rounded shadow-[0px_0px_8px_2px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-medium text-red-500 mb-5">
                Edit Your Profile
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-16 gap-y-6 mb-5">
                  <div>
                    <label className="block font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
                      defaultValue={capitalizeFirstLetter(
                        userData.name.firstname
                      )}
                      {...register("firstName", { required: true })}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
                      defaultValue={capitalizeFirstLetter(
                        userData.name.lastname
                      )}
                      {...register("lastName", { required: true })}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
                      defaultValue={userData.email}
                      {...register("email", { required: true })}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-4 border-none bg-zinc-100 rounded-md"
                      defaultValue={`${userData.address.street}, ${userData.address.number}, ${userData.address.city}, ${userData.address.zipcode}`}
                      {...register("address", { required: true })}
                      readOnly
                    />
                  </div>
                </div>
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
                        <span className="text-red-500 text-sm">
                          New password is required
                        </span>
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
                <div className="flex justify-end space-x-4">
                  <button type="button" className="px-4 py-2">
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-10 py-4 bg-red-500 text-white rounded-md"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
