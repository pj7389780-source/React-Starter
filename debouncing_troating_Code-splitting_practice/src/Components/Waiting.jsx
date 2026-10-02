const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-800 border-t-lime-400" />

        {/* Text */}
        <div className="text-center">
          <h2 className="text-lg font-semibold text-white">Loading...</h2>

          <p className="mt-1 text-sm text-zinc-500">Please wait a moment</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
