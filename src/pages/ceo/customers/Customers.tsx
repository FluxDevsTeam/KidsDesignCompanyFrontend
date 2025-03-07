import { FaUser } from "react-icons/fa";
import { fetchData } from "./api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from './ìmg/hi.jpg'

const Customers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [customers, setCustomers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
          setLoading(true);
          setError(null);
          try {
            const data = await fetchData();
            console.log("Fetched Data:", data)
            setCustomers(data.results || []);
            
        }
        catch (err) {
            console.error("Error fetching products:", err);
            setError("Failed to load customers.");
        } finally {
          setLoading(false);
        }
    } 
  fetchProducts();
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto p-4">
      <div className="animate-pulse space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-gray-200 rounded"></div>
        ))}
      </div>
    </div>
    )
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="px-10 py-5">
      <div className="flex justify-between pr-52 m-10">
        <h2 className="text-[#0178A3] font-semibold text-[24px]">Active Customers</h2>
        <div className="flex items-center">
          <img src={img} alt="" className="w-12 h-12 rounded-full -ml-2 first:ml-0" />
          <img src={img} alt="" className="w-12 h-12 rounded-full -ml-2 first:ml-0" />
          <img src={img} alt="" className="w-12 h-12 rounded-full -ml-2 first:ml-0" />
          <img src={img} alt="" className="w-12 h-12 rounded-full -ml-2 first:ml-0" />
          <img src={img} alt="" className="w-12 h-12 rounded-full -ml-2 first:ml-0" />
          <span className=" bg-gray-500 text-white flex justify-center items-center border w-12 h-12 rounded-full -ml-2 first:ml-0">12 +</span>
        </div>
      </div>

      <div className="flex justify-between items-center gap-10 mb-8">
        <article className="border rounded-lg p-5 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] flex-1">
          <p className="w-12 h-12 rounded-full bg-[#0178A342] mb-4"></p>
          <p className="font-bold text-[14px] text-[#767676] mb-2">Total Customers</p>
          <p className="flex justify-between items-end gap-20">
            <span className="text-[#0178A3] text-[36px] font-bold">57000</span>
            <span className="text-[#767676] text-[10px] font-bold">56% VS last month</span>
          </p>
        </article>
        <article className="border rounded-lg p-5 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] flex-1">
          <p className="w-12 h-12 rounded-full bg-[#0178A342] mb-4"></p>
          <p className="font-bold text-[14px] text-[#767676] mb-2">Active Users</p>
          <p className="flex justify-between items-end gap-20">
            <span className="text-[#0178A3] text-[36px] font-bold">112</span>
            <div className="flex items-center">
              <img src={img} alt="" className="w-7 h-7 rounded-full -ml-2 first:ml-0" />
              <img src={img} alt="" className="w-7 h-7 rounded-full -ml-2 first:ml-0" />
              <img src={img} alt="" className="w-7 h-7 rounded-full -ml-2 first:ml-0" />
              <img src={img} alt="" className="w-7 h-7 rounded-full -ml-2 first:ml-0" />
              <img src={img} alt="" className="w-7 h-7 rounded-full -ml-2 first:ml-0" />
              <span className="text-[10px] bg-gray-500 text-white flex justify-center items-center border w-7 h-7 rounded-full -ml-2 first:ml-0">12 +</span>
            </div>
          </p>
        </article>
        <article className="border rounded-lg p-5 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] flex-1">
          <p className="w-12 h-12 rounded-full bg-[#0178A342] mb-4"></p>
          <p className="font-bold text-[14px] text-[#767676] mb-2">Total Members</p>
          <p className="flex justify-between items-end gap-20">
            <span className="text-[#0178A3] text-[36px] font-bold">57122</span>
            <span className="text-[#767676] text-[10px] font-bold">56% VS last month</span>
          </p>
        </article>
      </div>

      <button className="bg-[#FF3B30] text-white flex items-center gap-3 px-4 py-1 mb-6 rounded-lg">
        <span className="font-extrabold text-[30px]">+</span>
        <span className="text-[16px]"> Create Customer</span>
      </button>
      <table className="table-auto border-collapse border border-gray-300 w-full bg-white">
        <thead>
          <tr className="bg-[#F4F6F9]">
            <th className="ml-5 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Customers</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Name of Customers</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Email</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Phone Number</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Location</th>
            <th className="py-4 px-2 border border-gray-300 text-left font-[500] bg-[#F4F6F9]">Year Joined</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.map((customer, index) => (
              <tr key={index} onClick={() => navigate(`/dashboard/customers/${customer.id}`)} className="cursor-pointer">
                <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-left flex items-center gap-4">
                  <div className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                    <FaUser size={15} className="text-[#A6B5C3]" />
                  </div>
                  <div>
                    <p className="font-bold">{customer.name}</p>
                    <p>{customer.email}</p>
                  </div>
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">
                  <p className="flex items-center gap-2 capitalize">{customer.name}</p>
                </td>
                <td className="py-4 px-2 border border-gray-300 text-left">{customer.email}</td>
                <td className="py-4 px-2 border border-gray-300 text-right">{customer.phone_number}</td>
                <td className="py-4 px-2 border border-gray-300 text-left">{customer.address}</td>
                <td className="py-4 px-2 border border-gray-300 text-left">{new Date(customer.created_at).getFullYear()}</td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Customers


// {fetchData.map((staff, index) => (
//     <tr key={index}>
//       <td className="text-center py-4 px-2 border border-gray-300">
//         <input type="checkbox" className="w-5 h-5 bg-[#90909014] border-4 border-gray-300 rounded-2xl" />
//       </td>
//       <td className="py-4 px-2 border border-gray-300 text-left">
//         <div className="flex items-center gap-2">
//           <span className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
//             <FaUser size={15} className="text-[#A6B5C3]" />
//           </span>
//           <span>{staff.name}</span>
//         </div>
//       </td>
//       <td className="py-4 px-2 border border-gray-300 text-left">{staff.role}</td>
//       <td className="py-4 px-2 border border-gray-300 text-right">{staff.salary}</td>
//       <td className="py-4 px-2 border border-gray-300 text-left">{staff.date}</td>
//       <td className="py-4 px-2 border border-gray-300 text-left relative">
//         <div className="relative inline-block" ref={dropdownRef}>
//           <img
//             src={dot}
//             className="cursor-pointer"
//             onClick={() => toggleDropdown(index)}
//             alt="Options"
//           />
//           {openDropdown === index && (
//             <div className="absolute right-0 top-8 bg-white border border-gray-300 rounded-md shadow-md w-32 z-10">
//               <ul className="text-sm text-gray-700">
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">👁️ View</li>
//                 <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">✏️ Edit</li>
//                 <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">🗑️ Delete</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </td>
//     </tr>
//   ))}