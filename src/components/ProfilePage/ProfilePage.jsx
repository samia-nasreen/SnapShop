import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar from "./Sections/SideBar";
import ProfileForm from "./Sections/ProfileForm";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  if (!userData) {
    return (
      <div className="flex items-center justify-center p-4">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <div className="container mx-auto mt-4 mb-32 p-5">
        <div className="flex justify-between">
          <div className="text-xs text-gray-500 mb-12 ml-3">
            <span className="mr-2">Home</span> /{" "}
            <span className="ml-2 text-black">My Account</span>
          </div>
          <div className="text-sm text-gray-500 mb-12">
            <span className="mr-1">Welcome!</span>
            <span className="text-red-500">
              {capitalizeFirstLetter(userData.name.firstname)}{" "}
              {capitalizeFirstLetter(userData.name.lastname)}
            </span>
          </div>
        </div>
        <div className="w-full flex">
          <SideBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            closeSidebar={closeSidebar}
          />
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
