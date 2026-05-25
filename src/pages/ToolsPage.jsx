// import React from "react";
// import {
//   ExternalLink, BarChart3, Lock, CheckCircle, TrendingUp, Globe, Users, Wrench, Sparkles
// } from "lucide-react";
// import { TOOLS, LOCKED_TOOLS } from "../data/mockData";

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

// function ToolsPage() {
//   const iconMap = {
//     TrendingUp, Globe, Users, Wrench, Sparkles, Cpu: () => null, Layers: () => null, Star: () => null, MessageSquare: () => null, Zap: () => null
//   };
//   // Ensure all icons are available
//   const getIcon = (name) => {
//     const icons = {
//       TrendingUp, Globe, Users, Wrench, Sparkles, Cpu: (p) => <svg {...p} />, Layers: (p) => <svg {...p} />, Star, MessageSquare, Zap
//     };
//     return icons[name] || TrendingUp;
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">My Tools</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Manage and access your purchased WYNSYNC tools.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
//         {TOOLS.map((tool) => {
//           const Icon = getIcon(tool.icon);
//           return (
//             <Card key={tool.id} className="p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${tool.color}12`, border: `1.5px solid ${tool.color}25` }}>
//                     <Icon size={22} style={{ color: tool.color }} />
//                   </div>
//                   <div>
//                     <p className="font-bold text-base font-outfit">{tool.name}</p>
//                     <p className="text-xs text-gray-400">{tool.plan} Plan</p>
//                   </div>
//                 </div>
//                 <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold bg-emerald-50 text-emerald-600">● {tool.status}</span>
//               </div>
//               <p className="text-xs text-gray-400 mb-1.5">Monthly usage</p>
//               <div className="flex items-center gap-2 mb-1">
//                 <UsageBar pct={tool.usage} color={tool.color} />
//                 <span className="text-xs font-semibold font-mono shrink-0" style={{ color: tool.color }}>{tool.usage}%</span>
//               </div>
//               <p className="text-xs text-gray-400 mb-5">{tool.stat}</p>
//               <div className="flex gap-2">
//                 <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl h-9 text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)` }}>
//                   <ExternalLink size={13} /> Open Tool
//                 </button>
//                 <button className="flex-1 flex items-center justify-center gap-1.5 rounded-xl h-9 text-sm font-medium text-violet-600 bg-violet-50 hover:bg-violet-100 transition-colors">
//                   <BarChart3 size={13} /> Analytics
//                 </button>
//               </div>
//             </Card>
//           );
//         })}
//       </div>

//       <div className="flex items-center justify-between mb-4">
//         <h3 className="font-semibold text-sm font-outfit">Discover More Tools</h3>
//         <span className="text-xs text-gray-400">{LOCKED_TOOLS.length} available</span>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
//         {LOCKED_TOOLS.map((tool) => {
//           const Icon = getIcon(tool.icon);
//           return (
//             <Card key={tool.id} className="p-5 relative opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300">
//               <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500">
//                 <Lock size={9} /> Locked
//               </div>
//               <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ background: `${tool.color}12` }}>
//                 <Icon size={18} style={{ color: tool.color }} />
//               </div>
//               <p className="font-semibold text-sm mb-1 font-outfit">{tool.name}</p>
//               <p className="text-[11px] text-gray-400 leading-relaxed mb-4">{tool.desc}</p>
//               <button className="w-full flex items-center justify-center gap-1.5 rounded-xl h-8 text-xs font-semibold text-white transition-all hover:opacity-90" style={{ background: tool.color }}>
//                 Start Free Trial
//               </button>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default ToolsPage;

// src/pages/ToolsPage.jsx
import React from "react";
import {
  ExternalLink,
  Lock,
  TrendingUp,
  Globe,
  Users,
  Wrench,
  Sparkles,
  Star,
  Cpu,
  Layers,
  MessageSquare,
  Zap,
} from "lucide-react";
import { TOOLS, LOCKED_TOOLS } from "../data/mockData";

function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function UsageBar({ pct, color }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-violet-50">
      <div className="h-1.5 rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

// Map icon string names to actual Lucide components
const iconComponents = {
  TrendingUp,
  Globe,
  Users,
  Wrench,
  Sparkles,
  Star,
  Cpu,
  Layers,
  MessageSquare,
  Zap,
};

function getIcon(iconName) {
  return iconComponents[iconName] || TrendingUp; // fallback to TrendingUp
}

function ToolsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">My Tools</h1>
        <p className="text-sm text-gray-400 mt-0.5">
          Manage and access your purchased WYNSYNC tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
        {TOOLS.map((tool) => {
          const Icon = getIcon(tool.icon);
          return (
            <Card
              key={tool.id}
              className="p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white border border-violet-100 flex items-center justify-center">
                    <img
                      src={tool.image}
                      alt={tool.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-base font-outfit">{tool.name}</p>
                    <p className="text-xs text-gray-400">{tool.plan} Plan</p>
                  </div>
                </div>
                <span className="text-[10px] px-2.5 py-1 rounded-full font-semibold bg-emerald-50 text-emerald-600">
                  ● {tool.status}
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-1.5">Monthly usage</p>
              <div className="flex items-center gap-2 mb-1">
                <UsageBar pct={tool.usage} color={tool.color} />
                <span
                  className="text-xs font-semibold font-mono shrink-0"
                  style={{ color: tool.color }}
                >
                  {tool.usage}%
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-5">{tool.stat}</p>
              
              {/* Single centered button */}
              <button
                className="w-full flex items-center justify-center gap-1.5 rounded-xl h-10 text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${tool.color}, ${tool.color}cc)`,
                }}
              >
                <ExternalLink size={14} /> Open Tool
              </button>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm font-outfit">Discover More Tools</h3>
        <span className="text-xs text-gray-400">{LOCKED_TOOLS.length} available</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {LOCKED_TOOLS.map((tool) => {
          const Icon = getIcon(tool.icon);
          return (
            <Card
              key={tool.id}
              className="p-5 relative opacity-80 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-500">
                <Lock size={9} /> Locked
              </div>
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-violet-100 bg-white mb-3">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <p className="font-semibold text-sm mb-1 font-outfit">{tool.name}</p>
              <p className="text-[11px] text-gray-400 leading-relaxed mb-4">
                {tool.desc}
              </p>
              <button
                className="w-full flex items-center justify-center gap-1.5 rounded-xl h-8 text-xs font-semibold text-white transition-all hover:opacity-90"
                style={{ background: tool.color }}
              >
                Start Free Trial
              </button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ToolsPage;