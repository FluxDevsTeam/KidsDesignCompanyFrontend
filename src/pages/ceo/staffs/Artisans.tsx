import {FiFilter} from 'react-icons/fi';

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
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Project ID</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Project</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Status</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Start Date</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500]">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">No. 0045</td>
            <td className="py-4 px-2 border border-gray-300 text-left">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-left">View</td>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <span></span>
              <span>In Progress</span></td>
            <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
          </tr>
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">No. 0045</td>
            <td className="py-4 px-2 border border-gray-300 text-left">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-left">View</td>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <span></span>
              <span>In Progress</span></td>
            <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
          </tr>
          <tr>
            <td className="text-center py-4 px-2 border border-gray-300">No. 0045</td>
            <td className="py-4 px-2 border border-gray-300 text-left">551423</td>
            <td className="py-4 px-2 border border-gray-300 text-left">View</td>
            <td className="py-4 px-2 border border-gray-300 text-left">
              <span></span>
              <span>In Progress</span></td>
            <td className="py-4 px-2 border border-gray-300 text-left">11/12/23</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Artisans
