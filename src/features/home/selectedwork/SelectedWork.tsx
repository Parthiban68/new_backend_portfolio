import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function SelectedWork() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-gray-950 text-slate-800 p-5 sm:p-8 overflow-hidden">
      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-[1440px] mx-auto flex justify-end"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-full"
        >
          <div className="flex flex-col items-center ">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
                Selected works
              </span>
            </div>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-normal whitespace-normal sm:whitespace-nowrap text-gray-950 dark:text-white leading-[1.05] tracking-tight">
              Things I've built.
            </h2>
            <div className="w-full max-w-[900px] mx-auto px-2">
              <p className="text-lg sm:text-2xl md:text-2xl text-[#777777] dark:text-gray-400 font-light mt-2">
                From production systems to independent experiments — a selection
                of work shaped by product thinking, engineering, and attention
                to detail.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Intro & CFO360 */}
        <div className="w-full lg:w-full flex flex-col xl:flex-row px-2 sm:px-6 xl:px-10 pb-10">
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full xl:w-[35%] flex flex-col pt-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xl dark:text-gray-300">01</span>
              <div className="w-px h-4 bg-slate-300 dark:bg-gray-600"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase dark:text-gray-400">
                Professional
              </span>
            </div>

            <h2 className="text-4xl lg:text-[42px] text-slate-900 dark:text-white mb-6 tracking-tight">
              CFO360.ai
            </h2>
            <p className="text-[14px] leading-relaxed text-slate-600 dark:text-gray-400 mb-10 pr-8">
              A multi-tenant accounting and finance platform built for scalable
              business operations.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-slate-800 dark:text-gray-200 mb-4">
              <svg
                className="w-4 h-4 text-slate-400 dark:text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
              Full-Stack Engineer
            </div>

            <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-slate-500 dark:text-gray-500 mb-16">
              NESTJS <span className="mx-2">·</span> POSTGRESQL{" "}
              <span className="mx-2">·</span> SEQUELIZE{" "}
              <span className="mx-2">·</span> REACT
            </div>

            <div className="mt-auto">
              <a
                href="#cfo360"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
              >
                Explore Project
                <svg
                  className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 19L20 5m0 0H9m11 0v11"
                  ></path>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Dashboard Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="w-full xl:w-[65%] relative"
          >
            {/* Main Dashboard Panel */}
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 w-full overflow-hidden flex text-[10px]">
              {/* Sidebar */}
              <div className="w-40 border-r border-slate-100 bg-slate-50/50 p-4 hidden md:block">
                <div className="flex items-center gap-2 mb-8 text-indigo-600 font-bold text-xs">
                  <div className="w-5 h-5 bg-indigo-600 rounded flex items-center justify-center text-white ">
                    C
                  </div>
                  CFO360.ai
                </div>
                <div className="space-y-1">
                  {[
                    "Dashboard",
                    "Sales",
                    "Purchases",
                    "Accounting",
                    "Reports",
                    "Settings",
                  ].map((item, i) => (
                    <div
                      key={item}
                      className={`flex items-center gap-3 p-2 rounded-md ${i === 0 ? "bg-indigo-50 text-indigo-600 font-medium" : "text-slate-500 hover:bg-slate-100"}`}
                    >
                      <div
                        className={`w-3 h-3 rounded-sm border ${i === 0 ? "border-indigo-600" : "border-slate-400"}`}
                      ></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Good morning, Admin
                    </h3>
                    <p className="text-slate-400 text-[9px]">
                      Here's what's happening with your business today.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-500">
                      Acme Corp (Primary){" "}
                      <span className="ml-1 text-[8px]">▼</span>
                    </span>
                    <div className="w-6 h-6 bg-slate-800 rounded-full"></div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {[
                    {
                      label: "Total Revenue",
                      value: "₹ 24.8M",
                      trend: "+12.4%",
                      color: "text-emerald-500",
                    },
                    {
                      label: "Total Expenses",
                      value: "₹ 8.4M",
                      trend: "+9.2%",
                      color: "text-emerald-500",
                    },
                    {
                      label: "Net Profit",
                      value: "₹ 16.4M",
                      trend: "+14.6%",
                      color: "text-emerald-500",
                    },
                    {
                      label: "Cash Balance",
                      value: "₹ 5.7M",
                      trend: "+3.2%",
                      color: "text-emerald-500",
                    },
                  ].map((m, i) => (
                    <div
                      key={i}
                      className="p-3 border border-slate-100 rounded-lg shadow-sm"
                    >
                      <div className="text-slate-400 mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-slate-800 mb-1">
                        {m.value}
                      </div>
                      <div className={`${m.color} text-[8px]`}>
                        {m.trend}{" "}
                        <span className="text-slate-300">from last month</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Line Chart */}
                  <div className="col-span-2 border border-slate-100 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between mb-4">
                      <span className="font-semibold text-slate-700">
                        Cash Flow Overview
                      </span>
                      <span className="text-slate-400">Last 6 months ▼</span>
                    </div>
                    <div className="h-24 relative w-full flex items-end">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 200 60"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,50 C20,40 40,60 60,30 C80,0 100,40 120,20 C140,0 160,30 180,10 C190,0 200,20 200,20"
                          fill="none"
                          stroke="#4F46E5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0,50 C20,40 40,60 60,30 C80,0 100,40 120,20 C140,0 160,30 180,10 C190,0 200,20 200,20 L200,60 L0,60 Z"
                          fill="url(#gradient)"
                          opacity="0.1"
                        />
                        <defs>
                          <linearGradient
                            id="gradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#4F46E5" />
                            <stop offset="100%" stopColor="transparent" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  {/* Donut Chart */}
                  <div className="col-span-1 border border-slate-100 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-slate-700">
                        Expense Breakdown
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 relative">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#E2E8F0"
                            strokeWidth="6"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#4F46E5"
                            strokeWidth="6"
                            strokeDasharray="60, 100"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#93C5FD"
                            strokeWidth="6"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-60"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 text-[8px] text-slate-500 w-full">
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-600"></div>{" "}
                            Operations
                          </span>
                          <span>45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>{" "}
                            Marketing
                          </span>
                          <span>30%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>{" "}
                            Others
                          </span>
                          <span>25%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Panels */}
            <div className="absolute -bottom-12 -left-12 bg-white/95 backdrop-blur rounded-xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-slate-100 p-4 w-72 z-10 hidden md:block">
              <h4 className="text-[10px] font-bold text-slate-800 mb-3">
                Recent Invoices
              </h4>
              <div className="space-y-3">
                {[
                  {
                    id: "#INV-2046",
                    name: "Acme Corp",
                    amt: "₹ 2,45,000",
                    status: "Paid",
                    color: "text-emerald-600 bg-emerald-50",
                  },
                  {
                    id: "#INV-2047",
                    name: "Globex Ltd.",
                    amt: "₹ 1,15,000",
                    status: "Pending",
                    color: "text-amber-600 bg-amber-50",
                  },
                  {
                    id: "#INV-2048",
                    name: "Soylent Corp",
                    amt: "₹ 75,000",
                    status: "Paid",
                    color: "text-emerald-600 bg-emerald-50",
                  },
                ].map((inv, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[9px]"
                  >
                    <div className="flex gap-3 w-1/2">
                      <span className="text-slate-400">{inv.id}</span>
                      <span className="font-medium text-slate-700 truncate">
                        {inv.name}
                      </span>
                    </div>
                    <div className="flex justify-end gap-3 w-1/2 items-center">
                      <span className="font-semibold text-slate-800">
                        {inv.amt}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[8px] font-bold ${inv.color}`}
                      >
                        {inv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[8px] text-indigo-600 font-medium">
                View all invoices →
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/95 backdrop-blur rounded-xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] border border-slate-100 p-4 w-56 z-10 hidden lg:block">
              <div className="flex justify-between items-center mb-4 text-[10px]">
                <h4 className="font-bold text-slate-800">Top Customers</h4>
                <span className="text-slate-400">This month ▼</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: "Acme Corp", amt: "₹ 6,20,000" },
                  { name: "Globex Ltd.", amt: "₹ 4,15,000" },
                  { name: "Soylent Corp", amt: "₹ 3,10,000" },
                ].map((cust, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-[9px]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-[8px] font-bold">
                        {cust.name[0]}
                      </div>
                      <span className="font-medium text-slate-700">
                        {cust.name}
                      </span>
                    </div>
                    <span className="font-semibold text-slate-800">
                      {cust.amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Metadata Badges */}
            <div className="absolute -bottom-20 right-0 hidden md:flex gap-6 text-[11px] font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
                <span>
                  Multi-tenant
                  <br />
                  Architecture
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>
                  Accounting
                  <br />
                  Workflows
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <span>
                  Enterprise
                  <br />
                  SaaS Platform
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider / Spacer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-slate-200 dark:bg-gray-700 w-full my-20"
        ></motion.div>

        {/* Bottom Section: TheBusStand & TaskFlow */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#fcfcfd] dark:bg-gray-950 border border-slate-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-12">
          {/* Project 02: TheBusStand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#fcfcfd] dark:bg-neutral-900 p-8 lg:p-12 flex flex-col xl:flex-row gap-8"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg dark:text-gray-300">02</span>
                <div className="w-px h-3 bg-slate-300 dark:bg-gray-600"></div>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase dark:text-gray-400">
                  Professional
                </span>
              </div>
              <h2 className="text-3xl text-slate-900 dark:text-white mb-4 tracking-tight">
                TheBusStand
              </h2>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-gray-400 mb-8 max-w-[260px]">
                A bus booking platform connecting users with real-time inventory
                and seamless booking workflows.
              </p>
              <div className="text-[9px] font-medium tracking-[0.15em] uppercase text-slate-500 dark:text-gray-500 mb-10 leading-loose">
                REACT <span className="mx-1">·</span> NODE.JS
                <br />
                EXPRESS <span className="mx-1">·</span> REST APIS
              </div>
              <div className="mt-auto">
                <a
                  href="https://thebusstand.com/"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  Explore Project
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 19L20 5m0 0H9m11 0v11"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* TheBusStand Dark UI Mockup */}
            <div className="flex-[1.2] bg-[#0B1221] rounded-xl relative overflow-hidden h-[320px] shadow-lg border border-slate-800">
              {/* Map Background Lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 300 300"
              >
                <path
                  d="M-50,50 Q100,100 200,-50 M-50,150 Q150,200 350,100 M50,350 Q150,150 350,250"
                  fill="none"
                  stroke="#60A5FA"
                  strokeWidth="0.5"
                />
                <path
                  d="M0,0 L300,300 M300,0 L0,300 M150,0 L150,300 M0,150 L300,150"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.1"
                  strokeDasharray="2 4"
                />
              </svg>

              {/* Route line */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 300 300"
              >
                <path
                  d="M40,100 Q150,180 220,90"
                  fill="none"
                  stroke="#2DD4BF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="40" cy="100" r="4" fill="#2DD4BF" />
                <circle cx="220" cy="90" r="4" fill="#2DD4BF" />
                <circle cx="140" cy="148" r="3" fill="#ffffff" />
              </svg>

              {/* Map Labels */}
              <div className="absolute top-20 left-6 text-white text-[8px] bg-slate-800/80 px-2 py-1 rounded backdrop-blur border border-slate-700">
                Bangalore <span className="text-slate-400">BLR</span>
              </div>
              <div className="absolute top-16 right-16 text-white text-[8px] bg-slate-800/80 px-2 py-1 rounded backdrop-blur border border-slate-700">
                Chennai <span className="text-slate-400">MAA</span>
              </div>

              {/* Search Widget */}
              <div className="absolute bottom-4 left-4 bg-[#111827]/90 backdrop-blur border border-slate-700/50 p-3 rounded-lg w-36 text-[8px]">
                <div className="text-slate-400 mb-2 font-medium">
                  Search Buses
                </div>
                <div className="bg-[#1F2937] p-1.5 rounded mb-1 text-slate-300 flex justify-between">
                  <span>From</span> <span>Bangalore</span>
                </div>
                <div className="bg-[#1F2937] p-1.5 rounded mb-1 text-slate-300 flex justify-between">
                  <span>To</span> <span>Chennai</span>
                </div>
                <div className="bg-[#1F2937] p-1.5 rounded mb-2 text-slate-300 flex justify-between">
                  <span>Date</span> <span>24 May 2024</span>
                </div>
              </div>

              {/* Seat Selector UI */}
              <div className="absolute bottom-4 right-4 bg-[#111827]/90 backdrop-blur border border-slate-700/50 p-3 rounded-lg w-[130px]">
                <div className="text-slate-400 mb-2 font-medium text-[8px]">
                  Select Seat
                </div>
                <div className="grid grid-cols-4 gap-1 mb-3">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-sm ${i === 2 || i === 7 ? "bg-slate-600" : i === 12 ? "bg-teal-500" : "bg-[#374151]"}`}
                    ></div>
                  ))}
                </div>
                <div className="flex gap-2 text-[6px] text-slate-400 mb-3 justify-center">
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-sm"></div>{" "}
                    Selected
                  </span>
                  <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-600 rounded-sm"></div>{" "}
                    Booked
                  </span>
                </div>
                <button className="w-full bg-indigo-600 text-white text-[8px] py-1.5 rounded font-medium">
                  Proceed to Pay
                </button>
              </div>

              {/* Bus Image Representation */}
              <div className="absolute bottom-0 left-6 w-32 h-24 rounded-t-lg overflow-hidden border-t border-l border-r border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=300&q=80"
                  alt="Luxury Bus Front"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1221] via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Project 03: TaskFlow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#fcfcfd] dark:bg-neutral-900 p-8 border-l dark:border-gray-700 lg:p-12 flex flex-col xl:flex-row gap-8"
          >
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg dark:text-gray-300">03</span>
                <div className="w-px h-3 bg-slate-300 dark:bg-gray-600"></div>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase dark:text-gray-400">
                  Personal
                </span>
              </div>
              <h2 className="text-3xl text-slate-900 dark:text-white mb-4 tracking-tight">
                TaskFlow
              </h2>
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-gray-400 mb-8 max-w-[260px]">
                A personal productivity app designed to help teams plan, track,
                and ship work with clarity.
              </p>
              <div className="text-[9px] font-medium tracking-[0.15em] uppercase text-slate-500 dark:text-gray-500 mb-10 leading-loose">
                NEXT.JS <span className="mx-2">·</span> TYPESCRIPT{" "}
                <span className="mx-2">·</span> TAILWIND
              </div>
              <div className="mt-auto">
                <a
                  href="#taskflow"
                  className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors group"
                >
                  Explore Project
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 19L20 5m0 0H9m11 0v11"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* TaskFlow Light UI Mockup */}
            <div className="flex-[1.2] bg-white rounded-xl relative overflow-hidden h-[320px] shadow-[0_10px_40px_rgb(0,0,0,0.06)] border border-slate-100 flex p-3">
              {/* Sidebar */}
              <div className="w-16 border-r border-slate-50 pr-2">
                <div className="text-[8px] font-bold text-indigo-600 mb-4 flex items-center gap-1">
                  <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div> TF
                </div>
                <div className="space-y-2 text-[7px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-800 font-medium bg-slate-50 p-1 rounded">
                    <div className="w-2 h-2 rounded bg-slate-300"></div> Home
                  </div>
                  <div className="flex items-center gap-1.5 p-1">
                    <div className="w-2 h-2 rounded bg-slate-200"></div> My
                    Tasks
                  </div>
                  <div className="flex items-center gap-1.5 p-1">
                    <div className="w-2 h-2 rounded bg-slate-200"></div>{" "}
                    Projects
                  </div>
                  <div className="flex items-center gap-1.5 p-1">
                    <div className="w-2 h-2 rounded bg-slate-200"></div>{" "}
                    Calendar
                  </div>
                </div>
              </div>

              {/* Kanban Board */}
              <div className="flex-1 pl-3 bg-slate-50/30 rounded-r-lg">
                <div className="flex gap-4 items-center mb-4 mt-1 border-b border-slate-100 pb-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                  <div className="w-4 h-4 rounded-full bg-slate-200 -ml-2"></div>
                  <div className="text-[8px] text-slate-400 ml-auto">
                    + Share
                  </div>
                </div>

                <div className="flex gap-3 h-full">
                  {/* Column 1: To Do */}
                  <div className="w-1/3">
                    <div className="text-[7px] font-bold text-slate-500 mb-2 uppercase flex justify-between">
                      To Do <span>3</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                        <div className="w-3/4 h-1.5 bg-slate-200 rounded mb-2"></div>
                        <div className="w-1/2 h-1.5 bg-slate-100 rounded mb-3"></div>
                        <div className="flex justify-between items-center">
                          <div className="w-3 h-3 rounded-full bg-emerald-200"></div>
                          <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                        <div className="w-full h-1.5 bg-slate-200 rounded mb-2"></div>
                        <div className="w-1/3 h-1.5 bg-slate-100 rounded mb-3"></div>
                        <div className="flex justify-between items-center">
                          <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2: In Progress */}
                  <div className="w-1/3">
                    <div className="text-[7px] font-bold text-slate-500 mb-2 uppercase flex justify-between">
                      In Progress <span>2</span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                        <div className="w-5/6 h-1.5 bg-slate-200 rounded mb-2"></div>
                        <div className="w-2/3 h-1.5 bg-slate-100 rounded mb-3"></div>
                        <div className="flex justify-between items-center">
                          <div className="flex">
                            <div className="w-3 h-3 rounded-full bg-indigo-200"></div>
                            <div className="w-3 h-3 rounded-full bg-purple-200 -ml-1"></div>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 3: Done */}
                  <div className="w-1/3">
                    <div className="text-[7px] font-bold text-slate-500 mb-2 uppercase flex justify-between">
                      Done <span>4</span>
                    </div>
                    <div className="space-y-2 opacity-60">
                      <div className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                        <div className="w-full h-1.5 bg-slate-200 rounded mb-2 line-through decoration-slate-400"></div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        </div>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-100 shadow-sm">
                        <div className="w-3/4 h-1.5 bg-slate-200 rounded mb-2 line-through decoration-slate-400"></div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                          <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center text-center pb-12"
        >
          <svg
            className="w-4 h-4 text-emerald-500 mb-4"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
          <h3 className="text-[14px] font-semibold text-slate-900 dark:text-white mb-4 tracking-wide">
            See everything I've built.
          </h3>
          <NavLink
            to={"/projects"}
            className="inline-flex items-center gap-1 text-[11px] font-bold tracking-[0.15em] uppercase text-slate-900 dark:text-white border-b-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-600 dark:hover:border-indigo-400 pb-1 transition-colors group"
          >
            View All Work
            <svg
              className="w-3 h-3 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 19L20 5m0 0H9m11 0v11"
              ></path>
            </svg>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}
