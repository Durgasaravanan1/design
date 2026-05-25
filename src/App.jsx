import React, { useState, useRef } from "react";
import * as Icons from "lucide-react";
import DashboardPage from "./pages/DashboardPage";
import ToolsPage from "./pages/ToolsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import BillingPage from "./pages/BillingPage";
import MarketplacePage from "./pages/MarketplacePage";
import InsightsPage from "./pages/InsightsPage";
import UsagePage from "./pages/UsagePage";
import SettingsPage from "./pages/SettingsPage";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard" },
  { id: "tools", label: "My Tools", icon: "Wrench" },
  { id: "analytics", label: "Analytics", icon: "BarChart3" },
  { id: "billing", label: "Billing", icon: "CreditCard" },
  { id: "marketplace", label: "Marketplace", icon: "Store" },
  { id: "insights", label: "WYN Insights", icon: "Sparkles" },
  { id: "usage", label: "Usage", icon: "Activity" },
  { id: "settings", label: "Settings", icon: "Settings" },
];

function Dock({ active, setActive }) {
  const [hovered, setHovered] = useState(null);
  const getIcon = (name) => {
    const Icon = Icons[name];
    return Icon ? Icon : Icons.HelpCircle;
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 px-4 py-3 rounded-2xl bg-white/88 backdrop-blur-2xl shadow-[0_8px_40px_rgba(108,76,241,0.18),0_0_0_1px_rgba(108,76,241,0.1)]">
      {NAV_ITEMS.map((item) => {
        const Icon = getIcon(item.icon);
        const isActive = active === item.id;
        const isHovered = hovered === item.id;
        return (
          <div
            key={item.id}
            className="relative flex flex-col items-center"
            style={{
              transform: isHovered ? "translateY(-8px) scale(1.25)" : "translateY(0) scale(1)",
              transition: "transform 0.2s cubic-bezier(.34,1.56,.64,1)",
            }}
          >
            <div
              className={`absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold px-2 py-1 rounded-lg bg-gray-900 text-white pointer-events-none transition-all duration-150 ${
                isHovered ? "opacity-100" : "opacity-0 translate-y-1"
              }`}
            >
              {item.label}
            </div>
            <button
              onClick={() => setActive(item.id)}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              aria-label={item.label}
              className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-150"
              style={
                isActive
                  ? { background: "linear-gradient(135deg, #6c4cf1, #8b6ff5)", boxShadow: "0 4px 16px rgba(108,76,241,0.35)" }
                  : { background: "rgba(108,76,241,0.07)" }
              }
            >
              <Icon size={19} style={{ color: isActive ? "#fff" : "#6c4cf1" }} />
            </button>
            <div className={`w-1 h-1 rounded-full mt-1 bg-violet-600 transition-all duration-200 ${isActive ? "opacity-100" : "opacity-0"}`} />
          </div>
        );
      })}
    </div>
  );
}

function App() {
  const [page, setPage] = useState("dashboard");
  const [searchOpen, setSearchOpen] = useState(false);
  const mainRef = useRef(null);

  const handleSetPage = (id) => {
    setPage(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  const renderPage = () => {
    switch (page) {
      case "dashboard":
        return <DashboardPage setPage={handleSetPage} />;
      case "tools":
        return <ToolsPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "billing":
        return <BillingPage />;
      case "marketplace":
        return <MarketplacePage />;
      case "insights":
        return <InsightsPage />;
      case "usage":
        return <UsagePage />;
      case "settings":
        return <SettingsPage />;
      default:
        return <DashboardPage setPage={handleSetPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <header className="sticky top-0 z-40 h-14 flex items-center gap-4 px-4 lg:px-8 bg-white/80 border-b border-violet-100 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
            <Icons.Zap size={15} className="text-white" />
          </div>
          <span className="font-bold text-sm tracking-widest text-violet-700 font-outfit">WYNSYNC</span>
        </div>

        <button
          onClick={() => setSearchOpen(true)}
          className="ml-4 flex items-center gap-2 rounded-xl px-3 h-9 text-sm text-gray-400 transition-all flex-1 max-w-sm bg-violet-50 border border-violet-100 hover:border-violet-300"
        >
          <Icons.Search size={14} />
          <span className="hidden sm:block">Search…</span>
          <kbd className="ml-auto hidden sm:inline-flex items-center gap-0.5 text-[10px] font-mono px-1.5 py-0.5 rounded bg-white border border-violet-100 text-violet-400">
            ⌘K
          </kbd>
        </button>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs bg-emerald-50 text-emerald-600 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI Active
          </div>
          <button
            aria-label="Notifications"
            className="relative p-2 rounded-xl text-gray-400 hover:text-gray-900 bg-violet-50 hover:bg-violet-100 transition-colors"
          >
            <Icons.Bell size={17} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-500" />
          </button>
          <button className="flex items-center gap-1.5 rounded-xl px-3 h-9 text-sm font-semibold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
            <Icons.Plus size={15} /> Create
          </button>
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white cursor-pointer select-none bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
            R
          </div>
        </div>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/30 backdrop-blur-sm"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-violet-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-violet-50">
              <Icons.Search size={16} className="text-gray-400" />
              <input
                autoFocus
                placeholder="Search tools, leads, campaigns…"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
              <button
                aria-label="Close search"
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-gray-900"
              >
                <Icons.X size={15} />
              </button>
            </div>
            <div className="p-3">
              {["WYN Growth", "WYN CRM", "WYN Reach", "Analytics Report", "WYN Insights"].map((item) => (
                <button
                  key={item}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-violet-50 transition-colors text-left"
                >
                  <Icons.Search size={13} className="text-gray-400" />
                  <span className="text-sm">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <main ref={mainRef} className="px-4 lg:px-8 py-6 pb-32">
        {renderPage()}
      </main>

      <Dock active={page} setActive={handleSetPage} />
    </div>
  );
}

export default App;