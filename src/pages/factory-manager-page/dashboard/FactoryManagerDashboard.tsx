/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PieChartComponent from "./PieChart";
import BarChartComponent from "./Barchart";
import DashboardCard from "./DashboardCard";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import SkeletonLoader from "./SkeletonLoader";

const fetchFactoryData = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    throw new Error("No access token found. Please log in again.");
  }
  const { data } = await axios.get(
    "https://backend.kidsdesigncompany.com/api/factory-manager-dashboard/",
    {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    }
  );
  return data;
};

const FactoryManagerDashboard = () => {
  const [openSection, setOpenSection] = useState<'salesProjectMetrics' | 'operationalAndCustomerMetrics'>('salesProjectMetrics');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fetch all data, including chart data
  const { data, isLoading, error } = useQuery({
    queryKey: ["factoryData"],
    queryFn: fetchFactoryData,
    retry: 3,
    retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 3000),
    staleTime: 5 * 60 * 1000,
  });

  // Sidebar state check
  React.useEffect(() => {
    const checkSidebarState = () => {
      const sidebar = document.querySelector('aside');
      if (sidebar) {
        const sidebarWidth = sidebar.offsetWidth;
        setIsSidebarOpen(sidebarWidth > 100);
      }
    };

    checkSidebarState();
    window.addEventListener('resize', checkSidebarState);
    const interval = setInterval(checkSidebarState, 500);

    return () => {
      window.removeEventListener('resize', checkSidebarState);
      clearInterval(interval);
    };
  }, []);

  // Process data into state
  const [salesProjectMetrics, setSalesProjectMetrics] = useState<Record<string, number>>({});
  const [operationalAndCustomerMetrics, setOperationalAndCustomerMetrics] = useState<Record<string, number>>({});
  const [expenseBreakdown, setExpenseBreakdown] = useState<{ name: string; value: number }[]>([]);
  const [incomeData, setIncomeData] = useState<{ name: string; TotalIncome: number; Project: number; Shop: number }[]>([]);
  const [expenseData, setExpenseData] = useState<{ name: string; TotalExpenses: number; Project: number; Shop: number; Others: number }[]>([]);
  const [profitData, setProfitData] = useState<{ name: string; Profit: number }[]>([]);

  React.useEffect(() => {
    if (data) {
      // Sales and Project Metrics
      if (data?.financial_health && data?.yearly_data) {
        setSalesProjectMetrics({
          Sales_Count: data.financial_health.sales_count_this_month || 0,
          Project_Sales: data.financial_health.total_project_sales_this_month || 0,
          Non_Project_Sales: data.financial_health.total_non_project_sales_this_month || 0,
          Shop_Items_Sold: data.financial_health.total_shop_items_sold_this_month || 0,
          Shop_Profit: data.financial_health.total_shop_profit_this_month || 0,
          Project_Count: data.financial_health.project_count_this_month || 0,
          Project_Amount: data.financial_health.total_project_amount_this_month || 0,
          Total_Income_Year: data.yearly_data.total_income_year || 0,
          Total_Expenses_Year: data.yearly_data.total_expenses_year || 0,
          Profit_Year: data.yearly_data.profit_year || 0,
        });
      }

      // Operational and Customer Metrics
      if (data?.customers && data?.paid && data?.financial_health && data?.workers) {
        setOperationalAndCustomerMetrics({
          All_Customers: data.customers.all_customers_count || 0,
          Active_Customers: data.customers.active_customers_count || 0,
          Owing_Customers: data.customers.owing_customers_count || 0,
          Total_Paid: data.paid.total_paid || 0,
          Total_Income_Month: data.financial_health.total_income_this_month || 0,
          Total_Expenses_Month: data.financial_health.total_expenses_month || 0,
          Profit_Month: data.financial_health.profit_month || 0,
          Salary_Workers: data.workers.salary_workers_count || 0,
          Active_Salary_Workers: data.workers.active_salary_workers_count || 0,
          Salary_Workers_Pay: data.workers.total_salary_workers_monthly_pay || 0,
          All_Contractors: data.workers.all_contractors_count || 0,
          Active_Contractors: data.workers.all_active_contractors_count || 0,
          Contractors_Monthly_Pay: data.paid.total_contractors_monthly_pay || 0,
          Contractors_Weekly_Pay: data.paid.total_contractors_weekly_pay || 0,
        });
      }

      // Expense Breakdown for PieChart
      if (data?.expense_category_breakdown) {
        setExpenseBreakdown(
          data.expense_category_breakdown.map((item: { category: string; total: number }) => ({
            name: item.category,
            value: item.total,
          }))
        );
      }

      // Bar Chart Data
      if (data?.monthly_income_trend) {
        setIncomeData(
          data.monthly_income_trend.map((item: any) => ({
            name: item.month,
            TotalIncome: item.total_income ?? 0,
            Project: item.type_breakdown?.project ?? 0,
            Shop: item.type_breakdown?.shop ?? 0,
          }))
        );
      }

      if (data?.monthly_expense_trend) {
        setExpenseData(
          data.monthly_expense_trend.map((item: any) => ({
            name: item.month,
            TotalExpenses: item.total_expenses ?? 0,
            Project: item.type_breakdown?.project ?? 0,
            Shop: item.type_breakdown?.shop ?? 0,
            Others: item.type_breakdown?.others ?? 0,
          }))
        );
      }

      if (data?.monthly_profit_trend) {
        setProfitData(
          data.monthly_profit_trend.map((item: any) => ({
            name: item.month,
            Profit: item.profit ?? 0,
          }))
        );
      }
    }
  }, [data]);

  if (isLoading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">
        {error.message || "Error loading data. Please try logging in again."}
      </div>
    );
  }

  const salesProjectMetricsCards = Object.entries(salesProjectMetrics).map(([key, value]) => ({
    key: `salesProjectMetrics-${key}`,
    label: key.replace(/_/g, ' '),
    value,
  }));
  const operationalAndCustomerMetricsCards = Object.entries(operationalAndCustomerMetrics).map(([key, value]) => ({
    key: `operationalAndCustomerMetrics-${key}`,
    label: key.replace(/_/g, ' '),
    value,
  }));

  const handleSectionClick = (section: typeof openSection) => {
    setOpenSection(section);
  };

  return (
    <div className="relative z-10 sm:p-3 lg:p-4 w-full min-w-0 mb-20">
      <div className="grid grid-cols-2 lg:flex gap-2 mb-3 px-0 py-1 w-full min-w-0">
        <button
          className={`w-full flex-1 flex-shrink min-w-0 flex items-center justify-between px-2 py-6 rounded-lg shadow bg-blue-50/60 hover:bg-blue-100 transition font-semibold text-blue-700 text-[11px] sm:text-xs ${openSection === 'salesProjectMetrics' ? 'ring-2 ring-blue-400' : ''}`}
          onClick={() => handleSectionClick('salesProjectMetrics')}
        >
          <span className="truncate text-left flex-1">Sales & Project Metrics</span>
          <span className="flex items-center justify-end ml-2">
            {openSection === 'salesProjectMetrics' ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </span>
        </button>
        <button
          className={`w-full flex-1 flex-shrink min-w-0 flex items-center justify-between px-2 py-6 rounded-lg shadow bg-teal-50/60 hover:bg-teal-100 transition font-semibold text-teal-700 text-[11px] sm:text-xs ${openSection === 'operationalAndCustomerMetrics' ? 'ring-2 ring-teal-400' : ''}`}
          onClick={() => handleSectionClick('operationalAndCustomerMetrics')}
        >
          <span className="truncate text-left flex-1">Operational & Customer Metrics</span>
          <span className="flex items-center justify-end ml-2">
            {openSection === 'operationalAndCustomerMetrics' ? <MdExpandLess size={18} /> : <MdExpandMore size={18} />}
          </span>
        </button>
      </div>

      {openSection === 'salesProjectMetrics' && (
        <section className="mb-6 sm:mb-8 bg-blue-50/60 rounded-2xl shadow p-1 sm:p-4 lg:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-3 lg:gap-4">
            {salesProjectMetricsCards.map(card => (
              <DashboardCard key={card.key} label={card.label} value={card.value} />
            ))}
          </div>
        </section>
      )}

      {openSection === 'operationalAndCustomerMetrics' && (
        <section className="mb-6 sm:mb-8 bg-teal-50/60 rounded-2xl shadow p-1 sm:p-4 lg:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 sm:gap-3 lg:gap-4">
            {operationalAndCustomerMetricsCards.map(card => (
              <DashboardCard key={card.key} label={card.label} value={card.value} />
            ))}
          </div>
        </section>
      )}

      <div className="p-2 sm:p-4">
        <div className="w-full min-h-[220px] sm:min-h-[350px] bg-white rounded-lg shadow p-2 sm:p-4 overflow-x-auto mb-4">
          <PieChartComponent data={expenseBreakdown} />
        </div>
        <div className="w-full min-h-[220px] sm:min-h-[350px] bg-white rounded-lg shadow p-2 sm:p-4 overflow-x-auto">
          <BarChartComponent incomeData={incomeData} expenseData={expenseData} profitData={profitData} />
        </div>
      </div>
    </div>
  );
};

export default FactoryManagerDashboard;