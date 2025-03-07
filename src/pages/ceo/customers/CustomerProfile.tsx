import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { fetchData } from "./api"; // Fetch customer details
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const { id } = useParams(); // Get the customer ID from the URL
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null | undefined>(null);
  const [customer, setCustomer] = useState<{ 
    name: string; 
    email: string; 
    phone_number: string;
    total_spent: number;
    total_balance: number;
    transactions: { description: string; amount: number }[];
  } | null>(null);
  

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await fetchData(); // Replace with your actual API call
        const foundCustomer = data.results.find((cust: { id: { toString: () => string | undefined; }; }) => cust.id.toString() === id);
        if (foundCustomer) {
          setCustomer(foundCustomer);
        } else {
          setError("Customer not found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error loading customer profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchCustomer();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!customer) return <div className="text-red-500 text-center mt-10">Customer not found.</div>;
//   if (!customer.transactions) return <div className="text-center mt-10">No transactions available.</div>;
  

  return (
    <div className="container mx-auto mt-10 p-6 max-w-2xl bg-white shadow-lg rounded-2xl">
      <div className="flex items-center space-x-12">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex justify-center items-center text-gray-500">
          <FaUser size={40} />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#0178A3] uppercase mb-3">{customer.name}</h2>
          <p className="text-gray-500 mb-3">{customer.email}</p>
          <p className="text-gray-500">{customer.phone_number}</p>
        </div>
      </div>

      <div className="mt-6 border-t pt-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-500 mb-4">Total Spent</p>
            <p className="text-2xl font-bold text-[#0178A3]">$409,000{customer.total_spent}</p>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg">
            <p className="text-gray-500 mb-4">Total Balance</p>
            <p className="text-2xl font-bold text-red-500">$85,000{customer.total_balance}</p>
          </div>
        </div>
      </div>

      {/* <div className="mt-6">
        <h3 className="text-lg font-bold">Recent Transactions</h3>
        <ul className="mt-3 space-y-2">
          {customer.transactions.map((txn, index) => (
            <li key={index} className="p-2 bg-gray-50 rounded flex justify-between">
              <span>{txn.description}</span>
              <span className={`font-bold ${txn.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                {txn.amount > 0 ? `+${txn.amount}` : txn.amount}
              </span>
            </li>
          ))}
        </ul>
      </div> */}

      <div className="mt-8 text-center">
        <Link to="/dashboard/customers" className="bg-[#0178A3] text-white p-3 rounded-lg">
          Back to Customers
        </Link>
      </div>
    </div>
  );
};

export default CustomerProfile;
