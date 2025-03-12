import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { fetchData } from "./api";
import { Link } from "react-router-dom";


// Define the Customer type
interface Project {
  id: string;
  name: string;
  paid: number;
  balance: number;
}

interface ShopItem {
  id: string;
  name: string;
  quantity: number;
  cost_price: number;
  selling_price: number;
  total_price: number;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  address?: string;
  project?: Project;
  shop_item?: ShopItem;
}

const CustomerProfile = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const data = await fetchData();
        const customers = data?.results?.all_customers || [];

        // Find customer by ID
        const foundCustomer = customers.find(
          (cust: { id: { toString: () => string | undefined; }; }) => cust.id.toString() === id
        );

        if (foundCustomer) {
          setCustomer(foundCustomer);
        } else {
          setError("Customer not found.");
        }
      } catch (err) {
        console.error("Error fetching customer:", err);
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

  return (
    <div className="container mx-auto mt-10 p-6 max-w-3xl bg-white shadow-lg rounded-2xl">
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex justify-center items-center text-gray-500">
          <FaUser size={40} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-[#0178A3] uppercase">{customer.name}</h2>
          <p className="text-gray-500">{customer.email}</p>
          <p className="text-gray-500">{customer.phone_number}</p>
          <p className="text-gray-500">Address: {customer.address || "N/A"}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700">Project Details</h3>
        {customer.project ? (
          <div className="mt-2 p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">{customer.project.name}</p>
            <p>Paid: ${customer.project.paid}</p>
            <p>Balance: ${customer.project.balance}</p>
          </div>
        ) : (
          <p className="text-gray-500">No projects available.</p>
        )}
      </div>

      {/* Shop Items */}
      <div className="mt-6 border-t pt-6">
        <h3 className="text-xl font-semibold text-gray-700">Shop Items</h3>
        {customer.shop_item ? (
          <div className="mt-2 p-4 bg-gray-100 rounded-lg">
            <p className="font-bold">{customer.shop_item.name || "Unnamed Item"}</p>
            <p>Quantity: {customer.shop_item.quantity}</p>
            <p>Cost Price: ${customer.shop_item.cost_price}</p>
            <p>Selling Price: ${customer.shop_item.selling_price}</p>
            <p>Total Price: ${customer.shop_item.total_price}</p>
          </div>
        ) : (
          <p className="text-gray-500">No shop items available.</p>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link to="/dashboard/customers" className="bg-[#0178A3] text-white px-4 py-2 rounded-lg">
          Back to Customers
        </Link>
      </div>
    </div>
  );
};

export default CustomerProfile;
