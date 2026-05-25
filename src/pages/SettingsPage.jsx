// import React from "react";

// function Card({ children, className = "" }) {
//   return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
// }

// function SettingsPage() {
//   return (
//     <div>
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-900 font-outfit">Settings</h1>
//         <p className="text-sm text-gray-400 mt-0.5">Manage your workspace and account preferences.</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//         <Card className="p-6">
//           <p className="font-semibold text-sm mb-4 font-outfit">Profile</p>
//           <div className="flex items-center gap-4 mb-5">
//             <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">R</div>
//             <div>
//               <p className="font-bold">Ravi Kumar</p>
//               <p className="text-xs text-gray-400">ravi@wynsync.tech</p>
//             </div>
//           </div>
//           <div className="space-y-3">
//             {["Full Name", "Email Address", "Phone Number"].map((field) => (
//               <div key={field}>
//                 <label className="text-xs text-gray-400 mb-1 block">{field}</label>
//                 <input className="w-full rounded-xl px-3 py-2 text-sm border border-violet-100 bg-violet-50/40 outline-none focus:border-violet-400 transition-colors" placeholder={field} />
//               </div>
//             ))}
//           </div>
//           <button className="mt-4 w-full h-9 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
//             Save Changes
//           </button>
//         </Card>

//         <Card className="p-6">
//           <p className="font-semibold text-sm mb-4 font-outfit">Workspace</p>
//           {[
//             { label: "Workspace Name", val: "Ravi's Workspace" },
//             { label: "Timezone", val: "Asia/Kolkata (IST)" },
//             { label: "Language", val: "English" },
//           ].map((item) => (
//             <div key={item.label} className="flex items-center justify-between py-3 border-b border-violet-50 last:border-0">
//               <span className="text-sm text-gray-400">{item.label}</span>
//               <span className="text-sm font-medium">{item.val}</span>
//             </div>
//           ))}
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default SettingsPage;


import React from "react";

function Card({ children, className = "" }) {
  return <div className={`bg-white rounded-2xl border border-violet-100 shadow-sm ${className}`}>{children}</div>;
}

function SettingsPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 font-outfit">Settings</h1>
        <p className="text-sm text-gray-400 mt-0.5">Manage your workspace and account preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="p-6">
          <p className="font-semibold text-sm mb-4 font-outfit">Profile</p>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
              R
            </div>
            <div>
              <p className="font-bold">Ravi Kumar</p>
              <p className="text-xs text-gray-400">ravi@wynsync.tech</p>
            </div>
          </div>
          <div className="space-y-3">
            {["Full Name", "Email Address", "Phone Number"].map((field) => (
              <div key={field}>
                <label className="text-xs text-gray-400 mb-1 block">{field}</label>
                <input
                  className="w-full rounded-xl px-3 py-2 text-sm border border-violet-100 bg-violet-50/40 outline-none focus:border-violet-400 transition-colors"
                  placeholder={field}
                />
              </div>
            ))}
          </div>
          <button className="mt-4 w-full h-9 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6c4cf1] to-[#8b6ff5]">
            Save Changes
          </button>
        </Card>

        <Card className="p-6">
          <p className="font-semibold text-sm mb-4 font-outfit">Workspace</p>
          {[
            { label: "Workspace Name", val: "Ravi's Workspace" },
            { label: "Timezone", val: "Asia/Kolkata (IST)" },
            { label: "Language", val: "English" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between py-3 border-b border-violet-50 last:border-0">
              <span className="text-sm text-gray-400">{item.label}</span>
              <span className="text-sm font-medium">{item.val}</span>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

export default SettingsPage;