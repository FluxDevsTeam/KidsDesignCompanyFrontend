import { useState, useRef, useEffect } from "react";
import FilterDropdown from "../staffs/FilterDropdownList";
import { FiFilter } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import dot from "../staffs/img/dots.png";
import payer from '../staffs/img/payer.png'
import paypal from '../staffs/img/paypal.png'

const Requests = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const payments = Array.from({ length: 9 });

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

  const customers = [
    {
      name: "Adebayo Oladimeji",
      email: "adcdefghijkl@yahoo.com",
      role: "Artisan123",
      roleBg: "bg-[#C6F7E9]",
      time: "2:34 pm",
      date: "11/12/23",
    },
    {
      name: "Adeboye Davido",
      email: "mnopqrstuvwxyz@yahoo.com",
      role: "Storekeeper",
      roleBg: "bg-[#E3F9E5] text-[#014807]",
      time: "2:34 pm",
      date: "11/12/23",
    },
    {
      name: "Burnaboy Wizzy",
      email: "onetwothree@yahoo.com",
      role: "Declined",
      roleBg: "bg-[#FFE8D9] text-[#841003]",
      time: "2:34 pm",
      date: "11/12/23",
    },
  ];

  return (
    <div className="bg-[#F0F4F8] m-5 p-5">
      <h3 className="font-bold text-[18px] mb-4">Staff Requests</h3>
      <button className="text-[#0178A3] text-[17px] font-bold mb-8 bg-white px-3 py-1 rounded-xl">
        + Add Project
      </button>

      <div className="flex justify-between items-center relative mb-7">
        <p className="text-[25px] font-bold">Pending Login Requests</p>
        <FilterDropdown />
      </div>

      <div className="bg-white p-5">
        <table className="table-auto w-full bg-white p-4">
          <thead>
            <tr className="bg-[#F4F6F9]">
              <th className="w-1/5 py-4 px-4 text-center font-[500] rounded-tl-2xl rounded-bl-2xl">Project</th>
              <th className="w-1/5 py-4 px-4 text-center font-[500]">Role</th>
              <th className="w-1/5 py-4 px-4 text-center font-[500]">Time</th>
              <th className="w-1/5 py-4 px-4 text-center font-[500]">Start Date</th>
              <th className="w-1/5 py-4 px-4 text-center font-[500] rounded-tr-2xl rounded-br-2xl">Action</th>
            </tr>
          </thead>
          <tbody className="text-[14px] leading-[18px]">
            {customers.map((customer, index) => (
              <tr key={index}>
                <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-left flex items-center gap-4">
                  <div className="bg-[#DDE1E7] px-1.5 py-1.5 rounded-full ring-2 ring-offset-2 ring-[#DDE1E7]">
                    <FaUser size={15} className="text-[#A6B5C3]" />
                  </div>
                  <div>
                    <p className="font-bold">{customer.name}</p>
                    <p>{customer.email}</p>
                  </div>
                </td>
                <td className="w-1/5 text-center py-4 px-2 border-b border-gray-300">
                  <span className={`${customer.roleBg} px-2 py-1`}>{customer.role}</span>
                </td>
                <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">{customer.time}</td>
                <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center">{customer.date}</td>
                <td className="w-1/5 py-4 px-2 border-b border-gray-300 text-center relative">
                  <img
                    src={dot}
                    className="block m-auto cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  />
                  {openDropdown === index && (
                    <div
                      ref={(el) => (dropdownRefs.current[index] = el)}
                      className="absolute right-0 bg-white shadow-lg border rounded-lg p-2 mt-2 w-28"
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


      <div className="mt-28">
        <div className="flex justify-between items-center relative mb-7">
          <p className="font-bold text-[18px]">Payment History</p>
          <div className="flex items-center gap-4">
            <p className="font-bold text-[20px]">2024</p>
            <p className="flex items-center gap-2"><span><FiFilter /></span><span>Filter</span></p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-28">
          {payments.map((_, index) => (
            <div key={index}>
              <p className="mb-5 font-bold text-[22px] text-[#343C6A]">May Payment</p>
              <div className="bg-white p-6 rounded-3xl">
                <div className="flex items-center justify-between mb-4">
                  <img src={paypal} className="bg-[#7777772c] rounded-full p-2" />
                  <p className="flex flex-col">
                    <span className="font-[500]">Deposit Paypal</span>
                    <span className="text-[15px]">25 January 2024</span>
                  </p>
                  <p className="text-[#41D4A8]">$2,500</p>
                </div>
                <div className="flex items-center justify-between">
                  <img src={payer} className="bg-[#7777772c] rounded-full p-2" />
                  <p className="flex flex-col">
                    <span className="font-[500]">James Wilson</span>
                    <span className="text-[15px]">21 January 2024</span>
                  </p>
                  <p className="text-[#41D4A8]">$2,500</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
