import React from "react";
import { useSelector } from "react-redux";

function SideMenu() {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="sideMenu">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        <div>
          <span className="activeUser">{user.value}</span>{" "}
          <button>Logout</button>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
