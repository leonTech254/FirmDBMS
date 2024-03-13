import React, { useState } from 'react';
import NavBarITem from '../Models/NavBarITem';
import "../Assets/css/dashboard.css";
import AllFilms from '../Components/AllFirlms';
import AddFirm from '../Components/AddFirm';

const navItems: NavBarITem[] = [
  {
    icon: "local_library",
    id: 1,
    Name: "Fetch All Data"
  },
  {
    icon: "delete",
    id: 2,
    Name: "Delete firm"
  },
  {
    icon: "update",
    id: 1,
    Name: "Update firm"
  },
  {
    icon: "create",
    id: 1,
    Name: "Add firm"
  }
];

const FirmPage: React.FC = () => {
  const [componentName, setComponentName] = useState<string>("delete");

  function toggleMenu(): void {
    const user_document = document.getElementById("side_bar");
    if (user_document != null) {
      user_document.classList.toggle("open_side_menu");
    }
  }

  function logout(): void {
    throw new Error('Function not implemented.');
  }

  function showComponent(component: string): void {
    setComponentName(component);
  }

  return (
    <div>
      <div className="AllContentDisplay">
        <div className="navigation_bar_dashboard">
          <button className="btn btn-sm" onClick={toggleMenu}>
            <span className="material-icons toggle_menu">menu</span>
          </button>
          <div className="userAccount">
            <div className="profile_info">
              <li>
                CRUD OPERATION
                <span className="material-icons" onClick={logout}>settings_power</span>
              </li>
            </div>
          </div>
        </div>
        <div className="components">
          <div className="components">
            {componentName === "local_library" && <AllFilms />}   
            {componentName === "create" && <AddFirm />}
            
          </div>
        </div>
      </div>
      <div className="sideBar_container" id="side_bar">
        <div className="nav_cancel_item">
          <span className="material-icons" onClick={toggleMenu}>cancel</span>
        </div>
        <ul>
          {navItems.map((navItem, index) => (
            <li key={index} className="d-flex gap-2" onClick={() => showComponent(navItem.icon)}>
              <span className='material-icons'>{navItem.icon}</span>{navItem.Name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FirmPage;
