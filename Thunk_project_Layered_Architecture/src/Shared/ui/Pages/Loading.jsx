const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-zinc-950 text-white">
      {/* Animated spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-zinc-800 border-t-lime-400 animate-spin" />
        <div className="absolute h-2 w-2 rounded-full bg-lime-400" />
      </div>

      {/* Loading text */}
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold tracking-wide">
          Loading<span className="text-lime-400">.</span>
        </h2>

        <p className="text-sm text-zinc-400">
          Please wait while we prepare everything for you.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mt-2 h-1 w-48 overflow-hidden rounded-full bg-zinc-800">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-lime-400" />
      </div>
    </div>
  );
};

export default Loading;
