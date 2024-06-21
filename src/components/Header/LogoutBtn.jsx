import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import SkeletonComponent from "../Skeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function LogoutBtn() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const logoutHandler = () => {
    setLoading(true);
    authService
      .logout()
      .then(() => {
        dispatch(logout());
      })
      .catch(() => console.log("Error while logging out"))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="inline-block">
      {loading ? (
        <Skeleton
          className="w-[100px] h-[40px] rounded-full"
          baseColor="#9CA3AF"
          highlightColor="#6B7280"
        />
      ) : (
        <button
          className="w-[100px] h-[40px] px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
          onClick={logoutHandler}
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default LogoutBtn;
