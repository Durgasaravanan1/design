// import React, { useState } from "react";
// import {
//   TrendingUp, TrendingDown, Users, Globe, Target, Zap,
//   AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
//   BarChart, Bar, PieChart, Pie, Cell
// } from "recharts";
// import { lineData, barData, donutData } from "../data/mockData";

// function Card({ children, className = "" }) {
//   return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
// }

// function TrendBadge({ value, up = true }) {
//   return (
//     <span className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"}`}>
//       {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
//       {value}
//     </span>
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

// function AnalyticsPage() {
//   const [range, setRange] = useState("30D");
//   const kpis = [
//     { label: "Total Leads", value: "12,847", change: "+18.4%", up: true, icon: Target, color: "#6c4cf1" },
//     { label: "Social Reach", value: "184.2k", change: "+31.2%", up: true, icon: Globe, color: "#06b6d4" },
//     { label: "Followers Gained", value: "+14.2k", change: "+28%", up: true, icon: Users, color: "#10b981" },
//     { label: "Campaigns", value: "28", change: "+7", up: true, icon: Zap, color: "#f59e0b" },
//   ];

//   return (
//     <div>
//       <div className="flex items-start justify-between mb-6">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900 font-outfit">Analytics</h1>
//           <p className="text-sm text-gray-400 mt-0.5">Track performance across all your active tools.</p>
//         </div>
//         <div className="flex gap-1.5 mt-1">
//           {(["7D", "30D", "90D"]).map((t) => (
//             <button
//               key={t}
//               onClick={() => setRange(t)}
//               className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${range === t ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"}`}
//             >
//               {t}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {kpis.map((kpi) => {
//           const Icon = kpi.icon;
//           return (
//             <Card key={kpi.label} className="p-4">
//               <div className="flex items-start justify-between mb-3">
//                 <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${kpi.color}12` }}>
//                   <Icon size={15} style={{ color: kpi.color }} />
//                 </div>
//                 <TrendBadge value={kpi.change} up={kpi.up} />
//               </div>
//               <p className="text-2xl font-bold font-outfit">{kpi.value}</p>
//               <p className="text-xs text-gray-400 mt-0.5">{kpi.label}</p>
//             </Card>
//           );
//         })}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
//         <Card className="lg:col-span-2 p-5">
//           <p className="text-sm font-semibold mb-4 font-outfit">Lead & Follower Trend</p>
//           <ResponsiveContainer width="100%" height={220}>
//             <AreaChart data={lineData}>
//               <defs>
//                 <linearGradient id="aLeads" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
//                   <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
//                 </linearGradient>
//                 <linearGradient id="aFollowers" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
//                   <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//                 </linearGradient>
//               </defs>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
//               <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//               <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//               <Tooltip content={<ChartTip />} />
//               <Area type="monotone" dataKey="leads" stroke="#6c4cf1" strokeWidth={2} fill="url(#aLeads)" dot={false} name="leads" />
//               <Area type="monotone" dataKey="followers" stroke="#10b981" strokeWidth={2} fill="url(#aFollowers)" dot={false} name="followers" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </Card>

//         <Card className="p-5">
//           <p className="text-sm font-semibold mb-4 font-outfit">Tool Usage Share</p>
//           <ResponsiveContainer width="100%" height={160}>
//             <PieChart>
//               <Pie data={donutData} cx="50%" cy="50%" innerRadius={45} outerRadius={68} paddingAngle={3} dataKey="value">
//                 {donutData.map((d) => (
//                   <Cell key={d.name} fill={d.color} />
//                 ))}
//               </Pie>
//               <Tooltip content={<ChartTip />} />
//             </PieChart>
//           </ResponsiveContainer>
//           <div className="space-y-2 mt-2">
//             {donutData.map((d) => (
//               <div key={d.name} className="flex items-center justify-between text-xs">
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
//                   <span className="text-gray-400">{d.name}</span>
//                 </div>
//                 <span className="font-semibold" style={{ color: d.color }}>{d.value}%</span>
//               </div>
//             ))}
//           </div>
//         </Card>
//       </div>

//       <Card className="p-5">
//         <p className="text-sm font-semibold mb-4 font-outfit">Weekly Content & Campaign Activity</p>
//         <ResponsiveContainer width="100%" height={180}>
//           <BarChart data={barData} barGap={4}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" vertical={false} />
//             <XAxis dataKey="day" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//             <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
//             <Tooltip content={<ChartTip />} />
//             <Bar dataKey="posts" fill="#6c4cf1" radius={[4, 4, 0, 0]} name="posts" />
//             <Bar dataKey="campaigns" fill="#06b6d4" radius={[4, 4, 0, 0]} name="campaigns" />
//           </BarChart>
//         </ResponsiveContainer>
//       </Card>
//     </div>
//   );
// }

// export default AnalyticsPage;



import React, { useState } from "react";
import * as Icons from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { lineData, barData, donutData } from "../data/mockData";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
}

function TrendBadge({ value, up = true }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
        up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"
      }`}
    >
      {up ? <Icons.TrendingUp size={10} /> : <Icons.TrendingDown size={10} />}
      {value}
    </span>
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

function AnalyticsPage() {
  const [range, setRange] = useState("30D");
  const kpis = [
    { label: "Total Leads", value: "12,847", change: "+18.4%", up: true, icon: Icons.Target, color: "#6c4cf1" },
    { label: "Social Reach", value: "184.2k", change: "+31.2%", up: true, icon: Icons.Globe, color: "#06b6d4" },
    { label: "Followers Gained", value: "+14.2k", change: "+28%", up: true, icon: Icons.Users, color: "#10b981" },
    { label: "Campaigns", value: "28", change: "+7", up: true, icon: Icons.Zap, color: "#f59e0b" },
  ];

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-outfit">Analytics</h1>
          <p className="text-sm text-gray-400 mt-0.5">Track performance across all your active tools.</p>
        </div>
        <div className="flex gap-1.5 mt-1">
          {["7D", "30D", "90D"].map((t) => (
            <button
              key={t}
              onClick={() => setRange(t)}
              className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition-all ${
                range === t ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.label} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: `${kpi.color}12` }}>
                  <Icon size={15} style={{ color: kpi.color }} />
                </div>
                <TrendBadge value={kpi.change} up={kpi.up} />
              </div>
              <p className="text-2xl font-bold font-outfit">{kpi.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{kpi.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
        <Card className="lg:col-span-2 p-5">
          <p className="text-sm font-semibold mb-4 font-outfit">Lead & Follower Trend</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={lineData}>
              <defs>
                <linearGradient id="aLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="aFollowers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
              <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTip />} />
              <Area type="monotone" dataKey="leads" stroke="#6c4cf1" strokeWidth={2} fill="url(#aLeads)" dot={false} name="leads" />
              <Area type="monotone" dataKey="followers" stroke="#10b981" strokeWidth={2} fill="url(#aFollowers)" dot={false} name="followers" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-semibold mb-4 font-outfit">Tool Usage Share</p>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie data={donutData} cx="50%" cy="50%" innerRadius={45} outerRadius={68} paddingAngle={3} dataKey="value">
                {donutData.map((d) => (
                  <Cell key={d.name} fill={d.color} />
                ))}
              </Pie>
              <Tooltip content={<ChartTip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-2">
            {donutData.map((d) => (
              <div key={d.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                  <span className="text-gray-400">{d.name}</span>
                </div>
                <span className="font-semibold" style={{ color: d.color }}>
                  {d.value}%
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-5">
        <p className="text-sm font-semibold mb-4 font-outfit">Weekly Content & Campaign Activity</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={barData} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" vertical={false} />
            <XAxis dataKey="day" tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#9ca3af", fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTip />} />
            <Bar dataKey="posts" fill="#6c4cf1" radius={[4, 4, 0, 0]} name="posts" />
            <Bar dataKey="campaigns" fill="#06b6d4" radius={[4, 4, 0, 0]} name="campaigns" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

export default AnalyticsPage;