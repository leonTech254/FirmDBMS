import React from 'react';
import NavBarITem from '../Models/NavBarITem';
import "../Assets/css/dashboard.css"

const navItems:NavBarITem[]=[
{
icon:"local_library",
id:1,
Name:"Fetch All Data"

},
{
icon:"delete",
id:2,
Name:"Delete firm"

},
{
icon:"update",
id:1,
Name:"Update firm"
},
{
icon:"create",
id:1,
Name:"Add firm"
},
]
const FirmPage: React.FC = () => {
    function toggleMenu(): void {
        const user_document=document.getElementById("side_bar");
        if(user_document!=null)
        {
         user_document.classList.toggle("open_side_menu");

        }
    }

    function logout(): void {
        throw new Error('Function not implemented.');
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
                        Martin Leon
                        {/* {userModel && userModel.username} */}
                        <span className="material-icons" onClick={logout}>settings_power</span>
                    </li>
                </div>
            </div>
        </div>
         </div>
         <div className="sideBar_container" id="side_bar">
                        <div className="nav_cancel_item">
                            <span className="material-icons" onClick={toggleMenu}>cancel</span>
                        </div>
        <ul>
        {navItems.map((navItem,index)=>(
            <li key={index} className="d-flex gap-2" onClick={toggleMenu}> 
                <span className='material-icons'>{navItem.icon}</span>{navItem.Name}
            </li>
        ))}
        </ul>
        </div>

    </div>
  );
}

export default FirmPage;
