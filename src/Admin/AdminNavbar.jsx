import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const AdminNavbar = ({ handleOpenSideBar }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="lg:hidden px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      <div className="flex items-center space-x-4">
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
          <IconButton onClick={handleOpenSideBar}>
            <MenuIcon />
          </IconButton>
          <li className="logo font-semibold text-gray-300 text-2xl">
            Zosh Food
          </li>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
