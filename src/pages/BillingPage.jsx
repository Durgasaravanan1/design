// import React from "react";
// import { Star, CheckCircle, TrendingUp, RefreshCw, DownloadCloud } from "lucide-react";
// import { INVOICES } from "../data/mockData";

// function Card({ children, className = "" }) {
//   return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
// }

// function UsageBar({ pct, color }) {
//   return (
//     <div className="w-full h-1.5 rounded-full bg-violet-50">
//       <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
//     </div>
//   );
// }

// function BillingPage() {
//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">Billing & Subscriptions</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Manage your plan, payments, and monthly invoices.</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
//         <Card className="lg:col-span-2 p-6">
//           <div className="flex items-center gap-3 mb-5">
//             <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-50">
//               <Star size={18} className="text-amber-500" />
//             </div>
//             <div>
//               <p className="font-bold font-outfit">WYNSYNC Pro</p>
//               <p className="text-xs text-gray-400">Annual subscription · Renews Jun 25, 2026</p>
//             </div>
//             <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Paid ✓</span>
//           </div>
//           <div className="space-y-4">
//             {[
//               { label: "Monthly API Calls", pct: 74, color: "#6c4cf1", used: "74,000", total: "100,000" },
//               { label: "Storage", pct: 41, color: "#06b6d4", used: "41 GB", total: "100 GB" },
//               { label: "AI Credits", pct: 58, color: "#f59e0b", used: "5,800", total: "10,000" },
//             ].map((r) => (
//               <div key={r.label}>
//                 <div className="flex justify-between text-sm mb-1.5">
//                   <span className="font-medium">{r.label}</span>
//                   <span className="text-gray-400 text-xs">{r.used} / {r.total}</span>
//                 </div>
//                 <UsageBar pct={r.pct} color={r.color} />
//               </div>
//             ))}
//           </div>
//         </Card>

//         <Card className="p-6 flex flex-col gap-3">
//           <p className="font-semibold text-sm mb-1 font-outfit">Active Add-ons</p>
//           {["Advanced Analytics", "Team Collaboration", "Priority Support"].map((addon) => (
//             <div key={addon} className="flex items-center gap-2 text-sm">
//               <CheckCircle size={14} className="text-emerald-500 shrink-0" />
//               <span>{addon}</span>
//             </div>
//           ))}
//           <div className="mt-auto space-y-2 pt-2">
//             <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-semibold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
//               <TrendingUp size={14} /> Upgrade Plan
//             </button>
//             <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-medium text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors">
//               <RefreshCw size={14} /> Manage Subscription
//             </button>
//           </div>
//         </Card>
//       </div>

//       <Card className="overflow-hidden">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-violet-50">
//           <div>
//             <p className="font-bold text-sm font-outfit">Invoice History</p>
//             <p className="text-xs text-gray-400 mt-0.5">All your monthly invoices in one place</p>
//           </div>
//           <button className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-colors">
//             <DownloadCloud size={13} /> Export All
//           </button>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="border-b border-violet-50">
//                 <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400">Invoice ID</th>
//                 <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Plan</th>
//                 <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Issue Date</th>
//                 <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Due Date</th>
//                 <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Amount</th>
//                 <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Status</th>
//                 <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {INVOICES.map((inv, i) => (
//                 <tr key={inv.id} className={`border-b border-violet-50 hover:bg-violet-50/40 transition-colors ${i === INVOICES.length - 1 ? "border-0" : ""}`}>
//                   <td className="px-6 py-3.5">
//                     <span className="font-mono text-xs font-semibold text-violet-600">{inv.id}</span>
//                   </td>
//                   <td className="px-4 py-3.5 text-xs text-gray-600">{inv.plan}</td>
//                   <td className="px-4 py-3.5 text-xs text-gray-400">{inv.date}</td>
//                   <td className="px-4 py-3.5 text-xs text-gray-400">{inv.due}</td>
//                   <td className="px-4 py-3.5 font-semibold font-outfit">{inv.amount}</td>
//                   <td className="px-4 py-3.5">
//                     <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
//                       <CheckCircle size={9} /> {inv.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-3.5 text-right">
//                     <button className="inline-flex items-center gap-1 text-xs text-violet-600 hover:text-violet-800 font-medium transition-colors">
//                       <DownloadCloud size={13} /> PDF
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </Card>
//     </div>
//   );
// }

// export default BillingPage;



import React from "react";
import * as Icons from "lucide-react";
import { INVOICES } from "../data/mockData";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
}

function UsageBar({ pct, color }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-violet-50">
      <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function BillingPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">Billing & Subscriptions</h1>
        <p className="text-sm text-gray-400 mt-0.5">Manage your plan, payments, and monthly invoices.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-amber-50">
              <Icons.Star size={18} className="text-amber-500" />
            </div>
            <div>
              <p className="font-bold font-outfit">WYNSYNC Pro</p>
              <p className="text-xs text-gray-400">Annual subscription · Renews Jun 25, 2026</p>
            </div>
            <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Paid ✓</span>
          </div>
          <div className="space-y-4">
            {[
              { label: "Monthly API Calls", pct: 74, color: "#6c4cf1", used: "74,000", total: "100,000" },
              { label: "Storage", pct: 41, color: "#06b6d4", used: "41 GB", total: "100 GB" },
              { label: "AI Credits", pct: 58, color: "#f59e0b", used: "5,800", total: "10,000" },
            ].map((r) => (
              <div key={r.label}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium">{r.label}</span>
                  <span className="text-gray-400 text-xs">
                    {r.used} / {r.total}
                  </span>
                </div>
                <UsageBar pct={r.pct} color={r.color} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 flex flex-col gap-3">
          <p className="font-semibold text-sm mb-1 font-outfit">Active Add-ons</p>
          {["Advanced Analytics", "Team Collaboration", "Priority Support"].map((addon) => (
            <div key={addon} className="flex items-center gap-2 text-sm">
              <Icons.CheckCircle size={14} className="text-emerald-500 shrink-0" />
              <span>{addon}</span>
            </div>
          ))}
          <div className="mt-auto space-y-2 pt-2">
            <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-semibold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
              <Icons.TrendingUp size={14} /> Upgrade Plan
            </button>
            <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-medium text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors">
              <Icons.RefreshCw size={14} /> Manage Subscription
            </button>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-violet-50">
          <div>
            <p className="font-bold text-sm font-outfit">Invoice History</p>
            <p className="text-xs text-gray-400 mt-0.5">All your monthly invoices in one place</p>
          </div>
          <button className="flex items-center gap-1.5 text-xs font-semibold text-violet-600 bg-violet-50 hover:bg-violet-100 px-3 py-1.5 rounded-lg transition-colors">
            <Icons.DownloadCloud size={13} /> Export All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-violet-50">
                <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400">Invoice ID</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Plan</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Issue Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Due Date</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Amount</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Status</th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-gray-400">Action</th>
               </tr>
            </thead>
            <tbody>
              {INVOICES.map((inv, i) => (
                <tr key={inv.id} className={`border-b border-violet-50 hover:bg-violet-50/40 transition-colors ${i === INVOICES.length - 1 ? "border-0" : ""}`}>
                  <td className="px-6 py-3.5">
                    <span className="font-mono text-xs font-semibold text-violet-600">{inv.id}</span>
                   </td>
                  <td className="px-4 py-3.5 text-xs text-gray-600">{inv.plan}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">{inv.date}</td>
                  <td className="px-4 py-3.5 text-xs text-gray-400">{inv.due}</td>
                  <td className="px-4 py-3.5 font-semibold font-outfit">{inv.amount}</td>
                  <td className="px-4 py-3.5">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
                      <Icons.CheckCircle size={9} /> {inv.status}
                    </span>
                   </td>
                  <td className="px-6 py-3.5 text-right">
                    <button className="inline-flex items-center gap-1 text-xs text-violet-600 hover:text-violet-800 font-medium transition-colors">
                      <Icons.DownloadCloud size={13} /> PDF
                    </button>
                   </td>
                 </tr>
              ))}
            </tbody>
           </table>
        </div>
      </Card>
    </div>
  );
}

export default BillingPage;