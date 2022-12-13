import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function SideMenu() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-zinc-900 min-h-screen text-gray-100 px-6 w-60 flex flex-col justify-between">
        <ul className="flex flex-col gap-4 relative py-4">
          <li>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive
                  ? "flex items-center text-md p-2 bg-gray-800 rounded-md"
                  : "flex items-center text-md p-2 hover:bg-gray-800 rounded-md"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboardB"
              className={(navData) =>
                navData.isActive
                  ? "flex items-center text-md p-2 bg-gray-800 rounded-md"
                  : "flex items-center text-md p-2 hover:bg-gray-800 rounded-md"
              }
            >
              Dashboard A
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/graficas"
              className={(navData) =>
                navData.isActive
                  ? "flex items-center text-md p-2 bg-gray-800 rounded-md"
                  : "flex items-center text-md p-2 hover:bg-gray-800 rounded-md"
              }
            >
              Dashboard B
            </NavLink>
          </li>
        </ul>
        <div className="py-8 flex flex-col gap-4 relative">
          <span className="bg-gray-800 p-2 rounded-md text-blue-300 font-bold text-center">
            User: {user.value}
          </span>{" "}
          <button className="bg-gray-800 p-2 rounded-md text-red-500 font-bold hover:bg-gray-700">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
