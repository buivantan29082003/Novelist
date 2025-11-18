import { useState } from "react";

export default function Header() {
  return (
    <header className="w-full   z-50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between   py-3">
        {/* Left search input */}
        <div className="flex items-center gap-3 flex-1 max-w-md"> 
          <div className="relative w-full">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-70">
              {/* Search Icon */}
              <SearchIcon className="w-5 h-5 text-white/70" />
            </span>

            <input
              type="text"
              placeholder="Tìm kiếm truyện, tác giả..."
              className="w-full bg-white/5   text-white placeholder-white text-md pl-11 pr-1 py-2 rounded-full outline-none border border-white/10 focus:border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
            />
          </div>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-6 ml-6">
          <div className="p-2 px-4 bg-[#9b4de0] rounded-full font-semibold">
            <p className="text-white">Đăng ký gói</p>
          </div>
          <div className="p-2 bg-white rounded-full filter">
            <NotificationIcon className="w-6 h-6 text-white/80 hover:text-white transition" />
          </div>

          <div className="w-9 h-9 rounded-full overflow-hidden border border-white/20">
            <img
              src="https://i.pravatar.cc/300" // replace with your avatar
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// --- SVG Icons ---
function SearchIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
      />
    </svg>
  );
}

function NotificationIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      color="white"
    >
      <path color="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.4-2.1A2 2 0 0118 13.2V10a6 6 0 10-12 0v3.2c0 .7-.2 1.4-.6 2L4 17h5m6 0a3 3 0 11-6 0h6z"
      />
    </svg>
  );
}
