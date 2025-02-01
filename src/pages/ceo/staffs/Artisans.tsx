import {FiFilter} from 'react-icons/fi';
import dot from './img/dots.png'

const Artisans = () => {
  return (
    <div>
      <h3 className="font-bold text-[20px] mb-4">Activities</h3>
      <button className="text-[#0178A3] text-[14px] font-bold mb-8">+ Add Project</button>


      <div className="flex justify-between items-center relative mb-7">
        <p className="text-red-500">Update</p>
        <p className="flex items-center"><span><FiFilter /></span><span>Filter</span></p>
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

        <tbody className='text-[14px] leading-[18px]'>
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">
              <span className='bg-[#C6F7E9] px-2 py-1'>No. 0045</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-center">
              <span className='border border-black-600 rounded-2xl px-6 py-1'>View</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 flex justify-center items-center gap-4 h-[100%]">
              <span className='block bg-green-910 w-4 h-4 rounded-full'></span>
              <span className=''>In Progress</span></td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} /></td>
          </tr>
          
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">
              <span className='bg-[#c9869f] px-2 py-1'>No. 0045</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-center">
              <span className='border border-black-600 rounded-2xl px-6 py-1'>View</span>
            </td>
            <td className="py-4 px-2 border border-gray-300 text-center flex justify-center items-center gap-4">
              <span className='block bg-red-950 w-4 h-4 rounded-full'></span>
              <span>Cancelled</span></td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} /></td>
          </tr>
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">No. 0045</td>
            <td className="py-4 px-2 border border-gray-300 text-center">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-center">View</td>
            <td className="py-4 px-2 border border-gray-300 text-center">
              <span></span>
              <span>Cancelled</span></td>
            <td className="py-4 px-2 border border-gray-300 text-center">11/12/23</td>
            <td className="py-4 px-2 border border-gray-300 text-center"><img src={dot} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Artisans
