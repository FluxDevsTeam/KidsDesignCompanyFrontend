import { useState, useRef, useEffect } from "react";
import FilterDropdown from "./FilterDropdownList";
import { FaUser } from "react-icons/fa";
import dot from "./img/dots.png";

const Managers = () => {
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [])

  const staffData = [
    { name: "Ralph Edwards", role: "Project Manager", salary: "$90.00", date: "11/12/23" },
    { name: "Savannah Nguyen", role: "Project Manager", salary: "$100.00", date: "11/15/23" },
    { name: "Cody Fisher", role: "Project Manager", salary: "$85.00", date: "11/18/23" },
  ];

  return (
    <div>
      <div className="flex justify-between items-center relative mb-7">
        <p className="bg-white px-8 py-2 rounded-lg">Update</p>
        <FilterDropdown />
      </div>

      <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
        <thead>
          <tr>
            <th className="text-center py-4 px-2 border border-gray-300">
              <input type="checkbox" className="w-5 h-5 bg-[#90909014] border-4 border-gray-300 rounded-2xl" />
            </th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Name</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Role</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Salary</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Date</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Action</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff, index) => (
            <tr key={index}>
              <td className="text-center py-4 px-2 border border-gray-300">
                <input type="checkbox" className="w-5 h-5 bg-[#90909014] border-4 border-gray-300 rounded-2xl" />
              </td>
              <td className="py-4 px-2 border border-gray-300 text-left">
                <div className="flex items-center gap-2">
                  <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                    <FaUser size={15} className="text-[#A6B5C3]" />
                  </span>
                  <span>{staff.name}</span>
                </div>
              </td>
              <td className="py-4 px-2 border border-gray-300 text-left">{staff.role}</td>
              <td className="py-4 px-2 border border-gray-300 text-right">{staff.salary}</td>
              <td className="py-4 px-2 border border-gray-300 text-left">{staff.date}</td>
              <td className="py-4 px-2 border border-gray-300 text-left relative">
                <div className="relative inline-block" ref={dropdownRef}>
                  <img
                    src={dot}
                    className="cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                    alt="Options"
                  />
                  {openDropdown === index && (
                    <div className="absolute right-0 top-8 bg-white border border-gray-300 rounded-md shadow-md w-32 z-10">
                      <ul className="text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">👁️ View</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">✏️ Edit</li>
                        <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">🗑️ Delete</li>
                      </ul>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Managers;
