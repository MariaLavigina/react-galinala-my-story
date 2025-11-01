export default function BackwardButton() {
  return (
    <button
      className="
    group relative flex items-center justify-center gap-3
    px-8 py-3
    w-[160px]  /* Set a fixed width here to match ForwardButton */
    rounded-full
    text-white font-medium
    bg-gradient-to-r from-[#9399F0]/90 to-[#2C192C]/80
    border border-white/40
    shadow-inner shadow-[#2C192C]/50
    backdrop-blur-sm
    transition-all duration-300
    hover:from-[#9399F0]/100 hover:to-[#2C192C]/90
    hover:border-white/60
    hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]
    hover:scale-[1.03]
  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      <span className="tracking-wide">Назад</span>
    </button>
  );
}
