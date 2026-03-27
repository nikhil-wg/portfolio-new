export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Header skeleton */}
      <div>
        <div className="h-12 w-32 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse mb-2" />
        <div className="h-6 w-64 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
      </div>

      {/* Blog grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="border border-[#e5e5e5] dark:border-white/10 rounded-xl overflow-hidden bg-white dark:bg-white/5"
          >
            {/* Image skeleton */}
            <div className="w-full aspect-[16/7] bg-[#f5f5f5] dark:bg-white/5 animate-pulse" />

            {/* Content skeleton */}
            <div className="p-6 space-y-3">
              <div className="h-4 w-24 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
              <div className="h-6 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse" />
              <div className="h-5 w-28 bg-[#f5f5f5] dark:bg-white/5 rounded animate-pulse mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
