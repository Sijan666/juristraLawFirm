import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-1 items-center justify-center py-24 bg-white relative overflow-hidden">
      {/* Subtle luxury ambient glows */}
      <div className="absolute w-96 h-96 bg-[#F2E8E9]/60 rounded-full blur-3xl pointer-events-none -top-12 -left-12" />
      <div className="absolute w-96 h-96 bg-[#5B1621]/5 rounded-full blur-3xl pointer-events-none -bottom-12 -right-12" />

      <div className="relative flex flex-col items-center gap-8 text-center px-4">
        {/* Animated Emblem / Scales & Juristra Starburst */}
        <div className="relative flex items-center justify-center">
          {/* Outer elegant spinning gold/burgundy dashed ring */}
          <div className="w-24 h-24 rounded-full border border-[#5B1621]/20 border-t-[#5B1621] border-r-[#5B1621] animate-spin transition-all duration-1000" />

          {/* Counter-rotating subtle ring */}
          <div 
            className="absolute w-20 h-20 rounded-full border border-dashed border-[#611422]/30 animate-spin transition-all duration-1000"
            style={{ animationDirection: "reverse", animationDuration: "6s" }} 
          />

          {/* Pulsing center emblem badge */}
          <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#FAF7F7] shadow-inner flex items-center justify-center border border-[#F2E8E9]">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6 text-[#611422] animate-pulse"
              aria-hidden="true"
            >
              <rect x="10.8" y="1.5" width="2.4" height="21" rx="1.2" />
              <rect x="1.5" y="10.8" width="21" height="2.4" rx="1.2" />
              <rect
                x="10.8"
                y="1.5"
                width="2.4"
                height="21"
                rx="1.2"
                transform="rotate(45 12 12)"
              />
              <rect
                x="10.8"
                y="1.5"
                width="2.4"
                height="21"
                rx="1.2"
                transform="rotate(-45 12 12)"
              />
            </svg>
          </div>
        </div>

        {/* Text & Luxury Progress indicator */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1f1a1b]">
              Juristra
            </span>
            <span className="text-xs uppercase tracking-widest text-[#611422] font-semibold bg-[#F2E8E9] px-2 py-0.5 rounded-xs">
              Legal
            </span>
          </div>

          <p className="mt-2 text-xs font-medium tracking-widest uppercase text-gray-400">
            Preparing Legal Brief & Counsel
          </p>

          {/* Thin premium animated progress bar */}
          <div className="mt-4 w-40 h-[2px] bg-gray-100 rounded-full overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 bg-[#611422] w-1/3 rounded-full animate-[shimmer_1.5s_infinite] [animation-timing-function:ease-in-out]"
                 style={{
                   animation: "loadingShimmer 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite"
                 }}
            />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loadingShimmer {
          0% { left: -40%; width: 30%; }
          50% { left: 40%; width: 50%; }
          100% { left: 100%; width: 30%; }
        }
      `}} />
    </div>
  );
}
