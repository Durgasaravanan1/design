export const TOOLS = [
  { id: "growth", name: "WYN Growth", icon: "TrendingUp", color: "#6c4cf1", status: "Active", plan: "Pro", usage: 78, stat: "14.2k followers gained", url: "growth.wynsync.tech" },
  { id: "crm", name: "WYN CRM", icon: "Users", color: "#06b6d4", status: "Active", plan: "Business", usage: 55, stat: "847 contacts", url: "crm.wynsync.tech" },
  { id: "reach", name: "WYN Reach", icon: "Globe", color: "#f59e0b", status: "Active", plan: "Pro", usage: 91, stat: "184k social reach", url: "reach.wynsync.tech" },
];

export const LOCKED_TOOLS = [
  { id: "doctor", name: "WYN Doctor", icon: "Cpu", color: "#10b981", desc: "AI-powered health diagnostics for your business." },
  { id: "learn", name: "WYN Learn", icon: "Layers", color: "#f43f5e", desc: "Adaptive learning platform for your team." },
  { id: "study", name: "WYN Study", icon: "Star", color: "#8b5cf6", desc: "AI-curated research and intelligence briefs." },
  { id: "desk", name: "WYN Desk", icon: "MessageSquare", color: "#06b6d4", desc: "Omnichannel support hub with AI triage." },
  { id: "force", name: "WYN Force", icon: "Zap", color: "#f97316", desc: "Automation engine for complex workflows." },
];

export const PLATFORMS = [
  { name: "Instagram", icon: "Instagram", color: "#e1306c", followers: "84.2k", growth: "+1.2k" },
  { name: "Twitter / X", icon: "Twitter", color: "#1d9bf0", followers: "31.5k", growth: "+340" },
  { name: "YouTube", icon: "Youtube", color: "#ff0000", followers: "22.8k", growth: "+520" },
  { name: "LinkedIn", icon: "Linkedin", color: "#0077b5", followers: "18.4k", growth: "+210" },
  { name: "WhatsApp", icon: "MessageSquare", color: "#25d366", followers: "27.3k", growth: "+890" },
];

export const totalFollowers = "184.2k";

export const lineData = [
  { month: "Jan", leads: 1200, followers: 142000 },
  { month: "Feb", leads: 1800, followers: 155000 },
  { month: "Mar", leads: 1400, followers: 161000 },
  { month: "Apr", leads: 2200, followers: 174000 },
  { month: "May", leads: 1900, followers: 180000 },
  { month: "Jun", leads: 2800, followers: 184000 },
  { month: "Jul", leads: 3200, followers: 194000 },
];

export const barData = [
  { day: "Mon", posts: 4, campaigns: 2 },
  { day: "Tue", posts: 7, campaigns: 3 },
  { day: "Wed", posts: 5, campaigns: 5 },
  { day: "Thu", posts: 9, campaigns: 4 },
  { day: "Fri", posts: 12, campaigns: 7 },
  { day: "Sat", posts: 6, campaigns: 2 },
  { day: "Sun", posts: 3, campaigns: 1 },
];

export const donutData = [
  { name: "WYN Growth", value: 38, color: "#6c4cf1" },
  { name: "WYN CRM", value: 27, color: "#06b6d4" },
  { name: "WYN Reach", value: 35, color: "#f59e0b" },
];

export const WYN_INSIGHTS = [
  { id: "w1", type: "offer", icon: "Gift", color: "#6c4cf1", badge: "Limited Offer", badgeBg: "#6c4cf1", title: "50% off WYN Reach upgrade — today only!", body: "Unlock unlimited social scheduling and advanced audience analytics. Use code REACH50 at checkout.", cta: "Claim Offer", time: "Just now" },
  { id: "w2", type: "tip", icon: "Megaphone", color: "#f59e0b", badge: "Pro Tip", badgeBg: "#f59e0b", title: "Boost your follower growth by 3× this week", body: "Our data shows accounts that post at 7PM IST on weekdays gain 3× more followers. WYN Growth has scheduled 5 posts for you.", cta: "View Schedule", time: "2 hours ago" },
  { id: "w3", type: "message", icon: "Sparkles", color: "#10b981", badge: "New Feature", badgeBg: "#10b981", title: "WYN CRM now supports WhatsApp automation", body: "Send personalised follow-up messages to leads directly from your CRM. Enable it in your tool settings.", cta: "Enable Now", time: "Yesterday" },
  { id: "w4", type: "offer", icon: "Tag", color: "#f43f5e", badge: "Bundle Deal", badgeBg: "#f43f5e", title: "Add WYN Desk + WYN Learn for ₹999/mo", body: "Get both tools at 40% off the regular price. Ideal for teams scaling support and training together.", cta: "View Bundle", time: "2 days ago" },
];

export const INVOICES = [
  { id: "INV-2026-05", date: "May 1, 2026", due: "May 25, 2026", amount: "₹4,999", status: "Paid", plan: "WYN Pro · May" },
  { id: "INV-2026-04", date: "Apr 1, 2026", due: "Apr 25, 2026", amount: "₹4,999", status: "Paid", plan: "WYN Pro · Apr" },
  { id: "INV-2026-03", date: "Mar 1, 2026", due: "Mar 25, 2026", amount: "₹4,999", status: "Paid", plan: "WYN Pro · Mar" },
  { id: "INV-2026-02", date: "Feb 1, 2026", due: "Feb 25, 2026", amount: "₹4,999", status: "Paid", plan: "WYN Pro · Feb" },
  { id: "INV-2026-01", date: "Jan 1, 2026", due: "Jan 25, 2026", amount: "₹4,999", status: "Paid", plan: "WYN Pro · Jan" },
  { id: "INV-2025-12", date: "Dec 1, 2025", due: "Dec 25, 2025", amount: "₹3,499", status: "Paid", plan: "WYN Starter · Dec" },
];

export const usageHistory = [
  { month: "Jan", api: 42000, credits: 3100, storage: 28 },
  { month: "Feb", api: 55000, credits: 4200, storage: 31 },
  { month: "Mar", api: 61000, credits: 4800, storage: 35 },
  { month: "Apr", api: 70000, credits: 5200, storage: 38 },
  { month: "May", api: 74000, credits: 5800, storage: 41 },
];

export const toolUsage = [
  { name: "WYN Growth", calls: 34000, credits: 2100, color: "#6c4cf1" },
  { name: "WYN CRM", calls: 21000, credits: 1900, color: "#06b6d4" },
  { name: "WYN Reach", calls: 19000, credits: 1800, color: "#f59e0b" },
];

export const alerts = [
  { icon: "AlertTriangle", color: "#f59e0b", level: "Warning", msg: "WYN Reach is at 91% of monthly API quota.", time: "2 hours ago" },
  { icon: "Shield", color: "#10b981", level: "Info", msg: "Storage usage is within normal range.", time: "1 day ago" },
  { icon: "AlertTriangle", color: "#f43f5e", level: "Critical", msg: "Automation runs may hit limit before month end.", time: "3 days ago" },
];