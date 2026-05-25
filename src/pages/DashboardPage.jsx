// // src/pages/DashboardPage.jsx
// import React from "react";
// import * as Icons from "lucide-react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { TOOLS, lineData, WYN_INSIGHTS } from "../data/mockData";

// // ---------- Helper Components ----------
// function Card({ children, className = "" }) {
//   return (
//     <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>
//       {children}
//     </div>
//   );
// }

// function TrendBadge({ value, up = true }) {
//   return (
//     <span
//       className={`inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full ${
//         up ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-500"
//       }`}
//     >
//       {up ? <Icons.TrendingUp size={10} /> : <Icons.TrendingDown size={10} />}
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

// // ---------- Main Component ----------
// function DashboardPage({ setPage }) {
//   const kpis = [
//     { label: "Total Leads", value: "12,847", change: "+18.4%", up: true, icon: Icons.Target, color: "#6c4cf1" },
//     { label: "Social Reach", value: "184.2k", change: "+31.2%", up: true, icon: Icons.Globe, color: "#06b6d4" },
//     { label: "Followers (All Platforms)", value: "184.2k", change: "+14.2k", up: true, icon: Icons.Users, color: "#10b981" },
//     { label: "Follower Growth", value: "+14.2k", change: "+28%", up: true, icon: Icons.TrendingUp, color: "#f59e0b" },
//   ];

//   const insightIcons = {
//     Gift: Icons.Gift,
//     Megaphone: Icons.Megaphone,
//     Sparkles: Icons.Sparkles,
//     Tag: Icons.Tag,
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <div
//         className="relative rounded-2xl overflow-hidden p-6 lg:p-8 mb-6"
//         style={{ background: "linear-gradient(135deg, #6c4cf1 0%, #8b6ff5 50%, #06b6d4 100%)" }}
//       >
//         <div
//           className="absolute inset-0 opacity-20 pointer-events-none"
//           style={{ background: "radial-gradient(circle at 80% 20%, #ffffff, transparent 60%)" }}
//         />
//         <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
//           <div className="flex-1">
//             <p className="text-violet-100 text-sm mb-1">Sunday, 25 May 2026</p>
//             <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-outfit">
//               Good Morning, Ravi 👋
//             </h2>
//             <p className="text-violet-100 text-sm max-w-md">
//               Your AI ecosystem is running smoothly. 3 active tools growing your audience right now.
//             </p>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
//             {[
//               { label: "Plan", value: "Pro", sub: "Annual", icon: Icons.Star },
//               { label: "Active Tools", value: "3", sub: "of 8", icon: Icons.Wrench },
//               { label: "Monthly Usage", value: "74%", sub: "of limit", icon: Icons.Activity },
//               { label: "AI Credits", value: "4,200", sub: "remaining", icon: Icons.Sparkles },
//             ].map((s) => {
//               const Icon = s.icon;
//               return (
//                 <div
//                   key={s.label}
//                   className="rounded-xl px-4 py-3"
//                   style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
//                 >
//                   <Icon size={14} className="mb-2 text-white/80" />
//                   <p className="text-xl font-bold text-white font-outfit">{s.value}</p>
//                   <p className="text-[10px] text-white/60">{s.label}</p>
//                   <p className="text-[10px] text-white/80">{s.sub}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* KPIs Section */}
//       <div className="mt-8 mb-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {kpis.map((kpi) => {
//             const Icon = kpi.icon;
//             return (
//               <Card key={kpi.label} className="p-4">
//                 <div className="flex items-start justify-between mb-3">
//                   <div
//                     className="w-9 h-9 rounded-xl flex items-center justify-center"
//                     style={{ background: `${kpi.color}12` }}
//                   >
//                     <Icon size={16} style={{ color: kpi.color }} />
//                   </div>
//                   <TrendBadge value={kpi.change} up={kpi.up} />
//                 </div>
//                 <p className="text-2xl font-bold font-outfit">{kpi.value}</p>
//                 <p className="text-xs text-gray-400 mt-0.5">{kpi.label}</p>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* Active Tools Section – Using Lucide Icons (safe) */}
//       <div className="mt-8 mb-6">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className="font-semibold text-sm font-outfit">Active Tools</h3>
//           <button
//             onClick={() => setPage("tools")}
//             className="text-xs text-violet-600 font-medium flex items-center gap-1 hover:underline"
//           >
//             View All <Icons.ChevronRight size={12} />
//           </button>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {TOOLS.map((tool) => {
//             const Icon = Icons[tool.icon] || Icons.Circle;
//             return (
//               <Card key={tool.id} className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//   {TOOLS.map((tool) => {
//     return (
//       <Card
//         key={tool.id}
//         className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
//       >
//         {/* Tool Image */}
//         <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-violet-100 bg-white">
//           <img
//             src={tool.image}
//             alt={tool.name}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Tool Info */}
//         <div className="flex-1 min-w-0">
//           <p className="text-sm font-semibold truncate font-outfit">
//             {tool.name}
//           </p>
//           <p className="text-xs text-gray-400">
//             {tool.stat}
//           </p>
//         </div>

//         {/* Status */}
//         <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-600">
//           Active
//         </span>
//       </Card>
//     );
//   })}
// </div>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-semibold truncate font-outfit">{tool.name}</p>
//                   <p className="text-xs text-gray-400">{tool.stat}</p>
//                 </div>
//                 <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-600">
//                   Active
//                 </span>
//               </Card>
//             );
//           })}
//         </div>
//       </div>

//       {/* Charts + Insights Section */}
//       <div className="mt-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <Card className="p-5">
//             <p className="text-sm font-semibold mb-4 font-outfit">Lead & Follower Growth</p>
//             <ResponsiveContainer width="100%" height={180}>
//               <AreaChart data={lineData}>
//                 <defs>
//                   <linearGradient id="gLeads" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
//                     <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
//                   </linearGradient>
//                   <linearGradient id="gFollowers" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="5%" stopColor="#10b981" stopOpacity={0.12} />
//                     <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
//                 <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 10 }} axisLine={false} tickLine={false} />
//                 <YAxis tick={{ fill: "#9ca3af", fontSize: 10 }} axisLine={false} tickLine={false} />
//                 <Tooltip content={<ChartTip />} />
//                 <Area type="monotone" dataKey="leads" stroke="#6c4cf1" strokeWidth={2} fill="url(#gLeads)" dot={false} name="leads" />
//                 <Area
//                   type="monotone"
//                   dataKey="followers"
//                   stroke="#10b981"
//                   strokeWidth={2}
//                   fill="url(#gFollowers)"
//                   dot={false}
//                   name="followers"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </Card>

//           <Card className="p-5">
//             <div className="flex items-center justify-between mb-4">
//               <p className="text-sm font-semibold font-outfit">WYN Insights</p>
//               <button
//                 onClick={() => setPage("insights")}
//                 className="text-xs text-violet-600 font-medium flex items-center gap-1 hover:underline"
//               >
//                 See All <Icons.ChevronRight size={12} />
//               </button>
//             </div>
//             <div className="space-y-3">
//               {WYN_INSIGHTS.slice(0, 2).map((ins) => {
//                 const Icon = insightIcons[ins.icon] || Icons.Circle;
//                 return (
//                   <div
//                     key={ins.id}
//                     className="flex items-start gap-3 p-3 rounded-xl"
//                     style={{ background: `${ins.color}08`, border: `1px solid ${ins.color}15` }}
//                   >
//                     <div
//                       className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
//                       style={{ background: `${ins.color}15` }}
//                     >
//                       <Icon size={14} style={{ color: ins.color }} />
//                     </div>
//                     <div className="flex-1 min-w-0">
//                       <span
//                         className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white mr-1"
//                         style={{ background: ins.badgeBg }}
//                       >
//                         {ins.badge}
//                       </span>
//                       <p className="text-xs font-semibold mt-1 line-clamp-1">{ins.title}</p>
//                       <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{ins.body}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DashboardPage;




// src/pages/DashboardPage.jsx
import React from "react";
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
import { TOOLS, lineData, WYN_INSIGHTS } from "../data/mockData";

// ---------- Helper Components ----------
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
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

// ---------- Main Component ----------
function DashboardPage({ setPage }) {
  const kpis = [
    { label: "Total Leads", value: "12,847", change: "+18.4%", up: true, icon: Icons.Target, color: "#6c4cf1" },
    { label: "Social Reach", value: "184.2k", change: "+31.2%", up: true, icon: Icons.Globe, color: "#06b6d4" },
    { label: "Followers (All Platforms)", value: "184.2k", change: "+14.2k", up: true, icon: Icons.Users, color: "#10b981" },
    { label: "Follower Growth", value: "+14.2k", change: "+28%", up: true, icon: Icons.TrendingUp, color: "#f59e0b" },
  ];

  const insightIcons = {
    Gift: Icons.Gift,
    Megaphone: Icons.Megaphone,
    Sparkles: Icons.Sparkles,
    Tag: Icons.Tag,
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative rounded-2xl overflow-hidden p-6 lg:p-8 mb-6"
        style={{ background: "linear-gradient(135deg, #6c4cf1 0%, #8b6ff5 50%, #06b6d4 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, #ffffff, transparent 60%)" }}
        />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <p className="text-violet-100 text-sm mb-1">Sunday, 25 May 2026</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-outfit">
              Good Morning, Ravi 👋
            </h2>
            <p className="text-violet-100 text-sm max-w-md">
              Your AI ecosystem is running smoothly. 3 active tools growing your audience right now.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Plan", value: "Pro", sub: "Annual", icon: Icons.Star },
              { label: "Active Tools", value: "3", sub: "of 8", icon: Icons.Wrench },
              { label: "Monthly Usage", value: "74%", sub: "of limit", icon: Icons.Activity },
              { label: "AI Credits", value: "4,200", sub: "remaining", icon: Icons.Sparkles },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="rounded-xl px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  <Icon size={14} className="mb-2 text-white/80" />
                  <p className="text-xl font-bold text-white font-outfit">{s.value}</p>
                  <p className="text-[10px] text-white/60">{s.label}</p>
                  <p className="text-[10px] text-white/80">{s.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* KPIs Section */}
      <div className="mt-8 mb-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi) => {
            const Icon = kpi.icon;
            return (
              <Card key={kpi.label} className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: `${kpi.color}12` }}
                  >
                    <Icon size={16} style={{ color: kpi.color }} />
                  </div>
                  <TrendBadge value={kpi.change} up={kpi.up} />
                </div>
                <p className="text-2xl font-bold font-outfit">{kpi.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{kpi.label}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Active Tools Section – Using Custom Images from Assets */}
      <div className="mt-8 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-sm font-outfit">Active Tools</h3>
          <button
            onClick={() => setPage("tools")}
            className="text-xs text-violet-600 font-medium flex items-center gap-1 hover:underline"
          >
            View All <Icons.ChevronRight size={12} />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOOLS.map((tool) => {
            // tool.image should be a valid path to an image in your assets
            return (
              <Card
                key={tool.id}
                className="p-4 flex items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
              >
                {/* Tool Image */}
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-violet-100 bg-white">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Tool Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate font-outfit">
                    {tool.name}
                  </p>
                  <p className="text-xs text-gray-400">{tool.stat}</p>
                </div>

                {/* Status */}
                <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-emerald-50 text-emerald-600">
                  Active
                </span>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Charts + Insights Section */}
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="p-5">
            <p className="text-sm font-semibold mb-4 font-outfit">Lead & Follower Growth</p>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={lineData}>
                <defs>
                  <linearGradient id="gLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6c4cf1" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#6c4cf1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.12} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0eeff" />
                <XAxis dataKey="month" tick={{ fill: "#9ca3af", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#9ca3af", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip content={<ChartTip />} />
                <Area type="monotone" dataKey="leads" stroke="#6c4cf1" strokeWidth={2} fill="url(#gLeads)" dot={false} name="leads" />
                <Area
                  type="monotone"
                  dataKey="followers"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#gFollowers)"
                  dot={false}
                  name="followers"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold font-outfit">WYN Insights</p>
              <button
                onClick={() => setPage("insights")}
                className="text-xs text-violet-600 font-medium flex items-center gap-1 hover:underline"
              >
                See All <Icons.ChevronRight size={12} />
              </button>
            </div>
            <div className="space-y-3">
              {WYN_INSIGHTS.slice(0, 2).map((ins) => {
                const Icon = insightIcons[ins.icon] || Icons.Circle;
                return (
                  <div
                    key={ins.id}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: `${ins.color}08`, border: `1px solid ${ins.color}15` }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${ins.color}15` }}
                    >
                      <Icon size={14} style={{ color: ins.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded-full text-white mr-1"
                        style={{ background: ins.badgeBg }}
                      >
                        {ins.badge}
                      </span>
                      <p className="text-xs font-semibold mt-1 line-clamp-1">{ins.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{ins.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;