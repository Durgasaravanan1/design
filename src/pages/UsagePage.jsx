// import React, { useState } from "react";
// import {
//   Wifi, Sparkles, HardDrive, Users, Zap, FileText, AlertTriangle, Shield, CheckCircle, Clock,
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from "recharts";
// import { usageHistory, toolUsage, alerts } from "../data/mockData";

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

// function ChartTip({ active, payload, label }) {
//   if (!active || !payload?.length) return null;
//   return (
//     <div className="bg-white rounded-xl shadow-lg border border-violet-100 p-3 text-xs">
//       <p className="text-gray-400 mb-1">{label}</p>
//       {payload.map((p) => (
//         <p key={p.name} style={{ color: p.color }} className="font-semibold">
//           {p.name}: {p.value > 999 ? `${(p.value / 1000).toFixed(1)}k` : p.value}
//         </p>
//       ))}
//     </div>
//   );
// }

// function UsagePage() {
//   const [activeTab, setActiveTab] = useState("overview");

//   const resources = [
//     { label: "API Calls", used: 74000, total: 100000, color: "#6c4cf1", unit: "calls", icon: Wifi, trend: "+12%" },
//     { label: "AI Credits", used: 5800, total: 10000, color: "#f59e0b", unit: "credits", icon: Sparkles, trend: "+8%" },
//     { label: "Storage", used: 41, total: 100, color: "#06b6d4", unit: "GB", icon: HardDrive, trend: "+3 GB" },
//     { label: "Team Seats", used: 5, total: 10, color: "#10b981", unit: "seats", icon: Users, trend: "Stable" },
//     { label: "Automation Runs", used: 1240, total: 2000, color: "#f43f5e", unit: "runs", icon: Zap, trend: "+18%" },
//     { label: "Report Exports", used: 38, total: 100, color: "#8b5cf6", unit: "exports", icon: FileText, trend: "+5" },
//   ];

//   const alertIcons = {
//     AlertTriangle, Shield, CheckCircle
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">Usage</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Monitor resource consumption across your workspace.</p>
//       </div>

//       <div className="flex gap-2 mb-6">
//         {(["overview", "history", "alerts"]).map((t) => (
//           <button
//             key={t}
//             onClick={() => setActiveTab(t)}
//             className={`text-xs px-4 py-2 rounded-xl font-semibold capitalize transition-all ${activeTab === t ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"}`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {activeTab === "overview" && (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//             {resources.map((r) => {
//               const Icon = r.icon;
//               const pct = Math.round((r.used / r.total) * 100);
//               const warn = pct >= 80;
//               return (
//                 <Card key={r.label} className="p-5">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="flex items-center gap-2.5">
//                       <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${r.color}12` }}>
//                         <Icon size={15} style={{ color: r.color }} />
//                       </div>
//                       <p className="font-semibold text-sm font-outfit">{r.label}</p>
//                     </div>
//                     <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${warn ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"}`}>{pct}%</span>
//                   </div>
//                   <UsageBar pct={pct} color={warn ? "#f43f5e" : r.color} />
//                   <div className="flex justify-between text-xs text-gray-400 mt-2">
//                     <span>{r.used.toLocaleString()} {r.unit}</span>
//                     <span>{r.total.toLocaleString()} {r.unit}</span>
//                   </div>
//                   <div className="flex items-center justify-between mt-2">
//                     <span className="text-[10px] text-gray-400">vs. last month</span>
//                     <span className="text-[11px] font-semibold" style={{ color: r.color }}>{r.trend}</span>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>

//           <Card className="p-5 mb-5">
//             <p className="text-sm font-semibold mb-4 font-outfit">Usage by Tool</p>
//             <div className="space-y-4">
//               {toolUsage.map((t) => (
//                 <div key={t.name}>
//                   <div className="flex items-center gap-3 mb-1.5">
//                     <div className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
//                     <span className="text-sm font-medium flex-1">{t.name}</span>
//                     <span className="text-xs text-gray-400 font-mono">{(t.calls / 1000).toFixed(0)}k calls</span>
//                     <span className="text-xs text-gray-400 font-mono">{(t.credits / 1000).toFixed(1)}k credits</span>
//                   </div>
//                   <UsageBar pct={Math.round((t.calls / 74000) * 100)} color={t.color} />
//                 </div>
//               ))}
//             </div>
//           </Card>

//           <Card className="p-5">
//             <p className="text-sm font-semibold mb-4 font-outfit">5-Month Usage Trend</p>
//             <ResponsiveContainer width="100%" height={200}>
//               <AreaChart data={usageHistory}>
//                 <defs>
//                   <linearGradient id="uApi" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
//                     <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
//                   </linearGradient>
//                   <linearGradient id="uCredits" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.12} />
//                     <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
//                 <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTip />} />
//                 <Area type="monotone" dataKey="api" stroke="#6c4cf1" strokeWidth={2} fill="url(#uApi)" dot={false} name="api" />
//                 <Area type="monotone" dataKey="credits" stroke="#f59e0b" strokeWidth={2} fill="url(#uCredits)" dot={false} name="credits" />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>
//         </>
//       )}

//       {activeTab === "history" && (
//         <Card className="overflow-hidden">
//           <div className="px-6 py-4 border-b border-violet-50">
//             <p className="font-bold text-sm font-outfit">Monthly Usage History</p>
//             <p className="text-xs text-gray-400 mt-0.5">Detailed breakdown per billing cycle</p>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b border-violet-50">
//                   <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400">Month</th>
//                   <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">API Calls</th>
//                   <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">AI Credits</th>
//                   <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Storage</th>
//                   <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {usageHistory.map((row, i) => (
//                   <tr key={row.month} className={`border-b border-violet-50 hover:bg-violet-50/40 transition-colors ${i === usageHistory.length - 1 ? "border-0" : ""}`}>
//                     <td className="px-6 py-3.5 font-semibold">{row.month} 2026</td>
//                     <td className="px-4 py-3.5 text-xs font-mono">{row.api.toLocaleString()}</td>
//                     <td className="px-4 py-3.5 text-xs font-mono">{row.credits.toLocaleString()}</td>
//                     <td className="px-4 py-3.5 text-xs font-mono">{row.storage} GB</td>
//                     <td className="px-4 py-3.5">
//                       <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
//                         <CheckCircle size={9} /> Within Limit
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </Card>
//       )}

//       {activeTab === "alerts" && (
//         <div className="space-y-3">
//           {alerts.map((a) => {
//             const Icon = alertIcons[a.icon];
//             return (
//               <Card key={a.msg} className="p-4 flex items-start gap-4">
//                 <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${a.color}12` }}>
//                   <Icon size={16} style={{ color: a.color }} />
//                 </div>
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-0.5">
//                     <span className="text-xs font-bold" style={{ color: a.color }}>{a.level}</span>
//                     <span className="text-[10px] text-gray-400 flex items-center gap-1">
//                       <Clock size={9} /> {a.time}
//                     </span>
//                   </div>
//                   <p className="text-sm">{a.msg}</p>
//                 </div>
//               </Card>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default UsagePage;


import React, { useState } from "react";
import * as Icons from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { usageHistory, toolUsage, alerts } from "../data/mockData";

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

function ChartTip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white rounded-xl shadow-lg border border-violet-100 p-3 text-xs">
      <p className="text-gray-400 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: {p.value > 999 ? `${(p.value / 1000).toFixed(1)}k` : p.value}
        </p>
      ))}
    </div>
  );
}

function UsagePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const resources = [
    { label: "API Calls", used: 74000, total: 100000, color: "#6c4cf1", unit: "calls", icon: Icons.Wifi, trend: "+12%" },
    { label: "AI Credits", used: 5800, total: 10000, color: "#f59e0b", unit: "credits", icon: Icons.Sparkles, trend: "+8%" },
    { label: "Storage", used: 41, total: 100, color: "#06b6d4", unit: "GB", icon: Icons.HardDrive, trend: "+3 GB" },
    { label: "Team Seats", used: 5, total: 10, color: "#10b981", unit: "seats", icon: Icons.Users, trend: "Stable" },
    { label: "Automation Runs", used: 1240, total: 2000, color: "#f43f5e", unit: "runs", icon: Icons.Zap, trend: "+18%" },
    { label: "Report Exports", used: 38, total: 100, color: "#8b5cf6", unit: "exports", icon: Icons.FileText, trend: "+5" },
  ];

  const alertIcons = {
    AlertTriangle: Icons.AlertTriangle,
    Shield: Icons.Shield,
    CheckCircle: Icons.CheckCircle,
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">Usage</h1>
        <p className="text-sm text-gray-400 mt-0.5">Monitor resource consumption across your workspace.</p>
      </div>

      <div className="flex gap-2 mb-6">
        {["overview", "history", "alerts"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`text-xs px-4 py-2 rounded-xl font-semibold capitalize transition-all ${
              activeTab === t ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {resources.map((r) => {
              const Icon = r.icon;
              const pct = Math.round((r.used / r.total) * 100);
              const warn = pct >= 80;
              return (
                <Card key={r.label} className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${r.color}12` }}>
                        <Icon size={15} style={{ color: r.color }} />
                      </div>
                      <p className="font-semibold text-sm font-outfit">{r.label}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        warn ? "bg-rose-50 text-rose-500" : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {pct}%
                    </span>
                  </div>
                  <UsageBar pct={pct} color={warn ? "#f43f5e" : r.color} />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>
                      {r.used.toLocaleString()} {r.unit}
                    </span>
                    <span>
                      {r.total.toLocaleString()} {r.unit}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[10px] text-gray-400">vs. last month</span>
                    <span className="text-[11px] font-semibold" style={{ color: r.color }}>
                      {r.trend}
                    </span>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="p-5 mb-5">
            <p className="text-sm font-semibold mb-4 font-outfit">Usage by Tool</p>
            <div className="space-y-4">
              {toolUsage.map((t) => (
                <div key={t.name}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
                    <span className="text-sm font-medium flex-1">{t.name}</span>
                    <span className="text-xs text-gray-400 font-mono">{(t.calls / 1000).toFixed(0)}k calls</span>
                    <span className="text-xs text-gray-400 font-mono">{(t.credits / 1000).toFixed(1)}k credits</span>
                  </div>
                  <UsageBar pct={Math.round((t.calls / 74000) * 100)} color={t.color} />
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-sm font-semibold mb-4 font-outfit">5-Month Usage Trend</p>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={usageHistory}>
                <defs>
                  <linearGradient id="uApi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="uCredits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.12} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
                <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTip />} />
                <Area type="monotone" dataKey="api" stroke="#6c4cf1" strokeWidth={2} fill="url(#uApi)" dot={false} name="api" />
                <Area type="monotone" dataKey="credits" stroke="#f59e0b" strokeWidth={2} fill="url(#uCredits)" dot={false} name="credits" />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </>
      )}

      {activeTab === "history" && (
        <Card className="overflow-hidden">
          <div className="px-6 py-4 border-b border-violet-50">
            <p className="font-bold text-sm font-outfit">Monthly Usage History</p>
            <p className="text-xs text-gray-400 mt-0.5">Detailed breakdown per billing cycle</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-violet-50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-gray-400">Month</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">API Calls</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">AI Credits</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Storage</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400">Status</th>
                 </tr>
              </thead>
              <tbody>
                {usageHistory.map((row, i) => (
                  <tr key={row.month} className={`border-b border-violet-50 hover:bg-violet-50/40 transition-colors ${i === usageHistory.length - 1 ? "border-0" : ""}`}>
                    <td className="px-6 py-3.5 font-semibold">{row.month} 2026</td>
                    <td className="px-4 py-3.5 text-xs font-mono">{row.api.toLocaleString()}</td>
                    <td className="px-4 py-3.5 text-xs font-mono">{row.credits.toLocaleString()}</td>
                    <td className="px-4 py-3.5 text-xs font-mono">{row.storage} GB</td>
                    <td className="px-4 py-3.5">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
                        <Icons.CheckCircle size={9} /> Within Limit
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {activeTab === "alerts" && (
        <div className="space-y-3">
          {alerts.map((a) => {
            const Icon = alertIcons[a.icon];
            return (
              <Card key={a.msg} className="p-4 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${a.color}12` }}>
                  <Icon size={16} style={{ color: a.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-bold" style={{ color: a.color }}>
                      {a.level}
                    </span>
                    <span className="text-[10px] text-gray-400 flex items-center gap-1">
                      <Icons.Clock size={9} /> {a.time}
                    </span>
                  </div>
                  <p className="text-sm">{a.msg}</p>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UsagePage;