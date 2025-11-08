export default function ForwardButton() {
  return (
    <button
      className="
        group relative flex items-center justify-center gap-4
        px-12 py-5
        rounded-full
        text-xl font-medium text-white
        bg-gradient-to-r from-[#9399F0]/90 to-[#2C192C]/80
        border border-white/40
        shadow-inner shadow-[#2C192C]/50
        backdrop-blur-sm
        transition-all duration-300
        hover:from-[#9399F0]/100 hover:to-[#2C192C]/90
        hover:border-white/60
        hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
        hover:scale-[1.05]
      "
    >
      <span className="tracking-wide leading-none">вперёд</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 flex-shrink-0 transform transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}
