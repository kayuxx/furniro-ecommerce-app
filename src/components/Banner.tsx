type BannerProps = {
  alignRight: boolean;
};

export default function Banner({ alignRight = true }: BannerProps) {
  return (
    <div
      className={`${alignRight ? "justify-end" : "justify-start"}
      flex min-h-screen items-center`}
    >
      <div className="roundex-lg mx-auto mt-16 w-[80%] max-w-[1000px] space-y-3 bg-biege px-8 py-10 md:mx-16 md:w-1/2">
        <h2 className="text-[clamp(var(--text-sm),1vw,var(--text-lg))] font-semibold tracking-[0.2em] text-dark-grey">
          New Arrival
        </h2>
        <h2 className="w-[70%] text-[clamp(var(--text-base),7vw,var(--text-5xl))] font-bold text-yellow">
          Discover Our New Collection
        </h2>
        <p className="line-clamp-2 text-[clamp(var(--text-xs),1vw,var(--text-2xl))] text-dark-grey">
          lorem ipsum, Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit.
        </p>
        <button className="mt-8 cursor-pointer bg-yellow px-10 py-4 font-bold text-white uppercase md:px-18 md:py-6">
          buy now
        </button>
      </div>
    </div>
  );
}
