import { Link, useLocation } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Managers from "./Managers";
import StoreKeeper from "./StoreKeeper";
import Artisans from "./Artisans";
import { Route, Routes } from 'react-router-dom';

const Staffs = () => {
  const location = useLocation();

  return (
    <div className="px-10 py-4 bg-[#F0F4F8]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium leading-[37.91px]">Staff Role</h2>
        <Link to={""} className="block text-sm font-semibold leading-[18.15px] text-[#0178A3] bg-white px-7 py-4 rounded-[8px]">
          + Add Staff
        </Link>
      </div>
      <ul className="flex gap-10 items-center bg-white rounded-lg w-[70%] px-8 py-7 mb-6">
        {[
          { path: "/dashboard/staffs", label: "Project manager" },
          { path: "/dashboard/staffs/store", label: "Store keeper" },
          { path: "/dashboard/staffs/artisans", label: "Artisans" },
        ].map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`flex items-center gap-4 text-[18px] font-medium leading-[21.78px] px-2 pb-2 ${
                location.pathname === path
                  ? "text-[#0178A3] border-b-4 border-[#0178A3]"
                  : "text-[#737373]"
              }`}
            >
              <FaUser className="inline-block" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Routes>
        <Route index element={<Managers />} />
        <Route path="store" element={<StoreKeeper />} />
        <Route path="artisans" element={<Artisans />} />
      </Routes>
    </div>
  );
};

export default Staffs;
