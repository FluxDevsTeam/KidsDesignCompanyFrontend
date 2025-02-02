import { useState, useRef, useEffect } from "react";
import { FiFilter } from "react-icons/fi";
import dot from "./img/dots.png";

const Artisans = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node)
        )
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const data = [
    { id: "No. 0045", projectId: "551423", status: "In Progress", color: "green", date: "11/12/23" },
    { id: "No. 0046", projectId: "551424", status: "Cancelled", color: "red", date: "12/12/23" },
    { id: "No. 0047", projectId: "551425", status: "Completed", color: "blue", date: "13/12/23" },
  ];

  return (
    <div>
      <h3 className="font-bold text-[20px] mb-4">Activities</h3>
      <button className="text-[#0178A3] text-[14px] font-bold mb-8">+ Add Project</button>

      <div className="flex justify-between items-center relative mb-7">
        <p className="text-red-500 font-bold text-[18px]">Update</p>
        <p className="flex items-center">
          <span>
            <FiFilter />
          </span>
          <span>Filter</span>
        </p>
      </div>

      <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
        <thead>
          <tr>
            <th className="text-center py-4 px-2 border border-gray-300">Artisan ID</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Project ID</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Project</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Status</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Start Date</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Action</th>
          </tr>
        </thead>

        <tbody className="text-[14px] leading-[18px]">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="text-center py-4 px-2 border border-gray-300">
                <span className="bg-[#C6F7E9] px-2 py-1">{item.id}</span>
              </td>
              <td className="py-4 px-2 border border-gray-300 text-center">{item.projectId}</td>
              <td className="py-4 px-2 border border-gray-300 text-center">
                <span className="border border-black-600 rounded-2xl px-6 py-1">View</span>
              </td>
              <td className="py-4 px-2 border border-gray-300 text-center flex justify-center items-center gap-4">
                <span className={`block bg-${item.color}-500 w-4 h-4 rounded-full`}></span>
                <span>{item.status}</span>
              </td>
              <td className="py-4 px-2 border border-gray-300 text-center">{item.date}</td>
              <td className="py-4 px-2 border border-gray-300 text-center relative">
                <img
                  src={dot}
                  className="cursor-pointer"
                  onClick={() => toggleDropdown(index)}
                />
                {openDropdown === index && (
                  <div
                    ref={(el) => (dropdownRefs.current[index] = el)}
                    className="absolute right-0 bg-white shadow-lg border rounded-lg p-2 mt-2 w-32 z-10"
                  >
                    <p className="cursor-pointer p-2 hover:bg-gray-200 text-left">👁️ View</p>
                    <p className="cursor-pointer p-2 hover:bg-gray-200 text-left">✏️ Edit</p>
                    <p className="cursor-pointer p-2 hover:bg-red-200 text-red-600 text-left">🗑️ Delete</p>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Artisans;
