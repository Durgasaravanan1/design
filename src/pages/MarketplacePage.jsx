// import React, { useState } from "react";
// import { ExternalLink } from "lucide-react";
// import { TOOLS, LOCKED_TOOLS } from "../data/mockData";

// function Card({ children, className = "" }) {
//   return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
// }

// function MarketplacePage() {
//   const [cat, setCat] = useState("All");
//   const cats = ["All", "AI Tools", "CRM", "Marketing", "Analytics", "Support"];
//   const allTools = [
//     ...TOOLS.map((t) => ({ ...t, locked: false, desc: `${t.plan} plan · ${t.stat}` })),
//     ...LOCKED_TOOLS.map((t) => ({ ...t, status: "Available", plan: "From ₹499/mo", usage: 0, stat: "", url: "", locked: true })),
//   ];

//   const iconMap = {
//     TrendingUp: (p) => <svg {...p} />, Globe: (p) => <svg {...p} />, Users: (p) => <svg {...p} />, Wrench: (p) => <svg {...p} />, Sparkles: (p) => <svg {...p} />,
//     Cpu: (p) => <svg {...p} />, Layers: (p) => <svg {...p} />, Star: (p) => <svg {...p} />, MessageSquare: (p) => <svg {...p} />, Zap: (p) => <svg {...p} />
//   };
//   const getIcon = (name) => {
//     const icons = {
//       TrendingUp: (p) => <svg {...p} />, Globe: (p) => <svg {...p} />, Users: (p) => <svg {...p} />, Wrench: (p) => <svg {...p} />, Sparkles: (p) => <svg {...p} />,
//       Cpu: (p) => <svg {...p} />, Layers: (p) => <svg {...p} />, Star: (p) => <svg {...p} />, MessageSquare: (p) => <svg {...p} />, Zap: (p) => <svg {...p} />
//     };
//     return icons[name] || (() => null);
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">Marketplace</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Explore and add WYNSYNC tools to your workspace.</p>
//       </div>

//       <div className="flex flex-wrap gap-2 mb-6">
//         {cats.map((c) => (
//           <button
//             key={c}
//             onClick={() => setCat(c)}
//             className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all ${cat === c ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"}`}
//           >
//             {c}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {allTools.map((tool) => {
//           const Icon = getIcon(tool.icon);
//           return (
//             <Card key={`mkt-${tool.id}`} className="p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
//               <div className="flex items-start gap-4 mb-4">
//                 <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${tool.color}12` }}>
//                   <Icon size={20} style={{ color: tool.color }} />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2">
//                     <p className="font-bold text-sm font-outfit">{tool.name}</p>
//                     {!tool.locked && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">Installed</span>}
//                   </div>
//                   <p className="text-xs text-gray-400 mt-0.5">{tool.desc}</p>
//                 </div>
//               </div>
//               {tool.locked ? (
//                 <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: tool.color }}>
//                   Add to Workspace
//                 </button>
//               ) : (
//                 <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-medium bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors">
//                   <ExternalLink size={13} /> Open Tool
//                 </button>
//               )}
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default MarketplacePage;




import React, { useState } from "react";
import * as Icons from "lucide-react";
import { TOOLS, LOCKED_TOOLS } from "../data/mockData";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
}

function MarketplacePage() {
  const [cat, setCat] = useState("All");
  const cats = ["All", "AI Tools", "CRM", "Marketing", "Analytics", "Support"];
  const allTools = [
    ...TOOLS.map((t) => ({ ...t, locked: false, desc: `${t.plan} plan · ${t.stat}` })),
    ...LOCKED_TOOLS.map((t) => ({ ...t, status: "Available", plan: "From ₹499/mo", usage: 0, stat: "", url: "", locked: true })),
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">Marketplace</h1>
        <p className="text-sm text-gray-400 mt-0.5">Explore and add WYNSYNC tools to your workspace.</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`text-xs px-4 py-2 rounded-xl font-semibold transition-all ${
              cat === c ? "bg-violet-600 text-white" : "bg-white text-gray-400 border border-violet-100 hover:border-violet-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTools.map((tool) => {
          const Icon = Icons[tool.icon];
          return (
            <Card key={`mkt-${tool.id}`} className="p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${tool.color}12` }}
                >
                  <Icon size={20} style={{ color: tool.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm font-outfit">{tool.name}</p>
                    {!tool.locked && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-semibold">
                        Installed
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{tool.desc}</p>
                </div>
              </div>
              {tool.locked ? (
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: tool.color }}
                >
                  Add to Workspace
                </button>
              ) : (
                <button className="w-full flex items-center justify-center gap-2 rounded-xl h-9 text-sm font-medium bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors">
                  <Icons.ExternalLink size={13} /> Open Tool
                </button>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default MarketplacePage;