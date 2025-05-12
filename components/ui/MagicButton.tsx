import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
function MagicButton({title}:{title:string}) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none items-center focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full gap-2 cursor-pointer font-poppins items-center justify-center rounded-2xl bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
        <FaLocationArrow /> 
      </span>
    </button>
  );
}

export default MagicButton