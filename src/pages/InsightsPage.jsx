// import React, { useState } from "react";
// import { MessageSquare, Tag, Sparkles, Zap, Clock, X } from "lucide-react";
// import { WYN_INSIGHTS } from "../data/mockData";

// function Card({ children, className = "" }) {
//   return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
// }

// function InsightsPage() {
//   const [dismissed, setDismissed] = useState([]);
//   const visible = WYN_INSIGHTS.filter((i) => !dismissed.includes(i.id));

//   const iconMap = {
//     Gift: (p) => <svg {...p} />, Megaphone: (p) => <svg {...p} />, Sparkles: (p) => <svg {...p} />, Tag: (p) => <svg {...p} />
//   };
//   const getIcon = (name) => {
//     const icons = { Gift: (p) => <svg {...p} />, Megaphone: (p) => <svg {...p} />, Sparkles: (p) => <svg {...p} />, Tag: (p) => <svg {...p} /> };
//     return icons[name] || (() => null);
//   };

//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">WYN Insights</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Messages, offers, and tips from WYNSYNC — just for you.</p>
//       </div>

//       <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//         {[
//           { label: "Active Messages", value: String(visible.length), icon: MessageSquare, color: "#6c4cf1" },
//           { label: "Live Offers", value: "2", icon: Tag, color: "#f43f5e" },
//           { label: "Pro Tips", value: "1", icon: Sparkles, color: "#f59e0b" },
//           { label: "New Features", value: "1", icon: Zap, color: "#10b981" },
//         ].map((s) => {
//           const Icon = s.icon;
//           return (
//             <Card key={s.label} className="p-4">
//               <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${s.color}12` }}>
//                 <Icon size={16} style={{ color: s.color }} />
//               </div>
//               <p className="text-xl font-bold font-outfit">{s.value}</p>
//               <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
//             </Card>
//           );
//         })}
//       </div>

//       <div className="flex flex-col gap-4">
//         {visible.length === 0 && (
//           <Card className="p-10 text-center text-gray-400 text-sm">
//             All caught up! No new messages from WYNSYNC.
//           </Card>
//         )}
//         {visible.map((ins) => {
//           const Icon = getIcon(ins.icon);
//           return (
//             <Card key={ins.id} className="p-5 hover:shadow-md transition-shadow">
//               <div className="flex items-start gap-4">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style={{ background: `${ins.color}12` }}>
//                   <Icon size={22} style={{ color: ins.color }} />
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center gap-2 mb-1.5 flex-wrap">
//                     <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ins.badgeBg }}>
//                       {ins.badge}
//                     </span>
//                     <span className="text-[11px] text-gray-400 flex items-center gap-1">
//                       <Clock size={10} /> {ins.time}
//                     </span>
//                   </div>
//                   <p className="font-bold text-base mb-1 font-outfit">{ins.title}</p>
//                   <p className="text-sm text-gray-500 leading-relaxed mb-4">{ins.body}</p>
//                   <div className="flex items-center gap-3">
//                     <button
//                       className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
//                       style={{ background: `linear-gradient(135deg, ${ins.color}, ${ins.color}bb)` }}
//                     >
//                       {ins.cta}
//                     </button>
//                     <button
//                       onClick={() => setDismissed((d) => [...d, ins.id])}
//                       className="px-4 py-2 rounded-xl text-sm font-medium text-gray-400 bg-gray-50 hover:bg-gray-100 transition-colors"
//                     >
//                       Dismiss
//                     </button>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => setDismissed((d) => [...d, ins.id])}
//                   aria-label="Dismiss insight"
//                   className="p-1.5 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-50 transition-colors shrink-0"
//                 >
//                   <X size={14} />
//                 </button>
//               </div>
//             </Card>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default InsightsPage;



import React, { useState } from "react";
import * as Icons from "lucide-react";
import { WYN_INSIGHTS } from "../data/mockData";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
}

function InsightsPage() {
  const [dismissed, setDismissed] = useState([]);
  const visible = WYN_INSIGHTS.filter((i) => !dismissed.includes(i.id));

  const insightIcons = {
    Gift: Icons.Gift,
    Megaphone: Icons.Megaphone,
    Sparkles: Icons.Sparkles,
    Tag: Icons.Tag,
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">WYN Insights</h1>
        <p className="text-sm text-gray-400 mt-0.5">Messages, offers, and tips from WYNSYNC — just for you.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Active Messages", value: String(visible.length), icon: Icons.MessageSquare, color: "#6c4cf1" },
          { label: "Live Offers", value: "2", icon: Icons.Tag, color: "#f43f5e" },
          { label: "Pro Tips", value: "1", icon: Icons.Sparkles, color: "#f59e0b" },
          { label: "New Features", value: "1", icon: Icons.Zap, color: "#10b981" },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.label} className="p-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ background: `${s.color}12` }}>
                <Icon size={16} style={{ color: s.color }} />
              </div>
              <p className="text-xl font-bold font-outfit">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </Card>
          );
        })}
      </div>

      <div className="flex flex-col gap-4">
        {visible.length === 0 && (
          <Card className="p-10 text-center text-gray-400 text-sm">All caught up! No new messages from WYNSYNC.</Card>
        )}
        {visible.map((ins) => {
          const Icon = insightIcons[ins.icon];
          return (
            <Card key={ins.id} className="p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${ins.color}12` }}
                >
                  <Icon size={22} style={{ color: ins.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: ins.badgeBg }}
                    >
                      {ins.badge}
                    </span>
                    <span className="text-[11px] text-gray-400 flex items-center gap-1">
                      <Icons.Clock size={10} /> {ins.time}
                    </span>
                  </div>
                  <p className="font-bold text-base mb-1 font-outfit">{ins.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{ins.body}</p>
                  <div className="flex items-center gap-3">
                    <button
                      className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                      style={{ background: `linear-gradient(135deg, ${ins.color}, ${ins.color}bb)` }}
                    >
                      {ins.cta}
                    </button>
                    <button
                      onClick={() => setDismissed((d) => [...d, ins.id])}
                      className="px-4 py-2 rounded-xl text-sm font-medium text-gray-400 bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => setDismissed((d) => [...d, ins.id])}
                  aria-label="Dismiss insight"
                  className="p-1.5 rounded-lg text-gray-300 hover:text-gray-500 hover:bg-gray-50 transition-colors shrink-0"
                >
                  <Icons.X size={14} />
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default InsightsPage;