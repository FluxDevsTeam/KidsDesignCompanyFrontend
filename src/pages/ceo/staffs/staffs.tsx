import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Managers from "./Managers";
import StoreKeeper from "./StoreKeeper";
import Artisans from "./Artisans";
import { Route, Routes } from 'react-router-dom';

const Staffs = () => {
  
  return (
    <div className="px-10 py-4 bg-[#F0F4F8]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-medium leading-[37.91px]">Staff Role</h2>
        <Link to={""} className="block text-sm font-semibold leading-[18.15px] text-[#0178A3] bg-white px-7 py-4 rounded-[8px]">+ Add Staff</Link>
      </div>
      <ul className="flex gap-10 items-center bg-white rounded-lg w-[70%] px-8 py-7 mb-6">
        <li className="flex items-center gap-2 text-[18px] font-medium leading-[21.78px] text-[#737373]"><Link to={"/dashboard/staffs"}><FaUser className="inline-block" /><span className="">Project manager</span></Link></li>
        <li className="flex items-center gap-2 text-[18px] font-medium leading-[21.78px] text-[#737373]"><Link to={"/dashboard/staffs/store"}><FaUser className="inline-block" /><span>Store keeper</span></Link></li>
        <li className="flex items-center gap-2 text-[18px] font-medium leading-[21.78px] text-[#737373]"><Link to={"/dashboard/staffs/artisans"}><FaUser className="inline-block" /><span>Artisans</span></Link></li>
      </ul>
      <Routes>
          <Route index element={<Managers />} />
          <Route path="store" element={<StoreKeeper />} />
          <Route path="artisans" element={<Artisans />} />
      </Routes>
    </div>
  )
};

export default Staffs;
