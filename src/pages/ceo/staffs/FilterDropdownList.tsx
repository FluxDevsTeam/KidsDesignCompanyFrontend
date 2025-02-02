import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdFilterList } from "react-icons/md";


const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = () => { 
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-end absolute right-0 top-0 z-10 ">
      <button onClick={toggleDropdown}>
        <p className="flex gap-4 items-center bg-white px-4 py-2 rounded-lg font-bold text-[#0178A3]"><MdFilterList size={18} /><span>Filter</span></p>
      </button>
      {isOpen && (
        <ul className="bg-white border border-gray-400 rounded-lg flex flex-col">
          {['Name', 'Role', 'Salary'].map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect }
              className="py-2.5 px-5"
            >
              <Link to="" className="flex justify-between items-center">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterDropdown;