// components/Divider.jsx
const Divider = () => {
  return (
    <div
      className="
        h-[1px]                   /* thin line on mobile */
        md:h-[2px]                /* thicker on desktop */
        w-1/3                     /* mobile width */
        sm:w-1/2                  /* tablet width */
        md:w-2/3                  /* desktop width */
        lg:w-3/4                  /* large desktop width */
        mx-auto                   /* center */
        my-12                     /* vertical spacing mobile */
        md:my-32                  /* more spacing on desktop */
        bg-gradient-to-r          /* gradient effect */
        from-white/20
        via-white/50
        to-white/20
        rounded-full              /* soft edges */
      "
    />
  );
};

export default Divider;
