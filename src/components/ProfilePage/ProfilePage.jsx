import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar from "./Sections/SideBar";
import ProfileForm from "./Sections/ProfileForm";
import Breadcrumb from "../UI/Breadcrumb";
import ProfileSkeleton from "../UI/ProfileSkeleton";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
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

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (!userData) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="container mx-auto mb-32 px-5">
        <div className="flex justify-between">
          <Breadcrumb parts={["Home", "My Account"]} className="ml-2" />
          <div className="text-sm text-gray-500  py-6">
            <span className="mr-1">Welcome!</span>
            <span className="text-red-500">
              {capitalizeFirstLetter(userData.name.firstname)}{" "}
              {capitalizeFirstLetter(userData.name.lastname)}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <SideBar />
          <div className="w-full md:w-3/4 pl-5">
            <ProfileForm
              userData={userData}
              onSubmit={onSubmit}
              capitalizeFirstLetter={capitalizeFirstLetter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
