import FilterDropdown from "./FilterDropdownList"
import { FaUser } from "react-icons/fa";

const Managers = () => {
  return (
    <div>
        <div className="flex justify-between items-center relative mb-7 text-[#0178A3] text-[18px] font-bold">
            <p  className="bg-white px-8 py-2 rounded-lg">Update</p>
            <FilterDropdown />
        </div>

        <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
            <thead>
            <tr>
                <th className="text-center py-4 px-2 border border-gray-300">
                <input
                    type="checkbox"
                    className="w-5 h-5 text-blue bg-[#90909014] border-4 border-gray-300 rounded-2xl"
                />
                </th>
                <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Name</th>
                <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Role</th>
                <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Salary</th>
                <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Date</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="text-center py-4 px-2 border border-gray-300">
                <input
                    type="checkbox"
                    className="w-5 h-5 text-blue bg-[#90909014] border-4 border-gray-300 rounded-2xl"
                />
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">
                <div className="flex items-center gap-2">
                    <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                    <FaUser size={15} className="text-[#A6B5C3]" />
                    </span>
                    <span>Ralph Edwards</span>
                </div>
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">Project Manager</td>
                <td className="py-4 px-2 border border-gray-300 text-left">$90.00</td>
                <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
            </tr>
            <tr>
                <td className="text-center py-4 px-2 border border-gray-300">
                <input
                    type="checkbox"
                    className="w-5 h-5 text-blue bg-[#90909014] border-4 border-gray-300 rounded-2xl"
                />
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">
                <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <span>Ralph Edwards</span>
                </div>
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">Project Manager</td>
                <td className="py-4 px-2 border border-gray-300 text-left">$90.00</td>
                <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
            </tr>
            <tr>
                <td className="text-center py-4 px-2 border border-gray-300">
                <input
                    type="checkbox"
                    className="w-5 h-5 text-blue bg-[#90909014] border-4 border-gray-300 rounded-2xl"
                />
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">
                <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <span>Ralph Edwards</span>
                </div>
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">Project Manager</td>
                <td className="py-4 px-2 border border-gray-300 text-left">$90.00</td>
                <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Managers
