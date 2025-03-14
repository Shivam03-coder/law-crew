"use client";
import React, { useState } from "react";

import TaxPaymnetTrend from "./tax-payment-trend";
import TaxCompilanceChart from "./tax-compilance-chart";
import TaxPaymentSchedule from "./tax-payment-schedule";
import TaxationNotice from "./taxation-notice";
import TaxationCards from "./taxation-cards";
import TaxPaymentTable from "./tax-payment-table";

function App() {
  const upcomingPayments = [
    {
      type: "GST",
      dueDate: "March 31, 2024",
      amount: 12500,
      status: "Pending",
    },
    {
      type: "Income Tax",
      dueDate: "April 15, 2024",
      amount: 25000,
      status: "Upcoming",
    },
    {
      type: "Professional Tax",
      dueDate: "April 30, 2024",
      amount: 2000,
      status: "Upcoming",
    },
  ];

  return (
    <div className="min-h-screen py-6 bg-gray-50">
     <div className="mx-auto p-3 w-[98%]">
        <TaxationCards />
        <TaxationNotice />
        <TaxPaymnetTrend />
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TaxCompilanceChart />
          <TaxPaymentSchedule />
        </div>
        <TaxPaymentTable />
      </div>
    </div>
  );
}

export default App;
