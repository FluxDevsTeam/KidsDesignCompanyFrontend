import FilterDropdown from '../staffs/FilterDropdownList'
import { FaUser } from "react-icons/fa";
import dot from '../staffs/img/dots.png'

const Customers = () => {
  return (
    <div className='bg-[#F0F4F8] m-5 p-5'>
      <h3 className="font-bold text-[18px] mb-4">Staff Requests</h3>
      <button className="text-[#0178A3] text-[17px] font-bold mb-8 bg-white px-3 py-1 rounded-xl">+ Add Project</button>


      <div className="flex justify-between items-center relative mb-7">
        <p className="text-[25px] font-bold">Pending Login Requests</p>
        <FilterDropdown />
      </div>

      <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
        <thead>
          <tr>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Project</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Role</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Time</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Start Date</th>
            <th className="py-4 px-2 border border-gray-300 text-center font-[500]">Action</th>
          </tr>
        </thead>

        <tbody className='text-[14px] leading-[18px]'>
          <tr>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <div className="flex items-center gap-2">
                  <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                  </span>
                  <span>Ralph Edwards</span>
              </div>
            </td>
            <td className="text-center py-4 px-2 border border-gray-300">
              <span className='bg-[#C6F7E9] px-2 py-1'>No. 0045</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center">2:34 pm</td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
          </tr>
          
          <tr>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <div className="flex items-center gap-2">
                  <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                  </span>
                  <span>Ralph Edwards</span>
              </div>
            </td>
            <td className="text-center py-4 px-2 border border-gray-300">
              <span className='bg-[#C6F7E9] px-2 py-1'>No. 0045</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center">2:34 pm</td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
          </tr>
          <tr>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <div className="flex items-center gap-2">
                  <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                  </span>
                  <span>Ralph Edwards</span>
              </div>
            </td>
            <td className="text-center py-4 px-2 border border-gray-300">
              <span className='bg-[#C6F7E9] px-2 py-1'>No. 0045</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center">2:34 pm</td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Customers
