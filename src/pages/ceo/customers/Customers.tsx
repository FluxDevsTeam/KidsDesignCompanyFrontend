import FilterDropdown from '../staffs/FilterDropdownList'
import { FaUser } from "react-icons/fa";
import dot from '../staffs/img/dots.png'
// import { HiDotsVertical } from "react-icons/hi"

const Customers = () => {
  return (
    <div className='bg-[#F0F4F8] m-5 p-5'>
      <h3 className="font-bold text-[18px] mb-4">Staff Requests</h3>
      <button className="text-[#0178A3] text-[17px] font-bold mb-8 bg-white px-3 py-1 rounded-xl">+ Add Project</button>


      <div className="flex justify-between items-center relative mb-7">
        <p className="text-[25px] font-bold">Pending Login Requests</p>
        <FilterDropdown />
      </div>
      <div className='bg-white p-5'>
        <table className="table-auto w-full bg-white p-4">
          <thead>
            <tr className="bg-[#F4F6F9]">
              <th className="w-1/5 py-4 px-4 border-gray-300 text-center font-[500] rounded-tl-2xl rounded-bl-2xl">Project</th>
              <th className="w-1/5 py-4 px-4 border-gray-300 text-center font-[500]">Role</th>
              <th className="w-1/5 py-4 px-4 border-gray-300 text-center font-[500]">Time</th>
              <th className="w-1/5 py-4 px-4 border-gray-300 text-center font-[500]">Start Date</th>
              <th className="w-1/5 py-4 px-4 border-gray-300 text-center font-[500] rounded-tr-2xl rounded-br-2xl">Action</th>
            </tr>
          </thead>


          <tbody className='text-[14px] leading-[18px]'>
            <tr>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-left flex items-center gap-4">
                <div className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                </div>
                <div>
                  <p className='font-bold'>Adebayo Oladimeji</p>
                  <p>adcdefghijkl@yahoo.com</p>
                </div>
              </td>
              <td className="w-1/5 text-center py-4 px-2 border-b border-gray-300">
                <span className='bg-[#C6F7E9] px-2 py-1'>Artisan123</span>
              </td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">2:34 pm</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">11/12/23</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
            </tr>
            <tr>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-left flex items-center gap-4">
                <div className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                </div>
                <div>
                  <p className='font-bold'>Adebayo Oladimeji</p>
                  <p>adcdefghijkl@yahoo.com</p>
                </div>
              </td>
              <td className="w-1/5 text-center py-4 px-2 border-b border-gray-300">
                <span className='text-[#014807] bg-[#E3F9E5] px-2 py-1'>Storekeeper</span>
              </td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">2:34 pm</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">11/12/23</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
            </tr>
            <tr>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-left flex items-center gap-4">
                <div className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                  <FaUser size={15} className="text-[#A6B5C3]" />
                </div>
                <div>
                  <p className='font-bold'>Adebayo Oladimeji</p>
                  <p>adcdefghijkl@yahoo.com</p>
                </div>
              </td>
              <td className="w-1/5 text-center py-4 px-2 border-b border-gray-300">
                <span className='text-[#841003] bg-[#FFE8D9] px-2 py-1'>Declined</span>
              </td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">2:34 pm</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">11/12/23</td>
              <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center"><img src={dot} className='block m-auto' /></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Customers
